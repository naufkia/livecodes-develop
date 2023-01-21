import type {
  API,
  Code,
  Config,
  ChangeHandler,
  EmbedOptions,
  Playground,
  UrlQueryParams,
  CustomEvents,
} from './models';

export type { Code, Config, EmbedOptions, Playground };
export const createPlayground = async (
  container: string | HTMLElement,
  options: EmbedOptions = {},
): Promise<Playground> => {
  const {
    appUrl = 'https://livecodes.io/',
    params = {},
    config = {},
    import: importFrom,
    lite = false,
    loading = 'lazy',
    template,
    view = 'split',
  } = options;

  let containerElement: HTMLElement | null;
  if (typeof container === 'string') {
    containerElement = document.querySelector(container);
  } else {
    containerElement = container;
  }
  if (!container) {
    throw new Error('Container element is required.');
  }
  if (!containerElement) {
    throw new Error(`Cannot find element: "${container}"`);
  }

  let url: URL;
  try {
    url = new URL(appUrl);
  } catch {
    throw new Error(`"${appUrl}" is not a valid URL.`);
  }

  const origin = url.origin;

  if (typeof params === 'object') {
    (Object.keys(params) as Array<keyof UrlQueryParams>).forEach((param) => {
      url.searchParams.set(param, String(params[param]));
    });
  }

  if (typeof config === 'string') {
    url.searchParams.set('config', config);
  } else if (typeof config === 'object' && Object.keys(config).length > 0) {
    try {
      const encoded = btoa(JSON.stringify(config));
      url.searchParams.set('config', 'data:application/json;base64,' + encoded);
    } catch {
      throw new Error('Invalid configuration object.');
    }
  }

  if (template) {
    url.searchParams.set('template', template);
  }

  if (importFrom) {
    url.searchParams.set('x', importFrom);
  }

  url.searchParams.set(lite ? 'lite' : 'embed', 'true');
  url.searchParams.set('loading', loading);
  url.searchParams.set('view', view);

  let livecodesReady = false;
  let destroyed = false;
  const alreadyDestroyedMessage = 'Cannot call API methods after calling `destroy()`.';
  const createIframe = () =>
    new Promise<HTMLIFrameElement>((resolve) => {
      if (!containerElement) return;

      const height = containerElement.dataset.height || containerElement.style.height;
      if (height) {
        const cssHeight = isNaN(Number(height)) ? height : height + 'px';
        containerElement.style.height = cssHeight;
      }
      if (containerElement.dataset.defaultStyles !== 'false') {
        containerElement.style.backgroundColor ||= '#fff';
        containerElement.style.border ||= '1px solid black';
        containerElement.style.borderRadius ||= '5px';
        containerElement.style.boxSizing ||= 'border-box';
        containerElement.style.padding ||= '0';
        containerElement.style.width ||= '100%';
        containerElement.style.height ||= containerElement.style.height || '300px';
        containerElement.style.minHeight = '200px';
        containerElement.style.overflow ||= 'hidden';
        containerElement.style.resize ||= 'vertical';
      }

      const frame = document.createElement('iframe');
      frame.setAttribute(
        'allow',
        'accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share',
      );
      frame.setAttribute('allowtransparency', 'true');
      frame.setAttribute('allowpaymentrequest', 'true');
      frame.setAttribute('allowfullscreen', 'true');
      frame.setAttribute(
        'sandbox',
        'allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts',
      );
      const iframeLoading = loading === 'eager' ? 'eager' : 'lazy';
      frame.setAttribute('loading', iframeLoading);
      frame.classList.add('livecodes');
      frame.style.height = '100%';
      frame.style.minHeight = '200px';
      frame.style.width = '100%';
      frame.style.margin = '0';
      frame.style.border = '0';
      frame.style.borderRadius = containerElement.style.borderRadius;
      frame.src = url.href;
      frame.onload = () => {
        addEventListener(
          'message',
          function readyHandler(
            e: MessageEventInit<{
              type: CustomEvents['ready'];
              method: keyof API;
              payload?: any;
            }>,
          ) {
            if (e.source !== frame.contentWindow || e.origin !== origin) return;
            if (e.data?.type === 'livecodes-ready') {
              removeEventListener('message', readyHandler);
              livecodesReady = true;
            }
          },
        );
        resolve(frame);
      };
      containerElement.innerHTML = '';
      containerElement.appendChild(frame);
    });

  const iframe = await createIframe();

  const delay = (duration = 100) =>
    new Promise((resolve) => {
      setTimeout(resolve, duration);
    });

  const loadLivecodes = (): Promise<void> =>
    destroyed
      ? Promise.reject(alreadyDestroyedMessage)
      : new Promise(async (resolve) => {
          const message: { type: CustomEvents['load'] } = { type: 'livecodes-load' };
          iframe.contentWindow?.postMessage(message, origin);
          while (!livecodesReady) {
            await delay();
          }
          resolve();
        });

  const callAPI = <T>(method: keyof API, args?: any[]) =>
    new Promise<T>(async (resolve, reject) => {
      if (destroyed) {
        return reject(alreadyDestroyedMessage);
      }
      if (!livecodesReady) {
        await loadLivecodes();
      }
      addEventListener(
        'message',
        function handler(
          e: MessageEventInit<{
            type: CustomEvents['apiResponse'];
            method: keyof API;
            payload?: any;
          }>,
        ) {
          if (
            e.source !== iframe.contentWindow ||
            e.origin !== origin ||
            e.data?.type !== 'livecodes-api-response'
          ) {
            return;
          }

          if (e.data.method === method) {
            removeEventListener('message', handler);
            const payload = e.data.payload;
            if (payload?.error) {
              reject(payload.error);
            } else {
              resolve(payload);
            }
          }
        },
      );
      iframe.contentWindow?.postMessage({ method, args }, origin);
    });

  let watchers: ChangeHandler[] = [];
  const onChange = (fn: ChangeHandler) => {
    if (destroyed) {
      throw new Error(alreadyDestroyedMessage);
    }
    watchers.push(fn);
    return {
      remove: () => {
        watchers = watchers.filter((w) => w !== fn);
      },
    };
  };

  addEventListener(
    'message',
    async (
      e: MessageEventInit<{
        type: CustomEvents['change'];
      }>,
    ) => {
      if (
        e.source !== iframe.contentWindow ||
        e.origin !== origin ||
        e.data?.type !== 'livecodes-change'
      ) {
        return;
      }
      const code = await callAPI<Code>('getCode');
      const config = await callAPI<Config>('getConfig');

      watchers.forEach((fn) => {
        fn({ code, config });
      });
    },
  );

  const destroy = () => {
    watchers.length = 0;
    if (containerElement) {
      containerElement.innerHTML = '';
    }
    destroyed = true;
  };

  if (loading === 'lazy' && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(async (entry) => {
          if (entry.isIntersecting) {
            await loadLivecodes();
            observer.unobserve(containerElement!);
          }
        });
      },
      { rootMargin: '150px' },
    );
    observer.observe(containerElement);
  }

  return {
    load: () => loadLivecodes(),
    run: () => callAPI('run'),
    format: (allEditors) => callAPI('format', [allEditors]),
    getShareUrl: (shortUrl) => callAPI('getShareUrl', [shortUrl]),
    getConfig: (contentOnly) => callAPI('getConfig', [contentOnly]),
    setConfig: (config) => callAPI('setConfig', [config]),
    getCode: () => callAPI('getCode'),
    show: (pane, options) => callAPI('show', [pane, options]),
    runTests: () => callAPI('runTests'),
    onChange: (fn) => onChange(fn),
    exec: (command, ...args) => callAPI('exec', [command, ...args]),
    destroy: () => {
      if (!livecodesReady) {
        if (destroyed) {
          return Promise.reject(alreadyDestroyedMessage);
        }
        destroy();
        return Promise.resolve();
      }
      return callAPI('destroy').then(destroy);
    },
  };
};

if (
  globalThis.document && // to escape SSG in docusaurus
  document.currentScript &&
  'prefill' in document.currentScript?.dataset
) {
  window.addEventListener('load', () => {
    document.querySelectorAll<HTMLElement>('.livecodes').forEach((codeblock) => {
      let options: EmbedOptions | undefined;
      const optionsStr = codeblock.dataset.options;
      if (optionsStr) {
        try {
          options = JSON.parse(optionsStr);
        } catch {
          //
        }
      }
      let config: Config | undefined;
      const configStr = codeblock.dataset.config || codeblock.dataset.prefill;
      if (configStr) {
        try {
          config = JSON.parse(configStr);
        } catch {
          //
        }
      }
      createPlayground(codeblock, {
        import: 'dom/' + encodeURIComponent(codeblock.outerHTML),
        ...options,
        ...(config ? { config } : {}),
      });
    });
  });
}

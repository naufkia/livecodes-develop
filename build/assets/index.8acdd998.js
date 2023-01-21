const N=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))l(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(n){if(n.ep)return;n.ep=!0;const i=o(n);fetch(n.href,i)}};N();const L=(e=location.origin)=>Boolean(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.io")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost"))),P="https://dpaste.com/",$="https://dpaste.com/api/v2/",T="https://api2.livecodes.io/share",M={getProject:async e=>{try{const t=await fetch(P+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{const t=await fetch($,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(P,""):""}catch{return""}}},q={getProject:async e=>{if(e.length<11)return M.getProject(e);if(!L())return{};try{const t=await fetch(T+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!L())return"";try{const t=await fetch(T,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},J=L()?q:M;var H=`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>LiveCodes</title>
    <style>
      body {
        overflow: hidden;
      }
    </style>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin />
    <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
    <link rel="stylesheet" href="{{baseUrl}}app.3bbdd5b50c75abd3b41c8cc793fd7bef.css" id="app-styles" />
    <script type="importmap">
      {
        "imports": {
          "@codemirror/autocomplete": "{{codemirrorCoreUrl}}",
          "@codemirror/commands": "{{codemirrorCoreUrl}}",
          "@codemirror/language": "{{codemirrorCoreUrl}}",
          "@codemirror/lint": "{{codemirrorCoreUrl}}",
          "@codemirror/search": "{{codemirrorCoreUrl}}",
          "@codemirror/state": "{{codemirrorCoreUrl}}",
          "@codemirror/theme-one-dark": "{{codemirrorCoreUrl}}",
          "@codemirror/view": "{{codemirrorCoreUrl}}",
          "@codemirror/lang-html": "{{codemirrorCoreUrl}}",
          "@codemirror/lang-css": "{{codemirrorCoreUrl}}",
          "@codemirror/lang-javascript": "{{codemirrorCoreUrl}}",
          "@lezer/common": "{{codemirrorCoreUrl}}",
          "@lezer/highlight": "{{codemirrorCoreUrl}}",
          "@lezer/lr": "{{codemirrorCoreUrl}}"
        }
      }
    <\/script>
  </head>
  <body>
    <div id="container">
      <div id="toolbar">
        <div id="logo">
          <a href="/" title="LiveCodes: Code playground that runs in the browser!"
            ><img
              alt="LiveCodes Logo"
              src="{{baseUrl}}assets/images/livecodes-logo.svg"
              width="50"
              loading="lazy"
          /></a>
        </div>
        <div id="select-editor"></div>
        <div id="project-title" contenteditable="true" tabindex="8">Untitled Project</div>
        <div id="buttons">
          <a
            href="javascript:void(0)"
            id="run-button"
            class="button hint--bottom"
            data-hint="Run (Shift + Enter)"
            tabindex="9"
          >
            <img
              width="20"
              height="20"
              alt="Run"
              src="{{baseUrl}}assets/images/play.svg"
              loading="lazy"
            />
          </a>
          <a
            href="javascript:void(0)"
            id="result-button"
            class="button hint--bottom"
            data-hint="Toggle Result"
            tabindex="10"
          >
            <img
              width="28"
              height="28"
              alt="Result"
              src="{{baseUrl}}assets/images/document.svg"
              loading="lazy"
            />
          </a>
          <a
            href="javascript:void(0)"
            id="fullscreen-button"
            class="button hint--bottom"
            data-hint="Full Screen"
            tabindex="11"
          >
            <img
              width="28"
              height="28"
              alt="Fullscreen"
              src="{{baseUrl}}assets/images/expand.svg"
              loading="lazy"
            />
          </a>
          <a
            href="javascript:void(0)"
            id="settings-button"
            class="button"
            aria-label="Menu"
            tabindex="12"
          >
            <img
              width="30"
              height="30"
              alt="Menu"
              src="{{baseUrl}}assets/images/menu.svg"
              loading="lazy"
            />
          </a>
          <div id="settings-menu-container" class="menu-scroller"></div>
        </div>
      </div>
      <div id="editor-container">
        <div id="editors">
          <div id="markup" class="editor"></div>
          <div id="style" class="editor"></div>
          <div id="script" class="editor"></div>

          <div id="editor-tools" class="tool-buttons">
            <span
              id="copy-btn"
              class="hint--top-right"
              data-hint="Copy (Ctrl/Cmd + A, Ctrl/Cmd + C)"
            >
              <img src="{{baseUrl}}assets/images/copy.svg" alt="copy" />
            </span>
            <span id="undo-btn" class="hint--top-right" data-hint="Undo (Ctrl/Cmd + Z)">
              <img src="{{baseUrl}}assets/images/undo.svg" alt="undo" />
            </span>
            <span id="redo-btn" class="hint--top-right" data-hint="Redo (Ctrl/Cmd + Shift + Z)">
              <img src="{{baseUrl}}assets/images/redo.svg" alt="redo" />
            </span>
            <span id="format-btn" class="hint--top-right" data-hint="Format (Alt + Shift + F)">
              <img src="{{baseUrl}}assets/images/format.svg" alt="format" />
            </span>
            <span id="editor-status">
              <span id="editor-mode" class="hint--top-right" data-hint="Editor Mode"></span>
              <span data-status="markup"></span>
              <span data-status="style"></span>
              <span data-status="script"></span>
            </span>
            <span id="external-resources-btn" class="hint--top-left" data-hint="External CSS/JS">
              <img src="{{baseUrl}}assets/images/script-sheet.svg" alt="External CSS/JS" />
              <span id="external-resources-mark" class="mark"></span>
            </span>
          </div>
          <button id="code-run-button" class="hint--top-left" data-hint="Run (Shift + Enter)">
            <img
              width="20"
              height="20"
              alt="Run"
              src="{{baseUrl}}assets/images/play.svg"
              loading="lazy"
            />
          </button>
        </div>
        <div id="output">
          <div id="result" class="full"></div>
          <div id="tools-pane"></div>
        </div>
      </div>
    </div>
    <div id="overlay" style="display: none"></div>
    <div id="modal-container" style="display: none">
      <div id="modal"></div>
    </div>
    <script src="https://polyfill.io/v3/polyfill.min.js" crossorigin="anonymous"><\/script>
    <script type="module">
      import { app } from './livecodes/{{script}}';
      window.app = app;
    <\/script>
  </body>
</html>
`;const r={load:"livecodes-load",appLoaded:"livecodes-app-loaded",ready:"livecodes-ready",change:"livecodes-change",testResults:"livecodes-test-results",destroy:"livecodes-destroy",resizeEditor:"livecodes-resize-editor",apiResponse:"livecodes-api-response"},B=()=>{try{return window.self!==window.top}catch{return!0}},d=new URLSearchParams(location.search),W=d.get("lite")!=null&&d.get("lite")!=="false",p=W||d.get("embed")!=null&&d.get("embed")!=="false"||B(),c=d.get("loading"),A=p&&c!=="eager",Z=p?c==="lazy"||c==="click"||c==="eager"?c:"lazy":"eager",_=async(e,t={})=>new Promise(async o=>{const l=document.querySelector(e);if(!l)throw new Error(`Cannot find element with the selector: "${e}"`);const n=(location.origin+location.pathname).split("/").slice(0,-1).join("/")+"/livecodes/",i=W?"lite.de7d8a313ca5c8dd8d60233433f6a91c.js":p?"embed.e60548e64e0e0035e7faabb283b773a8.js":"app.50490601410a2945f3d6871031c34f84.js",a="*",C=document.createElement("style");C.innerHTML=`
        ${e} {
            min-width: 300px;
            min-height: 200px;
            padding: 0;
            overflow: hidden;
        }
        ${e} > iframe {
            border: 0;
            width: 100%;
            height: 100%;
        }
        ${e}.embed iframe {
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            border: 1px solid #001b25;
            border-radius: 5px;
        }
    `,document.head.appendChild(C);const U=()=>{var E,x,S;const s=document.createElement("iframe");s.name="app",s.style.display="none",l.appendChild(s),(E=s.contentWindow)==null||E.document.open(),(x=s.contentWindow)==null||x.document.write(H.replace(/{{baseUrl}}/g,n).replace(/{{script}}/g,i).replace(/{{codemirrorCoreUrl}}/g,`${n}vendor/codemirror/v6.0.1/codemirror-core.js`)),(S=s.contentWindow)==null||S.document.close(),p&&(window.addEventListener(r.appLoaded,()=>{parent.postMessage({type:r.appLoaded},a)}),window.addEventListener(r.ready,()=>{parent.postMessage({type:r.ready},a)}),window.addEventListener(r.change,()=>{parent.postMessage({type:r.change},a)})),s.addEventListener("load",async()=>{var j;const k=(j=s.contentWindow)==null?void 0:j.app;if(typeof k=="function"){const g=await k(t,n);s.style.display="block",window.dispatchEvent(new CustomEvent(r.appLoaded,{detail:g})),addEventListener("message",async h=>{var z;if(p){if(h.source!==parent)return;const{method:y,args:f}=h.data||{};if(!y)return;const I=Array.isArray(f)?f:[f];let w;try{w=await g[y](...I)}catch(O){w={error:O.message||O}}parent.postMessage({type:r.apiResponse,method:y,payload:w},a)}else{if(h.source!==s.contentWindow)return;((z=h.data)==null?void 0:z.args)==="home"&&(location.href="/")}}),o(g)}})};if(A){window.addEventListener(r.load,U,{once:!0});const s=document.createElement("link");s.href=n+i,s.rel="preload",s.as="script",document.head.appendChild(s)}else U()}),D=async e=>{if(!e)return;const t=await J.getProject(e);if(!t.result)return;const o=document.createElement("iframe");o.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts"),o.setAttribute("scrolling","no"),o.classList.add("preview"),o.srcdoc=t.result,document.body.appendChild(o)};if(c==="click"&&d.get("preview")!=="false"){const e=d.get("x");e!=null&&e.startsWith("id/")&&D(e.replace("id/",""))}const u=document.querySelector("#animating-logo"),F=document.querySelector("#cube"),m=document.querySelector("#click-to-load");p&&(document.body.classList.add("embed"),A&&(document.body.classList.add("click-to-load"),F.classList.remove("cube"),u.classList.add("hidden"),u.style.display="none",m.style.display="flex",m.classList.add("visible"),m.addEventListener("click",b),addEventListener("message",e=>{var t;e.source===parent&&((t=e.data)==null?void 0:t.type)===r.load&&b()}),Z==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((t,o)=>{t.forEach(async l=>{l.isIntersecting&&(b(),o.unobserve(document.body))})},{rootMargin:"150px"}).observe(document.body)));let R=!1;function b(){var e;R||(m.classList.remove("visible"),(e=document.querySelector(".preview"))==null||e.classList.add("hidden"),setTimeout(()=>{document.body.classList.remove("click-to-load"),u.style.display="flex",u.classList.remove("hidden"),F.classList.add("cube"),setTimeout(()=>{var t;m.remove(),(t=document.querySelector(".preview"))==null||t.remove()},300)},500),window.dispatchEvent(new Event(r.load)),R=!0)}function v(){document.body.style.height=window.innerHeight+"px"}v();window.addEventListener("resize",v,!1);setTimeout(v,500);window.addEventListener(r.appLoaded,e=>{u.remove(),window.livecodes=e.detail});window.addEventListener(r.ready,()=>{});window.addEventListener(r.change,()=>{});window.addEventListener(r.testResults,e=>{});window.addEventListener(r.destroy,()=>{window.removeEventListener("resize",v),document.body.innerHTML="",document.head.innerHTML=""});const G=e=>{const t="data%3Aapplication%2Fjson%3Bbase64%2C";if(e&&e.startsWith(t))try{const o=decodeURIComponent(e.replace(t,""));return JSON.parse(atob(o))}catch{}return{}};_("#livecodes",G(d.get("config")));
//# sourceMappingURL=index.8acdd998.js.map

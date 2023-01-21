import type { Config } from '../models';
import { modulesService } from '../services';
import { removeComments, removeCommentsAndStrings } from '../utils';

export const importsPattern =
  /(import\s+?(?:(?:(?:[\w*\s{},\$]*)\s+from\s+?)|))((?:".*?")|(?:'.*?'))([\s]*?(?:;|$|))/g;

export const dynamicImportsPattern = /(import\s*?\(\s*?((?:".*?")|(?:'.*?'))\s*?\))/g;

export const getImports = (code: string) =>
  [
    ...[...removeComments(code).matchAll(new RegExp(importsPattern))],
    ...[...removeComments(code).matchAll(new RegExp(dynamicImportsPattern))],
  ].map((arr) => arr[2].replace(/"/g, '').replace(/'/g, ''));

const isBare = (mod: string) =>
  !mod.startsWith('https://') &&
  !mod.startsWith('http://') &&
  !mod.startsWith('.') &&
  !mod.startsWith('/') &&
  !mod.startsWith('data:') &&
  !mod.startsWith('blob:');

export const createImportMap = (code: string, config: Config) =>
  getImports(code)
    .map((libName) => {
      if (!isBare(libName)) {
        return {};
      } else {
        const key = Object.keys(config.imports).find(
          (mod) => mod === libName || libName.startsWith(mod + '/'),
        );
        if (key) {
          return { [key]: config.imports[key] };
        }
        return {
          [libName]: modulesService.getModuleUrl(libName, {
            defaultCDN: config?.customSettings?.defaultCDN,
          }),
        };
      }
    })
    .reduce((acc, curr) => ({ ...acc, ...curr }), {} as Record<string, string>);

export const hasImports = (code: string) => getImports(code).length > 0;

export const hasExports = (code: string) =>
  new RegExp(/(^export\s)|([\s|;]export\s)/).test(removeCommentsAndStrings(code));

export const hasAwait = (code: string) =>
  new RegExp(/(^await\s)|([\s|;]await\s)/).test(removeCommentsAndStrings(code));

export const isModuleScript = (code: string) =>
  hasImports(code) || hasExports(code) || hasAwait(code);

export const replaceImports = (code: string, config: Config) => {
  const importMap = createImportMap(code, config);
  return code.replace(new RegExp(importsPattern), (statement) => {
    const libName = statement
      .replace(new RegExp(importsPattern), '$2')
      .replace(/"/g, '')
      .replace(/'/g, '');

    const key = Object.keys(importMap).find(
      (mod) => mod === libName || libName.startsWith(mod + '/'),
    );
    if (!key) {
      return statement;
    }
    return statement.replace(key, importMap[key]);
  });
};

export const styleimportsPattern =
  /(?:@import\s+?)((?:".*?")|(?:'.*?')|(?:url\('.*?'\))|(?:url\(".*?"\)))(.*)?;/g;

export const hasStyleImports = (code: string) => new RegExp(styleimportsPattern).test(code);

export const replaceStyleImports = (code: string) =>
  code.replace(new RegExp(styleimportsPattern), (statement, match, media) => {
    const url: string = match
      .replace(/"/g, '')
      .replace(/'/g, '')
      .replace(/url\(/g, '')
      .replace(/\)/g, '');
    const modified =
      '@import "' +
      modulesService.getModuleUrl(url, { isModule: false, defaultCDN: 'jsdelivr' }) +
      '";';
    const mediaQuery = media?.trim();
    return !isBare(url)
      ? statement
      : mediaQuery
      ? `@media ${mediaQuery} {\n${modified}\n}`
      : modified;
  });

// based on https://github.com/sveltejs/svelte-repl/blob/master/src/workers/bundler/plugins/commonjs.js
export const cjs2esm = (code: string) => {
  const strippedCode = removeComments(code);
  if (!/\b(require|module|exports)\b/.test(strippedCode)) return code;
  const requirePattern = /(?:^|\s)require(?:\s*)\((?:\s*)('(.*?)'|"(.*?)")(?:\s*)\)/g;

  const getRequires = (str: string) =>
    [...str.matchAll(new RegExp(requirePattern))].map((arr) =>
      arr[1].replace(/"/g, '').replace(/'/g, ''),
    );

  const requires = getRequires(strippedCode);

  if (requires.length === 0) return code;

  const imports = requires
    .map((id, i) =>
      [
        `import __requires_${i}_default from '${id}';`,
        `import * as __requires_${i} from '${id}';`,
      ].join('\n'),
    )
    .join('\n');
  const lookup = `const __requires_lookup = { ${requires
    .map((id, i) => `'${id}': __requires_${i}_default || __requires_${i}`)
    .join(', ')} };`;

  const require = `window.require = window.require || ((id) => {
	if (id in __requires_lookup) return __requires_lookup[id];
	throw new Error(\`Cannot require modules dynamically (\${id})\`);
});`;

  return [
    imports,
    lookup,
    require,
    `const exports = {}; const module = { exports };`,
    code,
    `export default module.exports;`,
  ].join('\n\n');
};

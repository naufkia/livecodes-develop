import type { LanguageSpecs } from '../../models';
import { parserPlugins } from '../prettier';

export const malina: LanguageSpecs = {
  name: 'malina',
  title: 'Malina.js',
  parser: {
    name: 'html',
    pluginUrls: [parserPlugins.html, parserPlugins.babel],
  },
  compiler: {
    factory: (_config, baseUrl) => {
      (self as any).importScripts(baseUrl + '{{hash:lang-malina-compiler.js}}');
      return (self as any).createMalinaCompiler();
    },
  },
  extensions: ['xht'],
  editor: 'script',
  editorLanguage: 'html',
};

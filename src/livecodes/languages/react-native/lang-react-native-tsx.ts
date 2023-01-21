import type { LanguageSpecs } from '../../models';
import { typescriptOptions } from '../typescript';
import { getLanguageCustomSettings } from '../utils';
import { parserPlugins } from '../prettier';
import { reactNativeWebUrl } from './lang-react-native';

export const reactNativeTsx: LanguageSpecs = {
  name: 'react-native-tsx',
  title: 'RN (TSX)',
  longTitle: 'React Native (TSX)',
  parser: {
    name: 'babel',
    pluginUrls: [parserPlugins.babel, parserPlugins.html],
  },
  compiler: {
    dependencies: ['typescript'],
    factory:
      () =>
      async (code, { config, language }) =>
        (window as any).ts.transpile(code, {
          ...typescriptOptions,
          ...getLanguageCustomSettings('typescript', config),
          ...getLanguageCustomSettings(language, config),
        }),
    imports: {
      react: reactNativeWebUrl,
      'react-native': reactNativeWebUrl,
    },
  },
  extensions: ['react-native.tsx'],
  editor: 'script',
  editorLanguage: 'typescript',
};

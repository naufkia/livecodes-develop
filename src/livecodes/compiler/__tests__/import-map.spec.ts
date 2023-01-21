import { Config } from '../../models';
import {
  createImportMap,
  hasStyleImports,
  replaceImports,
  replaceStyleImports,
} from '../import-map';

describe('Import map', () => {
  test('create import map', () => {
    const config = {
      imports: {
        mylib: 'https://someurl/path/module',
        lodash: 'https://unpkg.com/lodash',
        similar: './should/not/be/used',
        unused: 'https://someurl2/path2/module2',
      },
    } as unknown as Config;
    const code = `
    import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
    import fp from "lodash/fp.js";
    import thing from "similar2";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'mylib';
    console.log('hi');
    `;

    const importMap = {
      '@codemirror/basic-setup': 'https://jspm.dev/@codemirror/basic-setup',
      lodash: 'https://unpkg.com/lodash',
      mylib: 'https://someurl/path/module',
      similar2: 'https://jspm.dev/similar2',
    };

    const map = createImportMap(code, config);
    expect(map).toEqual(importMap);
  });

  test('replace imports', () => {
    const config = {
      imports: {
        mylib: 'https://someurl/path/module',
        lodash: 'https://unpkg.com/lodash',
      },
    } as unknown as Config;
    const code = `
    import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
    import fp from "lodash/fp.js";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'mylib'
    `;

    const expectedCode = `
    import { EditorState, EditorView, basicSetup } from 'https://jspm.dev/@codemirror/basic-setup';
    import fp from "https://unpkg.com/lodash/fp.js";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'https://someurl/path/module'
    `;

    const processedCode = replaceImports(code, config);
    expect(processedCode).toEqual(expectedCode);
  });
  test('create import map - defaultCDN', () => {
    const config = {
      imports: {
        mylib: 'https://someurl/path/module',
        lodash: 'https://unpkg.com/lodash',
        similar: './should/not/be/used',
        unused: 'https://someurl2/path2/module2',
      },
      customSettings: { defaultCDN: 'skypack' },
    } as unknown as Config;
    const code = `
    import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
    import fp from "lodash/fp.js";
    import thing from "similar2";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'mylib';
    console.log('hi');
    `;

    const importMap = {
      '@codemirror/basic-setup': 'https://cdn.skypack.dev/@codemirror/basic-setup',
      lodash: 'https://unpkg.com/lodash',
      mylib: 'https://someurl/path/module',
      similar2: 'https://cdn.skypack.dev/similar2',
    };

    const map = createImportMap(code, config);
    expect(map).toEqual(importMap);
  });

  test('replace imports - defaultCDN', () => {
    const config = {
      imports: {
        mylib: 'https://someurl/path/module',
        lodash: 'https://unpkg.com/lodash',
      },
      customSettings: { defaultCDN: 'skypack' },
    } as unknown as Config;
    const code = `
    import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
    import fp from "lodash/fp.js";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'mylib'
    `;

    const expectedCode = `
    import { EditorState, EditorView, basicSetup } from 'https://cdn.skypack.dev/@codemirror/basic-setup';
    import fp from "https://unpkg.com/lodash/fp.js";
    import { html } from 'http://localhost/@codemirror/lang-html';
    import { tagExtension } from './state';
    import { oneDark } from '../theme-one-dark';
    import {keymap} from 'https://someurl/path/module'
    `;

    const processedCode = replaceImports(code, config);
    expect(processedCode).toEqual(expectedCode);
  });

  test('replace style imports', () => {
    const code = `
@import "github-markdown-css";
@import "unpkg:github-markdown-css";
@import "https://cdn.jsdelivr.net/npm/github-markdown-css";
@import "github-markdown-css" print;
@import "github-markdown-css" screen and (orientation:landscape);

body {
  color: blue;
}    `;

    const expectedCode = `
@import "https://cdn.jsdelivr.net/npm/github-markdown-css";
@import "https://unpkg.com/github-markdown-css";
@import "https://cdn.jsdelivr.net/npm/github-markdown-css";
@media print {
@import "https://cdn.jsdelivr.net/npm/github-markdown-css";
}
@media screen and (orientation:landscape) {
@import "https://cdn.jsdelivr.net/npm/github-markdown-css";
}

body {
  color: blue;
}    `;

    expect(hasStyleImports(code)).toBe(true);
    expect(hasStyleImports('body {color: blue;}')).toBe(false);

    const processedCode = replaceStyleImports(code);
    expect(processedCode).toEqual(expectedCode);
  });
});

const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const childProcess = require('child_process');
const vite = require('vite');

const pkg = require('../package.json');
const { applyHash } = require('./hash');
const { injectCss } = require('./inject-css');
const { buildVendors } = require('./vendors');
const { buildStyles } = require('./styles');

const args = process.argv.slice(2);
const devMode = args.includes('--dev');
const outDir = path.resolve(__dirname + '/../build');
const monacoVersion = `v${pkg.dependencies['monaco-editor']}`;
const codemirrorVersion = `v${pkg.dependencies['codemirror']}`;
let version, gitCommit, repoUrl;

/** @param {string} dir */
function mkdir(dir) {
  if (!fs.existsSync(path.resolve(dir))) {
    fs.mkdirSync(path.resolve(dir));
  }
}
/** @param {ArrayBuffer | Uint8Array} uint8array */
function uint8arrayToString(uint8array) {
  return Buffer.from(uint8array).toString('utf-8');
}
/** @param {string} code */
function iife(code) {
  return '(function(){' + code.trim() + '\n})();\n';
}

/**
 * @param {Record<string,string>} acc
 * @param {string} cur
 */
function arrToObj(acc, cur) {
  const custom = {
    'src/lib/livecodes.ts': 'livecodes.esm',
    'src/livecodes/templates/starter/index.ts': 'templates',
  };
  const path = cur.split('/');
  const out = cur in custom ? custom[cur] : path[path.length - 1].replace('.ts', '');
  return {
    ...acc,
    [out]: cur,
  };
}

const getFileNames = async (dir) =>
  (await fs.promises.readdir(dir)).filter((name) => !fs.statSync(dir + name).isDirectory());

const prepareDir = async () => {
  mkdir(outDir);
  mkdir(outDir + '/livecodes/');
  mkdir(outDir + '/sdk/');
  const fileNames = await getFileNames(outDir + '/livecodes/');
  await Promise.all(fileNames.map(async (f) => fs.promises.unlink(outDir + '/livecodes/' + f)));

  await fs.promises.copyFile(
    path.resolve(__dirname + '/../src/favicon.ico'),
    path.resolve(outDir + '/favicon.ico'),
  );
  await fs.promises.copyFile(
    path.resolve(__dirname + '/../src/404.html'),
    path.resolve(outDir + '/404.html'),
  );
};

try {
  version = require('../package.json').version;
  gitCommit = childProcess.execSync('git rev-parse --short=8 HEAD').toString().replace(/\n/g, '');
  repoUrl = require('../package.json').repository.url;
  if (repoUrl.endsWith('/')) {
    repoUrl = repoUrl.slice(0, -1);
  }
} catch (error) {
  console.log(error);
}

/** @type {Partial<esbuild.BuildOptions>} */
const baseOptions = {
  bundle: true,
  minify: devMode ? false : true,
  outdir: 'build/livecodes',
  format: 'esm',
  target: 'es2020',
  sourcemap: true,
  sourcesContent: true,
  define: {
    'process.env.VERSION': `"${version || ''}"`,
    'process.env.GIT_COMMIT': `"${gitCommit || ''}"`,
    'process.env.REPO_URL': `"${repoUrl || ''}"`,
    'process.env.CI': `${process.env.CI || false}`,
    'process.env.monacoVersion': `"${monacoVersion}"`,
    'process.env.codemirrorVersion': `"${codemirrorVersion}"`,
  },
  loader: { '.html': 'text', '.ttf': 'file' },
  logLevel: 'error',
  external: ['@codemirror/*', '@lezer/*'],
};

const sdkBuild = () => {
  const sdkSrcDir = 'src/sdk/';
  const sdkSrcMod = sdkSrcDir + 'index.ts';
  const sdkOutDir = 'build/sdk/';

  fs.copyFileSync(path.resolve('LICENSE'), path.resolve(sdkOutDir + 'LICENSE'));
  fs.copyFileSync(path.resolve('README.md'), path.resolve(sdkOutDir + 'README.md'));
  fs.copyFileSync(
    path.resolve(sdkSrcDir + 'package.sdk.json'),
    path.resolve(sdkOutDir + 'package.json'),
  );

  const sdkOptions = {
    ...baseOptions,
    target: 'es2018',
    outdir: undefined,
  };

  return Promise.all([
    esbuild.build({
      ...sdkOptions,
      entryPoints: [sdkSrcMod],
      outdir: undefined,
      outfile: sdkOutDir + 'livecodes.js',
    }),
    esbuild.build({
      ...sdkOptions,
      entryPoints: [sdkSrcMod],
      outdir: undefined,
      outfile: sdkOutDir + 'livecodes.cjs',
      format: 'cjs',
    }),
    esbuild.build({
      ...sdkOptions,
      entryPoints: [sdkSrcMod],
      outdir: undefined,
      outfile: sdkOutDir + 'livecodes.umd.js',
      format: 'iife',
      globalName: 'livecodes',
    }),
    esbuild.build({
      ...sdkOptions,
      entryPoints: [sdkSrcDir + 'react.tsx'],
      outdir: undefined,
      outfile: sdkOutDir + 'react.js',
      external: ['react'],
    }),
    esbuild.build({
      ...sdkOptions,
      entryPoints: [sdkSrcDir + 'vue.ts'],
      outdir: undefined,
      outfile: sdkOutDir + 'vue.js',
      external: ['vue'],
      alias: {
        '@vue/runtime-core': 'vue',
      },
    }),
  ]);
};

const esmBuild = () =>
  esbuild.build({
    ...baseOptions,
    entryPoints: [
      'app.ts',
      'embed.ts',
      'lite.ts',
      'templates/starter/index.ts',
      'editor/monaco/monaco.ts',
      'editor/codemirror/codemirror.ts',
      'editor/codejar/codejar.ts',
      'editor/blockly/blockly.ts',
      'editor/quill/quill.ts',
      'services/firebase.ts',
      'languages/language-info.ts',
      'export/export.ts',
      'sync/sync.ts',
      'UI/open.ts',
      'UI/assets.ts',
      'UI/snippets.ts',
      'UI/backup.ts',
      'UI/broadcast.ts',
      'UI/import.ts',
      'UI/share.ts',
      'UI/deploy.ts',
      'UI/sync-ui.ts',
      'UI/embed-ui.ts',
      'UI/editor-settings.ts',
      'languages/diagrams/lang-diagrams-compiler-esm.ts',
      'languages/rescript/lang-rescript-compiler-esm.ts',
    ]
      .map((x) => 'src/livecodes/' + x)
      .reduce(arrToObj, {}),
  });

const iifeBuild = () =>
  esbuild.build({
    ...baseOptions,
    format: 'iife',
    entryPoints: [
      'compiler/compile.page.ts',
      'compiler/compiler-utils.ts',
      'editor/custom-editor-utils.ts',
      'result/result-utils.ts',
      'languages/art-template/lang-art-template-compiler.ts',
      'languages/assemblyscript/lang-assemblyscript-script.ts',
      'languages/assemblyscript/lang-assemblyscript-compiler.ts',
      'languages/astro/lang-astro-compiler.ts',
      'languages/clio/lang-clio-compiler.ts',
      'languages/commonlisp/lang-commonlisp-script.ts',
      'languages/cpp/lang-cpp-script.ts',
      'languages/cpp-clang/lang-cpp-clang-script.ts',
      'languages/dot/lang-dot-compiler.ts',
      'languages/ejs/lang-ejs-compiler.ts',
      'languages/haml/lang-haml-compiler.ts',
      'languages/handlebars/lang-handlebars-compiler.ts',
      'languages/imba/lang-imba-compiler.ts',
      'languages/julia/lang-julia-script.ts',
      'languages/liquid/lang-liquid-compiler.ts',
      'languages/malina/lang-malina-compiler.ts',
      'languages/rescript/lang-rescript-formatter.ts',
      'languages/mustache/lang-mustache-compiler.ts',
      'languages/nunjucks/lang-nunjucks-compiler.ts',
      'languages/perl/lang-perl-script.ts',
      'languages/prolog/lang-prolog-script.ts',
      'languages/pug/lang-pug-compiler.ts',
      'languages/python-pyodide/lang-python-pyodide-script.ts',
      'languages/riot/lang-riot-compiler.ts',
      'languages/scss/lang-scss-compiler.ts',
      'languages/solid/lang-solid-compiler.ts',
      'languages/sql/lang-sql-compiler.ts',
      'languages/sql/lang-sql-script.ts',
      'languages/svelte/lang-svelte-compiler.ts',
      'languages/tcl/lang-tcl-script.ts',
      'languages/twig/lang-twig-compiler.ts',
      'languages/vue/lang-vue-compiler.ts',
      'languages/wat/lang-wat-compiler.ts',
      'languages/wat/lang-wat-script.ts',
      'languages/windicss/processor-windicss-compiler.ts',
      'languages/unocss/processor-unocss-compiler.ts',
      'languages/lightningcss/processor-lightningcss-compiler.ts',
      'languages/postcss/processor-postcss-compiler.ts',
    ]
      .map((x) => 'src/livecodes/' + x)
      .reduce(arrToObj, {}),
  });

/** @type {Partial<esbuild.BuildOptions>} */
const workerOptions = {
  ...baseOptions,
  entryPoints: [
    'src/livecodes/compiler/compile.worker.ts',
    'src/livecodes/formatter/format.worker.ts',
  ],
  write: false,
};

const workersBuild = () =>
  esbuild.build(workerOptions).then((worker) => {
    for (let out of worker.outputFiles || []) {
      const content = uint8arrayToString(out.contents);
      const filename = path.basename(out.path);
      fs.writeFile(
        path.resolve('build/livecodes', filename),
        filename.endsWith('.map') ? content : iife(content),
        () => {},
      );
    }
  });

const stylesBuild = () => buildStyles(devMode);

const htmlBuild = () =>
  vite.build({
    root: path.resolve('src'),
    define: {
      'process.env.codemirrorVersion': `"${codemirrorVersion}"`,
    },
    build: {
      minify: devMode ? false : true,
      outDir,
      sourcemap: true,
    },
  });

prepareDir().then(() => {
  Promise.all([
    esmBuild(),
    iifeBuild(),
    workersBuild(),
    stylesBuild(),
    htmlBuild(),
    sdkBuild(),
  ]).then(async () => {
    if (!devMode) {
      buildVendors();
    }
    await applyHash(devMode);
    await injectCss();
    console.log('built to: ' + baseOptions.outdir + '/');
  });
});

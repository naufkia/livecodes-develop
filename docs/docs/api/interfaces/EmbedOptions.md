---
id: "EmbedOptions"
title: "Interface: EmbedOptions"
sidebar_label: "EmbedOptions"
sidebar_position: 0
custom_edit_url: null
---

## Properties

### appUrl

• `Optional` **appUrl**: `string`

#### Defined in

models.ts:26

___

### config

• `Optional` **config**: `string` \| `Partial`<[`Config`](Config.md)\>

#### Defined in

models.ts:28

___

### import

• `Optional` **import**: `string`

#### Defined in

models.ts:29

___

### lite

• `Optional` **lite**: `boolean`

#### Defined in

models.ts:30

___

### loading

• `Optional` **loading**: ``"click"`` \| ``"eager"`` \| ``"lazy"``

#### Defined in

models.ts:31

___

### params

• `Optional` **params**: `Partial`<[`EmbedOptions`](EmbedOptions.md) & `Omit`<[`Config`](Config.md), ``"activeEditor"`` \| ``"languages"`` \| ``"tags"`` \| ``"processors"`` \| ``"stylesheets"`` \| ``"scripts"`` \| ``"tools"``\> & [`Screen`](internal.Screen.md) & { `Binary`: `string` ; `C`: `string` ; `adoc`: `string` ; `art`: `string` ; `art-template`: `string` ; `as`: `string` ; `asc`: `string` ; `asciidoc`: `string` ; `assemblyscript`: `string` ; `astro`: `string` ; `babel`: `string` ; `blockly`: `string` ; `blockly.xml`: `string` ; `c`: `string` ; `c++`: `string` ; `clang`: `string` ; `clang.cpp`: `string` ; `clio`: `string` ; `coffee`: `string` ; `coffeescript`: `string` ; `common-lisp`: `string` ; `commonlisp`: `string` ; `cp`: `string` ; `cpp`: `string` ; `cppm`: `string` ; `csharp`: `string` ; `css`: `string` ; `cxx`: `string` ; `diagram`: `string` ; `diagrams`: `string` ; `dot`: `string` ; `ejs`: `string` ; `es`: `string` ; `go`: `string` ; `golang`: `string` ; `graph`: `string` ; `h`: `string` ; `haml`: `string` ; `handlebars`: `string` ; `hbs`: `string` ; `hpp`: `string` ; `htm`: `string` ; `html`: `string` ; `ii`: `string` ; `imba`: `string` ; `ixx`: `string` ; `jade`: `string` ; `javascript`: `string` ; `jl`: `string` ; `js`: `string` ; `json`: `string` ; `jsx`: `string` ; `julia`: `string` ; `less`: `string` ; `liquid`: `string` ; `liquidjs`: `string` ; `lisp`: `string` ; `livescript`: `string` ; `ls`: `string` ; `lua`: `string` ; `malina`: `string` ; `malinajs`: `string` ; `markdown`: `string` ; `md`: `string` ; `mdown`: `string` ; `mdx`: `string` ; `mkdn`: `string` ; `ml`: `string` ; `mli`: `string` ; `mustache`: `string` ; `njk`: `string` ; `nunjucks`: `string` ; `ocaml`: `string` ; `perl`: `string` ; `php`: `string` ; `pintora`: `string` ; `pl`: `string` ; `plt`: `string` ; `pm`: `string` ; `postcss`: `string` ; `prolog`: `string` ; `prolog.pl`: `string` ; `pug`: `string` ; `py`: `string` ; `py3`: `string` ; `pyodide`: `string` ; `python`: `string` ; `rb`: `string` ; `re`: `string` ; `react-native`: `string` ; `react-native-tsx`: `string` ; `react-native.jsx`: `string` ; `react-native.tsx`: `string` ; `reason`: `string` ; `rei`: `string` ; `res`: `string` ; `rescript`: `string` ; `resi`: `string` ; `rich`: `string` ; `richtext`: `string` ; `riot`: `string` ; `riotjs`: `string` ; `rte`: `string` ; `rte.html`: `string` ; `ruby`: `string` ; `sass`: `string` ; `scheme`: `string` ; `scm`: `string` ; `scss`: `string` ; `solid`: `string` ; `solid.jsx`: `string` ; `solid.tsx`: `string` ; `sql`: `string` ; `sqlite`: `string` ; `sqlite3`: `string` ; `stencil`: `string` ; `stencil.tsx`: `string` ; `styl`: `string` ; `stylus`: `string` ; `svelte`: `string` ; `tcl`: `string` ; `ts`: `string` ; `tsx`: `string` ; `twig`: `string` ; `typescript`: `string` ; `vue`: `string` ; `vue2`: `string` ; `vue3`: `string` ; `wasm`: `string` ; `wast`: `string` ; `wat`: `string` ; `webassembly`: `string` ; `xht`: `string` ; `xml`: `string`  } & { `Binary-selector`: `string` ; `C-selector`: `string` ; `adoc-selector`: `string` ; `art-selector`: `string` ; `art-template-selector`: `string` ; `as-selector`: `string` ; `asc-selector`: `string` ; `asciidoc-selector`: `string` ; `assemblyscript-selector`: `string` ; `astro-selector`: `string` ; `babel-selector`: `string` ; `blockly-selector`: `string` ; `blockly.xml-selector`: `string` ; `c++-selector`: `string` ; `c-selector`: `string` ; `clang-selector`: `string` ; `clang.cpp-selector`: `string` ; `clio-selector`: `string` ; `coffee-selector`: `string` ; `coffeescript-selector`: `string` ; `common-lisp-selector`: `string` ; `commonlisp-selector`: `string` ; `cp-selector`: `string` ; `cpp-selector`: `string` ; `cppm-selector`: `string` ; `csharp-selector`: `string` ; `css-selector`: `string` ; `cxx-selector`: `string` ; `diagram-selector`: `string` ; `diagrams-selector`: `string` ; `dot-selector`: `string` ; `ejs-selector`: `string` ; `es-selector`: `string` ; `go-selector`: `string` ; `golang-selector`: `string` ; `graph-selector`: `string` ; `h-selector`: `string` ; `haml-selector`: `string` ; `handlebars-selector`: `string` ; `hbs-selector`: `string` ; `hpp-selector`: `string` ; `htm-selector`: `string` ; `html-selector`: `string` ; `ii-selector`: `string` ; `imba-selector`: `string` ; `ixx-selector`: `string` ; `jade-selector`: `string` ; `javascript-selector`: `string` ; `jl-selector`: `string` ; `js-selector`: `string` ; `json-selector`: `string` ; `jsx-selector`: `string` ; `julia-selector`: `string` ; `less-selector`: `string` ; `liquid-selector`: `string` ; `liquidjs-selector`: `string` ; `lisp-selector`: `string` ; `livescript-selector`: `string` ; `ls-selector`: `string` ; `lua-selector`: `string` ; `malina-selector`: `string` ; `malinajs-selector`: `string` ; `markdown-selector`: `string` ; `md-selector`: `string` ; `mdown-selector`: `string` ; `mdx-selector`: `string` ; `mkdn-selector`: `string` ; `ml-selector`: `string` ; `mli-selector`: `string` ; `mustache-selector`: `string` ; `njk-selector`: `string` ; `nunjucks-selector`: `string` ; `ocaml-selector`: `string` ; `perl-selector`: `string` ; `php-selector`: `string` ; `pintora-selector`: `string` ; `pl-selector`: `string` ; `plt-selector`: `string` ; `pm-selector`: `string` ; `postcss-selector`: `string` ; `prolog-selector`: `string` ; `prolog.pl-selector`: `string` ; `pug-selector`: `string` ; `py-selector`: `string` ; `py3-selector`: `string` ; `pyodide-selector`: `string` ; `python-selector`: `string` ; `rb-selector`: `string` ; `re-selector`: `string` ; `react-native-selector`: `string` ; `react-native-tsx-selector`: `string` ; `react-native.jsx-selector`: `string` ; `react-native.tsx-selector`: `string` ; `reason-selector`: `string` ; `rei-selector`: `string` ; `res-selector`: `string` ; `rescript-selector`: `string` ; `resi-selector`: `string` ; `rich-selector`: `string` ; `richtext-selector`: `string` ; `riot-selector`: `string` ; `riotjs-selector`: `string` ; `rte-selector`: `string` ; `rte.html-selector`: `string` ; `ruby-selector`: `string` ; `sass-selector`: `string` ; `scheme-selector`: `string` ; `scm-selector`: `string` ; `scss-selector`: `string` ; `solid-selector`: `string` ; `solid.jsx-selector`: `string` ; `solid.tsx-selector`: `string` ; `sql-selector`: `string` ; `sqlite-selector`: `string` ; `sqlite3-selector`: `string` ; `stencil-selector`: `string` ; `stencil.tsx-selector`: `string` ; `styl-selector`: `string` ; `stylus-selector`: `string` ; `svelte-selector`: `string` ; `tcl-selector`: `string` ; `ts-selector`: `string` ; `tsx-selector`: `string` ; `twig-selector`: `string` ; `typescript-selector`: `string` ; `vue-selector`: `string` ; `vue2-selector`: `string` ; `vue3-selector`: `string` ; `wasm-selector`: `string` ; `wast-selector`: `string` ; `wat-selector`: `string` ; `webassembly-selector`: `string` ; `xht-selector`: `string` ; `xml-selector`: `string`  } & { `active`: ``0`` \| ``2`` \| ``1`` \| [`EditorId`](../modules/internal.md#editorid) ; `activeEditor`: ``0`` \| ``2`` \| ``1`` \| [`EditorId`](../modules/internal.md#editorid) ; `config`: `string` ; `embed`: `boolean` ; `lang`: [`Language`](../modules/internal.md#language) ; `language`: [`Language`](../modules/internal.md#language) ; `languages`: `string` ; `no-defaults`: `boolean` ; `preview`: `boolean` ; `processors`: `string` ; `raw`: [`Language`](../modules/internal.md#language) ; `scripts`: `string` ; `stylesheets`: `string` ; `tags`: `string` \| `string`[] ; `tools`: ``"none"`` \| ``"closed"`` \| ``"open"`` \| ``"full"`` \| ``"console"`` \| ``"compiled"`` \| ``"tests"`` \| ``"console|"`` \| ``"console|none"`` \| ``"console|closed"`` \| ``"console|open"`` \| ``"console|full"`` \| ``"compiled|"`` \| ``"compiled|none"`` \| ``"compiled|closed"`` \| ``"compiled|open"`` \| ``"compiled|full"`` \| ``"tests|"`` \| ``"tests|none"`` \| ``"tests|closed"`` \| ``"tests|open"`` \| ``"tests|full"`` \| ``"console,console|"`` \| ``"console,console|none"`` \| ``"console,console|closed"`` \| ``"console,console|open"`` \| ``"console,console|full"`` \| ``"console,compiled|"`` \| ``"console,compiled|none"`` \| ``"console,compiled|closed"`` \| ``"console,compiled|open"`` \| ``"console,compiled|full"`` \| ``"console,tests|"`` \| ``"console,tests|none"`` \| ``"console,tests|closed"`` \| ``"console,tests|open"`` \| ``"console,tests|full"`` \| ``"compiled,console|"`` \| ``"compiled,console|none"`` \| ``"compiled,console|closed"`` \| ``"compiled,console|open"`` \| ``"compiled,console|full"`` \| ``"compiled,compiled|"`` \| ``"compiled,compiled|none"`` \| ``"compiled,compiled|closed"`` \| ``"compiled,compiled|open"`` \| ``"compiled,compiled|full"`` \| ``"compiled,tests|"`` \| ``"compiled,tests|none"`` \| ``"compiled,tests|closed"`` \| ``"compiled,tests|open"`` \| ``"compiled,tests|full"`` \| ``"tests,console|"`` \| ``"tests,console|none"`` \| ``"tests,console|closed"`` \| ``"tests,console|open"`` \| ``"tests,console|full"`` \| ``"tests,compiled|"`` \| ``"tests,compiled|none"`` \| ``"tests,compiled|closed"`` \| ``"tests,compiled|open"`` \| ``"tests,compiled|full"`` \| ``"tests,tests|"`` \| ``"tests,tests|none"`` \| ``"tests,tests|closed"`` \| ``"tests,tests|open"`` \| ``"tests,tests|full"`` \| ``"console,console,console|"`` \| ``"console,console,console|none"`` \| ``"console,console,console|closed"`` \| ``"console,console,console|open"`` \| ``"console,console,console|full"`` \| ``"console,console,compiled|"`` \| ``"console,console,compiled|none"`` \| ``"console,console,compiled|closed"`` \| ``"console,console,compiled|open"`` \| ``"console,console,compiled|full"`` \| ``"console,console,tests|"`` \| ``"console,console,tests|none"`` \| ``"console,console,tests|closed"`` \| ``"console,console,tests|open"`` \| ``"console,console,tests|full"`` \| ``"console,compiled,console|"`` \| ``"console,compiled,console|none"`` \| ``"console,compiled,console|closed"`` \| ``"console,compiled,console|open"`` \| ``"console,compiled,console|full"`` \| ``"console,compiled,compiled|"`` \| ``"console,compiled,compiled|none"`` \| ``"console,compiled,compiled|closed"`` \| ``"console,compiled,compiled|open"`` \| ``"console,compiled,compiled|full"`` \| ``"console,compiled,tests|"`` \| ``"console,compiled,tests|none"`` \| ``"console,compiled,tests|closed"`` \| ``"console,compiled,tests|open"`` \| ``"console,compiled,tests|full"`` \| ``"console,tests,console|"`` \| ``"console,tests,console|none"`` \| ``"console,tests,console|closed"`` \| ``"console,tests,console|open"`` \| ``"console,tests,console|full"`` \| ``"console,tests,compiled|"`` \| ``"console,tests,compiled|none"`` \| ``"console,tests,compiled|closed"`` \| ``"console,tests,compiled|open"`` \| ``"console,tests,compiled|full"`` \| ``"console,tests,tests|"`` \| ``"console,tests,tests|none"`` \| ``"console,tests,tests|closed"`` \| ``"console,tests,tests|open"`` \| ``"console,tests,tests|full"`` \| ``"compiled,console,console|"`` \| ``"compiled,console,console|none"`` \| ``"compiled,console,console|closed"`` \| ``"compiled,console,console|open"`` \| ``"compiled,console,console|full"`` \| ``"compiled,console,compiled|"`` \| ``"compiled,console,compiled|none"`` \| ``"compiled,console,compiled|closed"`` \| ``"compiled,console,compiled|open"`` \| ``"compiled,console,compiled|full"`` \| ``"compiled,console,tests|"`` \| ``"compiled,console,tests|none"`` \| ``"compiled,console,tests|closed"`` \| ``"compiled,console,tests|open"`` \| ``"compiled,console,tests|full"`` \| ``"compiled,compiled,console|"`` \| ``"compiled,compiled,console|none"`` \| ``"compiled,compiled,console|closed"`` \| ``"compiled,compiled,console|open"`` \| ``"compiled,compiled,console|full"`` \| ``"compiled,compiled,compiled|"`` \| ``"compiled,compiled,compiled|none"`` \| ``"compiled,compiled,compiled|closed"`` \| ``"compiled,compiled,compiled|open"`` \| ``"compiled,compiled,compiled|full"`` \| ``"compiled,compiled,tests|"`` \| ``"compiled,compiled,tests|none"`` \| ``"compiled,compiled,tests|closed"`` \| ``"compiled,compiled,tests|open"`` \| ``"compiled,compiled,tests|full"`` \| ``"compiled,tests,console|"`` \| ``"compiled,tests,console|none"`` \| ``"compiled,tests,console|closed"`` \| ``"compiled,tests,console|open"`` \| ``"compiled,tests,console|full"`` \| ``"compiled,tests,compiled|"`` \| ``"compiled,tests,compiled|none"`` \| ``"compiled,tests,compiled|closed"`` \| ``"compiled,tests,compiled|open"`` \| ``"compiled,tests,compiled|full"`` \| ``"compiled,tests,tests|"`` \| ``"compiled,tests,tests|none"`` \| ``"compiled,tests,tests|closed"`` \| ``"compiled,tests,tests|open"`` \| ``"compiled,tests,tests|full"`` \| ``"tests,console,console|"`` \| ``"tests,console,console|none"`` \| ``"tests,console,console|closed"`` \| ``"tests,console,console|open"`` \| ``"tests,console,console|full"`` \| ``"tests,console,compiled|"`` \| ``"tests,console,compiled|none"`` \| ``"tests,console,compiled|closed"`` \| ``"tests,console,compiled|open"`` \| ``"tests,console,compiled|full"`` \| ``"tests,console,tests|"`` \| ``"tests,console,tests|none"`` \| ``"tests,console,tests|closed"`` \| ``"tests,console,tests|open"`` \| ``"tests,console,tests|full"`` \| ``"tests,compiled,console|"`` \| ``"tests,compiled,console|none"`` \| ``"tests,compiled,console|closed"`` \| ``"tests,compiled,console|open"`` \| ``"tests,compiled,console|full"`` \| ``"tests,compiled,compiled|"`` \| ``"tests,compiled,compiled|none"`` \| ``"tests,compiled,compiled|closed"`` \| ``"tests,compiled,compiled|open"`` \| ``"tests,compiled,compiled|full"`` \| ``"tests,compiled,tests|"`` \| ``"tests,compiled,tests|none"`` \| ``"tests,compiled,tests|closed"`` \| ``"tests,compiled,tests|open"`` \| ``"tests,compiled,tests|full"`` \| ``"tests,tests,console|"`` \| ``"tests,tests,console|none"`` \| ``"tests,tests,console|closed"`` \| ``"tests,tests,console|open"`` \| ``"tests,tests,console|full"`` \| ``"tests,tests,compiled|"`` \| ``"tests,tests,compiled|none"`` \| ``"tests,tests,compiled|closed"`` \| ``"tests,tests,compiled|open"`` \| ``"tests,tests,compiled|full"`` \| ``"tests,tests,tests|"`` \| ``"tests,tests,tests|none"`` \| ``"tests,tests,tests|closed"`` \| ``"tests,tests,tests|open"`` \| ``"tests,tests,tests|full"`` ; `x`: `string`  } & { `compiled`: ``""`` \| ``"none"`` \| ``"closed"`` \| ``"open"`` \| ``"full"`` \| ``"true"`` ; `console`: ``""`` \| ``"none"`` \| ``"closed"`` \| ``"open"`` \| ``"full"`` \| ``"true"`` ; `tests`: ``""`` \| ``"none"`` \| ``"closed"`` \| ``"open"`` \| ``"full"`` \| ``"true"``  }\>

#### Defined in

models.ts:27

___

### template

• `Optional` **template**: [`TemplateName`](../modules/internal.md#templatename)

#### Defined in

models.ts:32

___

### view

• `Optional` **view**: ``"split"`` \| ``"result"`` \| ``"editor"``

#### Defined in

models.ts:33

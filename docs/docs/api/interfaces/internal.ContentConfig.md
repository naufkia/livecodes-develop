---
id: "internal.ContentConfig"
title: "Interface: ContentConfig"
sidebar_label: "ContentConfig"
custom_edit_url: null
---

[_internal](../modules/internal.md).ContentConfig

## Hierarchy

- **`ContentConfig`**

  ↳ [`Config`](Config.md)

## Properties

### activeEditor

• **activeEditor**: `undefined` \| [`EditorId`](../modules/internal.md#editorid)

#### Defined in

models.ts:42

___

### cssPreset

• **cssPreset**: [`CssPresetId`](../modules/internal.md#csspresetid)

#### Defined in

models.ts:49

___

### customSettings

• **customSettings**: `Partial`<{ `Binary`: `any` ; `C`: `any` ; `adoc`: `any` ; `art`: `any` ; `art-template`: `any` ; `as`: `any` ; `asc`: `any` ; `asciidoc`: `any` ; `assemblyscript`: `any` ; `astro`: `any` ; `autoprefixer`: `any` ; `babel`: `any` ; `blockly`: `any` ; `blockly.xml`: `any` ; `c`: `any` ; `c++`: `any` ; `clang`: `any` ; `clang.cpp`: `any` ; `clio`: `any` ; `coffee`: `any` ; `coffeescript`: `any` ; `common-lisp`: `any` ; `commonlisp`: `any` ; `cp`: `any` ; `cpp`: `any` ; `cppm`: `any` ; `csharp`: `any` ; `css`: `any` ; `cssnano`: `any` ; `cxx`: `any` ; `diagram`: `any` ; `diagrams`: `any` ; `dot`: `any` ; `ejs`: `any` ; `es`: `any` ; `go`: `any` ; `golang`: `any` ; `graph`: `any` ; `h`: `any` ; `haml`: `any` ; `handlebars`: `any` ; `hbs`: `any` ; `hpp`: `any` ; `htm`: `any` ; `html`: `any` ; `ii`: `any` ; `imba`: `any` ; `ixx`: `any` ; `jade`: `any` ; `javascript`: `any` ; `jl`: `any` ; `js`: `any` ; `json`: `any` ; `jsx`: `any` ; `julia`: `any` ; `less`: `any` ; `lightningcss`: `any` ; `liquid`: `any` ; `liquidjs`: `any` ; `lisp`: `any` ; `livescript`: `any` ; `ls`: `any` ; `lua`: `any` ; `malina`: `any` ; `malinajs`: `any` ; `markdown`: `any` ; `md`: `any` ; `mdown`: `any` ; `mdx`: `any` ; `mkdn`: `any` ; `ml`: `any` ; `mli`: `any` ; `mustache`: `any` ; `njk`: `any` ; `nunjucks`: `any` ; `ocaml`: `any` ; `perl`: `any` ; `php`: `any` ; `pintora`: `any` ; `pl`: `any` ; `plt`: `any` ; `pm`: `any` ; `postcss`: `any` ; `postcssImportUrl`: `any` ; `postcssPresetEnv`: `any` ; `prolog`: `any` ; `prolog.pl`: `any` ; `pug`: `any` ; `purgecss`: `any` ; `py`: `any` ; `py3`: `any` ; `pyodide`: `any` ; `python`: `any` ; `rb`: `any` ; `re`: `any` ; `react-native`: `any` ; `react-native-tsx`: `any` ; `react-native.jsx`: `any` ; `react-native.tsx`: `any` ; `reason`: `any` ; `rei`: `any` ; `res`: `any` ; `rescript`: `any` ; `resi`: `any` ; `rich`: `any` ; `richtext`: `any` ; `riot`: `any` ; `riotjs`: `any` ; `rte`: `any` ; `rte.html`: `any` ; `ruby`: `any` ; `sass`: `any` ; `scheme`: `any` ; `scm`: `any` ; `scss`: `any` ; `solid`: `any` ; `solid.jsx`: `any` ; `solid.tsx`: `any` ; `sql`: `any` ; `sqlite`: `any` ; `sqlite3`: `any` ; `stencil`: `any` ; `stencil.tsx`: `any` ; `styl`: `any` ; `stylus`: `any` ; `svelte`: `any` ; `tailwindcss`: `any` ; `tcl`: `any` ; `tokencss`: `any` ; `ts`: `any` ; `tsx`: `any` ; `twig`: `any` ; `typescript`: `any` ; `unocss`: `any` ; `vue`: `any` ; `vue2`: `any` ; `vue3`: `any` ; `wasm`: `any` ; `wast`: `any` ; `wat`: `any` ; `webassembly`: `any` ; `windicss`: `any` ; `xht`: `any` ; `xml`: `any`  } & { `convertCommonjs`: `boolean` ; `defaultCDN`: [`CDN`](../modules/internal.md#cdn) ; `head`: `string` ; `htmlClasses`: `string` ; `imports`: `Record`<`string`, `string`\> ; `mapImports`: `boolean` ; `scriptType`: `undefined` \| ``""`` \| ``"module"`` \| ``"text/liquid"`` \| ``"text/python"`` \| ``"text/x-uniter-php"`` \| ``"text/cpp"`` \| ``"text/perl"`` \| ``"text/julia"`` \| ``"text/biwascheme"`` \| ``"text/commonlisp"`` \| ``"text/tcl"`` \| ``"text/prolog"`` \| ``"application/json"`` \| ``"application/lua"`` \| ``"application/wasm-uint8"`` \| ``"application/javascript"`` \| ``"application/ecmascript"`` \| ``"text/javascript"`` \| ``"text/ecmascript"`` ; `template`: { `data?`: `any` ; `prerender?`: `boolean`  } ; `types`: [`Types`](internal.Types.md)  }\>

#### Defined in

models.ts:51

___

### description

• **description**: `string`

#### Defined in

models.ts:40

___

### imports

• **imports**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

models.ts:52

___

### languages

• **languages**: `undefined` \| (``"reason"`` \| ``"stylus"`` \| ``"html"`` \| ``"ruby"`` \| ``"rb"`` \| ``"json"`` \| ``"htm"`` \| ``"markdown"`` \| ``"md"`` \| ``"mdown"`` \| ``"mkdn"`` \| ``"mdx"`` \| ``"astro"`` \| ``"pug"`` \| ``"jade"`` \| ``"haml"`` \| ``"asciidoc"`` \| ``"adoc"`` \| ``"asc"`` \| ``"mustache"`` \| ``"handlebars"`` \| ``"hbs"`` \| ``"ejs"`` \| ``"nunjucks"`` \| ``"njk"`` \| ``"liquid"`` \| ``"liquidjs"`` \| ``"dot"`` \| ``"twig"`` \| ``"art-template"`` \| ``"art"`` \| ``"diagrams"`` \| ``"diagram"`` \| ``"graph"`` \| ``"plt"`` \| ``"richtext"`` \| ``"rte"`` \| ``"rich"`` \| ``"rte.html"`` \| ``"css"`` \| ``"scss"`` \| ``"sass"`` \| ``"less"`` \| ``"styl"`` \| ``"postcss"`` \| ``"javascript"`` \| ``"js"`` \| ``"babel"`` \| ``"es"`` \| ``"typescript"`` \| ``"ts"`` \| ``"jsx"`` \| ``"tsx"`` \| ``"react-native"`` \| ``"react-native.jsx"`` \| ``"react-native-tsx"`` \| ``"react-native.tsx"`` \| ``"vue"`` \| ``"vue3"`` \| ``"vue2"`` \| ``"svelte"`` \| ``"stencil"`` \| ``"stencil.tsx"`` \| ``"solid"`` \| ``"solid.jsx"`` \| ``"solid.tsx"`` \| ``"riot"`` \| ``"riotjs"`` \| ``"malina"`` \| ``"malinajs"`` \| ``"xht"`` \| ``"coffeescript"`` \| ``"coffee"`` \| ``"livescript"`` \| ``"ls"`` \| ``"clio"`` \| ``"imba"`` \| ``"assemblyscript"`` \| ``"as"`` \| ``"python"`` \| ``"py"`` \| ``"pyodide"`` \| ``"py3"`` \| ``"go"`` \| ``"golang"`` \| ``"php"`` \| ``"cpp"`` \| ``"c"`` \| ``"C"`` \| ``"cp"`` \| ``"cxx"`` \| ``"c++"`` \| ``"cppm"`` \| ``"ixx"`` \| ``"ii"`` \| ``"hpp"`` \| ``"h"`` \| ``"clang"`` \| ``"clang.cpp"`` \| ``"perl"`` \| ``"pl"`` \| ``"pm"`` \| ``"lua"`` \| ``"julia"`` \| ``"jl"`` \| ``"scheme"`` \| ``"scm"`` \| ``"commonlisp"`` \| ``"common-lisp"`` \| ``"lisp"`` \| ``"rescript"`` \| ``"res"`` \| ``"resi"`` \| ``"re"`` \| ``"rei"`` \| ``"ocaml"`` \| ``"ml"`` \| ``"mli"`` \| ``"tcl"`` \| ``"wat"`` \| ``"wast"`` \| ``"webassembly"`` \| ``"wasm"`` \| ``"Binary"`` \| ``"csharp"`` \| ``"sql"`` \| ``"sqlite"`` \| ``"sqlite3"`` \| ``"prolog.pl"`` \| ``"prolog"`` \| ``"blockly"`` \| ``"blockly.xml"`` \| ``"xml"`` \| ``"pintora"`` \| ``"tailwindcss"`` \| ``"postcssImportUrl"`` \| ``"windicss"`` \| ``"unocss"`` \| ``"tokencss"`` \| ``"lightningcss"`` \| ``"autoprefixer"`` \| ``"postcssPresetEnv"`` \| ``"purgecss"`` \| ``"cssnano"``)[]

#### Defined in

models.ts:43

___

### markup

• **markup**: [`Editor`](internal.Editor.md)

#### Defined in

models.ts:44

___

### processors

• **processors**: [`Processor`](../modules/internal.md#processor)[]

#### Defined in

models.ts:50

___

### script

• **script**: [`Editor`](internal.Editor.md)

#### Defined in

models.ts:46

___

### scripts

• **scripts**: `string`[]

#### Defined in

models.ts:48

___

### style

• **style**: [`Editor`](internal.Editor.md)

#### Defined in

models.ts:45

___

### stylesheets

• **stylesheets**: `string`[]

#### Defined in

models.ts:47

___

### tags

• **tags**: `string`[]

#### Defined in

models.ts:41

___

### tests

• **tests**: `undefined` \| `Partial`<[`Editor`](internal.Editor.md)\>

#### Defined in

models.ts:54

___

### title

• **title**: `string`

#### Defined in

models.ts:39

___

### types

• **types**: [`Types`](internal.Types.md)

#### Defined in

models.ts:53

___

### version

• `Readonly` **version**: `string`

#### Defined in

models.ts:55

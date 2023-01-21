---
id: "Config"
title: "Interface: Config"
sidebar_label: "Config"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`ContentConfig`](internal.ContentConfig.md)

- [`AppConfig`](internal.AppConfig.md)

- [`UserConfig`](internal.UserConfig.md)

  ↳ **`Config`**

## Properties

### activeEditor

• **activeEditor**: `undefined` \| [`EditorId`](../modules/internal.md#editorid)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[activeEditor](internal.ContentConfig.md#activeeditor)

#### Defined in

models.ts:42

___

### allowLangChange

• **allowLangChange**: `boolean`

#### Inherited from

[AppConfig](internal.AppConfig.md).[allowLangChange](internal.AppConfig.md#allowlangchange)

#### Defined in

models.ts:60

___

### autosave

• **autosave**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[autosave](internal.UserConfig.md#autosave)

#### Defined in

models.ts:72

___

### autoupdate

• **autoupdate**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[autoupdate](internal.UserConfig.md#autoupdate)

#### Defined in

models.ts:71

___

### closeBrackets

• **closeBrackets**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[closeBrackets](internal.UserConfig.md#closebrackets)

#### Defined in

models.ts:88

___

### cssPreset

• **cssPreset**: [`CssPresetId`](../modules/internal.md#csspresetid)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[cssPreset](internal.ContentConfig.md#csspreset)

#### Defined in

models.ts:49

___

### customSettings

• **customSettings**: `Partial`<{ `Binary`: `any` ; `C`: `any` ; `adoc`: `any` ; `art`: `any` ; `art-template`: `any` ; `as`: `any` ; `asc`: `any` ; `asciidoc`: `any` ; `assemblyscript`: `any` ; `astro`: `any` ; `autoprefixer`: `any` ; `babel`: `any` ; `blockly`: `any` ; `blockly.xml`: `any` ; `c`: `any` ; `c++`: `any` ; `clang`: `any` ; `clang.cpp`: `any` ; `clio`: `any` ; `coffee`: `any` ; `coffeescript`: `any` ; `common-lisp`: `any` ; `commonlisp`: `any` ; `cp`: `any` ; `cpp`: `any` ; `cppm`: `any` ; `csharp`: `any` ; `css`: `any` ; `cssnano`: `any` ; `cxx`: `any` ; `diagram`: `any` ; `diagrams`: `any` ; `dot`: `any` ; `ejs`: `any` ; `es`: `any` ; `go`: `any` ; `golang`: `any` ; `graph`: `any` ; `h`: `any` ; `haml`: `any` ; `handlebars`: `any` ; `hbs`: `any` ; `hpp`: `any` ; `htm`: `any` ; `html`: `any` ; `ii`: `any` ; `imba`: `any` ; `ixx`: `any` ; `jade`: `any` ; `javascript`: `any` ; `jl`: `any` ; `js`: `any` ; `json`: `any` ; `jsx`: `any` ; `julia`: `any` ; `less`: `any` ; `lightningcss`: `any` ; `liquid`: `any` ; `liquidjs`: `any` ; `lisp`: `any` ; `livescript`: `any` ; `ls`: `any` ; `lua`: `any` ; `malina`: `any` ; `malinajs`: `any` ; `markdown`: `any` ; `md`: `any` ; `mdown`: `any` ; `mdx`: `any` ; `mkdn`: `any` ; `ml`: `any` ; `mli`: `any` ; `mustache`: `any` ; `njk`: `any` ; `nunjucks`: `any` ; `ocaml`: `any` ; `perl`: `any` ; `php`: `any` ; `pintora`: `any` ; `pl`: `any` ; `plt`: `any` ; `pm`: `any` ; `postcss`: `any` ; `postcssImportUrl`: `any` ; `postcssPresetEnv`: `any` ; `prolog`: `any` ; `prolog.pl`: `any` ; `pug`: `any` ; `purgecss`: `any` ; `py`: `any` ; `py3`: `any` ; `pyodide`: `any` ; `python`: `any` ; `rb`: `any` ; `re`: `any` ; `react-native`: `any` ; `react-native-tsx`: `any` ; `react-native.jsx`: `any` ; `react-native.tsx`: `any` ; `reason`: `any` ; `rei`: `any` ; `res`: `any` ; `rescript`: `any` ; `resi`: `any` ; `rich`: `any` ; `richtext`: `any` ; `riot`: `any` ; `riotjs`: `any` ; `rte`: `any` ; `rte.html`: `any` ; `ruby`: `any` ; `sass`: `any` ; `scheme`: `any` ; `scm`: `any` ; `scss`: `any` ; `solid`: `any` ; `solid.jsx`: `any` ; `solid.tsx`: `any` ; `sql`: `any` ; `sqlite`: `any` ; `sqlite3`: `any` ; `stencil`: `any` ; `stencil.tsx`: `any` ; `styl`: `any` ; `stylus`: `any` ; `svelte`: `any` ; `tailwindcss`: `any` ; `tcl`: `any` ; `tokencss`: `any` ; `ts`: `any` ; `tsx`: `any` ; `twig`: `any` ; `typescript`: `any` ; `unocss`: `any` ; `vue`: `any` ; `vue2`: `any` ; `vue3`: `any` ; `wasm`: `any` ; `wast`: `any` ; `wat`: `any` ; `webassembly`: `any` ; `windicss`: `any` ; `xht`: `any` ; `xml`: `any`  } & { `convertCommonjs`: `boolean` ; `defaultCDN`: [`CDN`](../modules/internal.md#cdn) ; `head`: `string` ; `htmlClasses`: `string` ; `imports`: `Record`<`string`, `string`\> ; `mapImports`: `boolean` ; `scriptType`: `undefined` \| ``""`` \| ``"module"`` \| ``"text/liquid"`` \| ``"text/python"`` \| ``"text/x-uniter-php"`` \| ``"text/cpp"`` \| ``"text/perl"`` \| ``"text/julia"`` \| ``"text/biwascheme"`` \| ``"text/commonlisp"`` \| ``"text/tcl"`` \| ``"text/prolog"`` \| ``"application/json"`` \| ``"application/lua"`` \| ``"application/wasm-uint8"`` \| ``"application/javascript"`` \| ``"application/ecmascript"`` \| ``"text/javascript"`` \| ``"text/ecmascript"`` ; `template`: { `data?`: `any` ; `prerender?`: `boolean`  } ; `types`: [`Types`](internal.Types.md)  }\>

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[customSettings](internal.ContentConfig.md#customsettings)

#### Defined in

models.ts:51

___

### delay

• **delay**: `number`

#### Inherited from

[UserConfig](internal.UserConfig.md).[delay](internal.UserConfig.md#delay)

#### Defined in

models.ts:73

___

### description

• **description**: `string`

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[description](internal.ContentConfig.md#description)

#### Defined in

models.ts:40

___

### editor

• **editor**: `undefined` \| ``"monaco"`` \| ``"codemirror"`` \| ``"codejar"``

#### Inherited from

[UserConfig](internal.UserConfig.md).[editor](internal.UserConfig.md#editor)

#### Defined in

models.ts:81

___

### editorMode

• **editorMode**: `undefined` \| ``"vim"`` \| ``"emacs"``

#### Inherited from

[UserConfig](internal.UserConfig.md).[editorMode](internal.UserConfig.md#editormode)

#### Defined in

models.ts:90

___

### emmet

• **emmet**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[emmet](internal.UserConfig.md#emmet)

#### Defined in

models.ts:89

___

### fontFamily

• **fontFamily**: `undefined` \| `string`

#### Inherited from

[UserConfig](internal.UserConfig.md).[fontFamily](internal.UserConfig.md#fontfamily)

#### Defined in

models.ts:82

___

### fontSize

• **fontSize**: `undefined` \| `number`

#### Inherited from

[UserConfig](internal.UserConfig.md).[fontSize](internal.UserConfig.md#fontsize)

#### Defined in

models.ts:83

___

### formatOnsave

• **formatOnsave**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[formatOnsave](internal.UserConfig.md#formatonsave)

#### Defined in

models.ts:74

___

### imports

• **imports**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[imports](internal.ContentConfig.md#imports)

#### Defined in

models.ts:52

___

### languages

• **languages**: `undefined` \| (``"reason"`` \| ``"stylus"`` \| ``"html"`` \| ``"ruby"`` \| ``"rb"`` \| ``"json"`` \| ``"htm"`` \| ``"markdown"`` \| ``"md"`` \| ``"mdown"`` \| ``"mkdn"`` \| ``"mdx"`` \| ``"astro"`` \| ``"pug"`` \| ``"jade"`` \| ``"haml"`` \| ``"asciidoc"`` \| ``"adoc"`` \| ``"asc"`` \| ``"mustache"`` \| ``"handlebars"`` \| ``"hbs"`` \| ``"ejs"`` \| ``"nunjucks"`` \| ``"njk"`` \| ``"liquid"`` \| ``"liquidjs"`` \| ``"dot"`` \| ``"twig"`` \| ``"art-template"`` \| ``"art"`` \| ``"diagrams"`` \| ``"diagram"`` \| ``"graph"`` \| ``"plt"`` \| ``"richtext"`` \| ``"rte"`` \| ``"rich"`` \| ``"rte.html"`` \| ``"css"`` \| ``"scss"`` \| ``"sass"`` \| ``"less"`` \| ``"styl"`` \| ``"postcss"`` \| ``"javascript"`` \| ``"js"`` \| ``"babel"`` \| ``"es"`` \| ``"typescript"`` \| ``"ts"`` \| ``"jsx"`` \| ``"tsx"`` \| ``"react-native"`` \| ``"react-native.jsx"`` \| ``"react-native-tsx"`` \| ``"react-native.tsx"`` \| ``"vue"`` \| ``"vue3"`` \| ``"vue2"`` \| ``"svelte"`` \| ``"stencil"`` \| ``"stencil.tsx"`` \| ``"solid"`` \| ``"solid.jsx"`` \| ``"solid.tsx"`` \| ``"riot"`` \| ``"riotjs"`` \| ``"malina"`` \| ``"malinajs"`` \| ``"xht"`` \| ``"coffeescript"`` \| ``"coffee"`` \| ``"livescript"`` \| ``"ls"`` \| ``"clio"`` \| ``"imba"`` \| ``"assemblyscript"`` \| ``"as"`` \| ``"python"`` \| ``"py"`` \| ``"pyodide"`` \| ``"py3"`` \| ``"go"`` \| ``"golang"`` \| ``"php"`` \| ``"cpp"`` \| ``"c"`` \| ``"C"`` \| ``"cp"`` \| ``"cxx"`` \| ``"c++"`` \| ``"cppm"`` \| ``"ixx"`` \| ``"ii"`` \| ``"hpp"`` \| ``"h"`` \| ``"clang"`` \| ``"clang.cpp"`` \| ``"perl"`` \| ``"pl"`` \| ``"pm"`` \| ``"lua"`` \| ``"julia"`` \| ``"jl"`` \| ``"scheme"`` \| ``"scm"`` \| ``"commonlisp"`` \| ``"common-lisp"`` \| ``"lisp"`` \| ``"rescript"`` \| ``"res"`` \| ``"resi"`` \| ``"re"`` \| ``"rei"`` \| ``"ocaml"`` \| ``"ml"`` \| ``"mli"`` \| ``"tcl"`` \| ``"wat"`` \| ``"wast"`` \| ``"webassembly"`` \| ``"wasm"`` \| ``"Binary"`` \| ``"csharp"`` \| ``"sql"`` \| ``"sqlite"`` \| ``"sqlite3"`` \| ``"prolog.pl"`` \| ``"prolog"`` \| ``"blockly"`` \| ``"blockly.xml"`` \| ``"xml"`` \| ``"pintora"`` \| ``"tailwindcss"`` \| ``"postcssImportUrl"`` \| ``"windicss"`` \| ``"unocss"`` \| ``"tokencss"`` \| ``"lightningcss"`` \| ``"autoprefixer"`` \| ``"postcssPresetEnv"`` \| ``"purgecss"`` \| ``"cssnano"``)[]

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[languages](internal.ContentConfig.md#languages)

#### Defined in

models.ts:43

___

### lineNumbers

• **lineNumbers**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[lineNumbers](internal.UserConfig.md#linenumbers)

#### Defined in

models.ts:86

___

### markup

• **markup**: [`Editor`](internal.Editor.md)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[markup](internal.ContentConfig.md#markup)

#### Defined in

models.ts:44

___

### mode

• **mode**: ``"full"`` \| ``"result"`` \| ``"editor"`` \| ``"codeblock"``

#### Inherited from

[AppConfig](internal.AppConfig.md).[mode](internal.AppConfig.md#mode)

#### Defined in

models.ts:61

___

### processors

• **processors**: [`Processor`](../modules/internal.md#processor)[]

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[processors](internal.ContentConfig.md#processors)

#### Defined in

models.ts:50

___

### readonly

• **readonly**: `boolean`

#### Inherited from

[AppConfig](internal.AppConfig.md).[readonly](internal.AppConfig.md#readonly)

#### Defined in

models.ts:59

___

### recoverUnsaved

• **recoverUnsaved**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[recoverUnsaved](internal.UserConfig.md#recoverunsaved)

#### Defined in

models.ts:76

___

### script

• **script**: [`Editor`](internal.Editor.md)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[script](internal.ContentConfig.md#script)

#### Defined in

models.ts:46

___

### scripts

• **scripts**: `string`[]

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[scripts](internal.ContentConfig.md#scripts)

#### Defined in

models.ts:48

___

### semicolons

• **semicolons**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[semicolons](internal.UserConfig.md#semicolons)

#### Defined in

models.ts:96

___

### showSpacing

• **showSpacing**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[showSpacing](internal.UserConfig.md#showspacing)

#### Defined in

models.ts:77

___

### singleQuote

• **singleQuote**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[singleQuote](internal.UserConfig.md#singlequote)

#### Defined in

models.ts:97

___

### style

• **style**: [`Editor`](internal.Editor.md)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[style](internal.ContentConfig.md#style)

#### Defined in

models.ts:45

___

### stylesheets

• **stylesheets**: `string`[]

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[stylesheets](internal.ContentConfig.md#stylesheets)

#### Defined in

models.ts:47

___

### tabSize

• **tabSize**: `number`

#### Inherited from

[UserConfig](internal.UserConfig.md).[tabSize](internal.UserConfig.md#tabsize)

#### Defined in

models.ts:85

___

### tags

• **tags**: `string`[]

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[tags](internal.ContentConfig.md#tags)

#### Defined in

models.ts:41

___

### tests

• **tests**: `undefined` \| `Partial`<[`Editor`](internal.Editor.md)\>

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[tests](internal.ContentConfig.md#tests)

#### Defined in

models.ts:54

___

### theme

• **theme**: [`Theme`](../modules/internal.md#theme)

#### Inherited from

[UserConfig](internal.UserConfig.md).[theme](internal.UserConfig.md#theme)

#### Defined in

models.ts:75

___

### title

• **title**: `string`

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[title](internal.ContentConfig.md#title)

#### Defined in

models.ts:39

___

### tools

• **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | ``""`` \| ``"console"`` \| ``"compiled"`` \| ``"tests"`` |
| `enabled` | ``"all"`` \| (``"console"`` \| ``"compiled"`` \| ``"tests"``)[] |
| `status` | [`ToolsPaneStatus`](../modules/internal.md#toolspanestatus) |

#### Inherited from

[AppConfig](internal.AppConfig.md).[tools](internal.AppConfig.md#tools)

#### Defined in

models.ts:62

___

### trailingComma

• **trailingComma**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[trailingComma](internal.UserConfig.md#trailingcomma)

#### Defined in

models.ts:98

___

### types

• **types**: [`Types`](internal.Types.md)

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[types](internal.ContentConfig.md#types)

#### Defined in

models.ts:53

___

### useTabs

• **useTabs**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[useTabs](internal.UserConfig.md#usetabs)

#### Defined in

models.ts:84

___

### version

• `Readonly` **version**: `string`

#### Inherited from

[ContentConfig](internal.ContentConfig.md).[version](internal.ContentConfig.md#version)

#### Defined in

models.ts:55

___

### wordWrap

• **wordWrap**: `boolean`

#### Inherited from

[UserConfig](internal.UserConfig.md).[wordWrap](internal.UserConfig.md#wordwrap)

#### Defined in

models.ts:87

___

### zoom

• **zoom**: ``1`` \| ``0.5`` \| ``0.25``

#### Inherited from

[AppConfig](internal.AppConfig.md).[zoom](internal.AppConfig.md#zoom)

#### Defined in

models.ts:67

---
id: "internal"
title: "Module: _internal"
sidebar_label: "_internal"
sidebar_position: 0
custom_edit_url: null
---

## Interfaces

- [API](../interfaces/internal.API.md)
- [AppConfig](../interfaces/internal.AppConfig.md)
- [ContentConfig](../interfaces/internal.ContentConfig.md)
- [Editor](../interfaces/internal.Editor.md)
- [EditorConfig](../interfaces/internal.EditorConfig.md)
- [EditorPosition](../interfaces/internal.EditorPosition.md)
- [FormatterConfig](../interfaces/internal.FormatterConfig.md)
- [Screen](../interfaces/internal.Screen.md)
- [TestResult](../interfaces/internal.TestResult.md)
- [Types](../interfaces/internal.Types.md)
- [UserConfig](../interfaces/internal.UserConfig.md)

## Type Aliases

### APICommands

Ƭ **APICommands**: ``"setBroadcastToken"`` \| ``"showVersion"``

#### Defined in

models.ts:19

___

### CDN

Ƭ **CDN**: ``"jspm"`` \| ``"skypack"`` \| ``"jsdelivr"`` \| ``"jsdelivr.gh"`` \| ``"esm.run"`` \| ``"esm.sh"`` \| ``"esbuild"`` \| ``"bundle.run"`` \| ``"unpkg"``

#### Defined in

models.ts:729

___

### ChangeHandler

Ƭ **ChangeHandler**: (`{ code, config }`: { `code`: [`Code`](../interfaces/Code.md) ; `config`: [`Config`](../interfaces/Config.md)  }) => `void`

#### Type declaration

▸ (`{ code, config }`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `{ code, config }` | `Object` |
| `{ code, config }.code` | [`Code`](../interfaces/Code.md) |
| `{ code, config }.config` | [`Config`](../interfaces/Config.md) |

##### Returns

`void`

#### Defined in

models.ts:18

___

### CssPresetId

Ƭ **CssPresetId**: ``""`` \| ``"normalize.css"`` \| ``"reset-css"`` \| ``"github-markdown-css"`` \| ``"asciidoctor.css"``

#### Defined in

models.ts:373

___

### EditorId

Ƭ **EditorId**: ``"markup"`` \| ``"style"`` \| ``"script"``

#### Defined in

models.ts:276

___

### Language

Ƭ **Language**: ``"html"`` \| ``"htm"`` \| ``"markdown"`` \| ``"md"`` \| ``"mdown"`` \| ``"mkdn"`` \| ``"mdx"`` \| ``"astro"`` \| ``"pug"`` \| ``"jade"`` \| ``"haml"`` \| ``"asciidoc"`` \| ``"adoc"`` \| ``"asc"`` \| ``"mustache"`` \| ``"handlebars"`` \| ``"hbs"`` \| ``"ejs"`` \| ``"nunjucks"`` \| ``"njk"`` \| ``"liquid"`` \| ``"liquidjs"`` \| ``"dot"`` \| ``"twig"`` \| ``"art-template"`` \| ``"art"`` \| ``"diagrams"`` \| ``"diagram"`` \| ``"graph"`` \| ``"plt"`` \| ``"richtext"`` \| ``"rte"`` \| ``"rich"`` \| ``"rte.html"`` \| ``"css"`` \| ``"scss"`` \| ``"sass"`` \| ``"less"`` \| ``"stylus"`` \| ``"styl"`` \| ``"postcss"`` \| ``"javascript"`` \| ``"js"`` \| ``"json"`` \| ``"babel"`` \| ``"es"`` \| ``"typescript"`` \| ``"ts"`` \| ``"jsx"`` \| ``"tsx"`` \| ``"react-native"`` \| ``"react-native.jsx"`` \| ``"react-native-tsx"`` \| ``"react-native.tsx"`` \| ``"vue"`` \| ``"vue3"`` \| ``"vue2"`` \| ``"svelte"`` \| ``"stencil"`` \| ``"stencil.tsx"`` \| ``"solid"`` \| ``"solid.jsx"`` \| ``"solid.tsx"`` \| ``"riot"`` \| ``"riotjs"`` \| ``"malina"`` \| ``"malinajs"`` \| ``"xht"`` \| ``"coffeescript"`` \| ``"coffee"`` \| ``"livescript"`` \| ``"ls"`` \| ``"clio"`` \| ``"imba"`` \| ``"assemblyscript"`` \| ``"as"`` \| ``"python"`` \| ``"py"`` \| ``"pyodide"`` \| ``"py3"`` \| ``"ruby"`` \| ``"rb"`` \| ``"go"`` \| ``"golang"`` \| ``"php"`` \| ``"cpp"`` \| ``"c"`` \| ``"C"`` \| ``"cp"`` \| ``"cxx"`` \| ``"c++"`` \| ``"cppm"`` \| ``"ixx"`` \| ``"ii"`` \| ``"hpp"`` \| ``"h"`` \| ``"clang"`` \| ``"clang.cpp"`` \| ``"perl"`` \| ``"pl"`` \| ``"pm"`` \| ``"lua"`` \| ``"julia"`` \| ``"jl"`` \| ``"scheme"`` \| ``"scm"`` \| ``"commonlisp"`` \| ``"common-lisp"`` \| ``"lisp"`` \| ``"rescript"`` \| ``"res"`` \| ``"resi"`` \| ``"reason"`` \| ``"re"`` \| ``"rei"`` \| ``"ocaml"`` \| ``"ml"`` \| ``"mli"`` \| ``"tcl"`` \| ``"wat"`` \| ``"wast"`` \| ``"webassembly"`` \| ``"wasm"`` \| ``"Binary"`` \| ``"csharp"`` \| ``"sql"`` \| ``"sqlite"`` \| ``"sqlite3"`` \| ``"prolog.pl"`` \| ``"prolog"`` \| ``"blockly"`` \| ``"blockly.xml"`` \| ``"xml"`` \| ``"pintora"``

#### Defined in

models.ts:127

___

### Processor

Ƭ **Processor**: ``"postcss"`` \| ``"postcssImportUrl"`` \| ``"tailwindcss"`` \| ``"windicss"`` \| ``"unocss"`` \| ``"tokencss"`` \| ``"lightningcss"`` \| ``"autoprefixer"`` \| ``"postcssPresetEnv"`` \| ``"purgecss"`` \| ``"cssnano"``

#### Defined in

models.ts:333

___

### TemplateName

Ƭ **TemplateName**: ``"blank"`` \| ``"javascript"`` \| ``"typescript"`` \| ``"react"`` \| ``"react-native"`` \| ``"vue2"`` \| ``"vue"`` \| ``"angular"`` \| ``"preact"`` \| ``"svelte"`` \| ``"stencil"`` \| ``"solid"`` \| ``"mdx"`` \| ``"astro"`` \| ``"riot"`` \| ``"malina"`` \| ``"jquery"`` \| ``"backbone"`` \| ``"knockout"`` \| ``"jest"`` \| ``"jest-react"`` \| ``"bootstrap"`` \| ``"tailwindcss"`` \| ``"coffeescript"`` \| ``"livescript"`` \| ``"clio"`` \| ``"imba"`` \| ``"rescript"`` \| ``"reason"`` \| ``"ocaml"`` \| ``"python"`` \| ``"pyodide"`` \| ``"ruby"`` \| ``"go"`` \| ``"php"`` \| ``"cpp"`` \| ``"clang"`` \| ``"perl"`` \| ``"lua"`` \| ``"julia"`` \| ``"scheme"`` \| ``"commonlisp"`` \| ``"tcl"`` \| ``"markdown"`` \| ``"assemblyscript"`` \| ``"wat"`` \| ``"sql"`` \| ``"prolog"`` \| ``"blockly"`` \| ``"diagrams"``

#### Defined in

models.ts:461

___

### Theme

Ƭ **Theme**: ``"light"`` \| ``"dark"``

#### Defined in

models.ts:773

___

### ToolsPaneStatus

Ƭ **ToolsPaneStatus**: ``"closed"`` \| ``"open"`` \| ``"full"`` \| ``"none"`` \| ``""``

#### Defined in

models.ts:522

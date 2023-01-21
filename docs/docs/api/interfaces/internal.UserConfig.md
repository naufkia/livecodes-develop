---
id: "internal.UserConfig"
title: "Interface: UserConfig"
sidebar_label: "UserConfig"
custom_edit_url: null
---

[_internal](../modules/internal.md).UserConfig

## Hierarchy

- [`EditorConfig`](internal.EditorConfig.md)

- [`FormatterConfig`](internal.FormatterConfig.md)

  ↳ **`UserConfig`**

  ↳↳ [`Config`](Config.md)

## Properties

### autosave

• **autosave**: `boolean`

#### Defined in

models.ts:72

___

### autoupdate

• **autoupdate**: `boolean`

#### Defined in

models.ts:71

___

### closeBrackets

• **closeBrackets**: `boolean`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[closeBrackets](internal.EditorConfig.md#closebrackets)

#### Defined in

models.ts:88

___

### delay

• **delay**: `number`

#### Defined in

models.ts:73

___

### editor

• **editor**: `undefined` \| ``"monaco"`` \| ``"codemirror"`` \| ``"codejar"``

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[editor](internal.EditorConfig.md#editor)

#### Defined in

models.ts:81

___

### editorMode

• **editorMode**: `undefined` \| ``"vim"`` \| ``"emacs"``

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[editorMode](internal.EditorConfig.md#editormode)

#### Defined in

models.ts:90

___

### emmet

• **emmet**: `boolean`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[emmet](internal.EditorConfig.md#emmet)

#### Defined in

models.ts:89

___

### fontFamily

• **fontFamily**: `undefined` \| `string`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[fontFamily](internal.EditorConfig.md#fontfamily)

#### Defined in

models.ts:82

___

### fontSize

• **fontSize**: `undefined` \| `number`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[fontSize](internal.EditorConfig.md#fontsize)

#### Defined in

models.ts:83

___

### formatOnsave

• **formatOnsave**: `boolean`

#### Defined in

models.ts:74

___

### lineNumbers

• **lineNumbers**: `boolean`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[lineNumbers](internal.EditorConfig.md#linenumbers)

#### Defined in

models.ts:86

___

### recoverUnsaved

• **recoverUnsaved**: `boolean`

#### Defined in

models.ts:76

___

### semicolons

• **semicolons**: `boolean`

#### Inherited from

[FormatterConfig](internal.FormatterConfig.md).[semicolons](internal.FormatterConfig.md#semicolons)

#### Defined in

models.ts:96

___

### showSpacing

• **showSpacing**: `boolean`

#### Defined in

models.ts:77

___

### singleQuote

• **singleQuote**: `boolean`

#### Inherited from

[FormatterConfig](internal.FormatterConfig.md).[singleQuote](internal.FormatterConfig.md#singlequote)

#### Defined in

models.ts:97

___

### tabSize

• **tabSize**: `number`

#### Inherited from

[FormatterConfig](internal.FormatterConfig.md).[tabSize](internal.FormatterConfig.md#tabsize)

#### Defined in

models.ts:85

___

### theme

• **theme**: [`Theme`](../modules/internal.md#theme)

#### Defined in

models.ts:75

___

### trailingComma

• **trailingComma**: `boolean`

#### Inherited from

[FormatterConfig](internal.FormatterConfig.md).[trailingComma](internal.FormatterConfig.md#trailingcomma)

#### Defined in

models.ts:98

___

### useTabs

• **useTabs**: `boolean`

#### Inherited from

[FormatterConfig](internal.FormatterConfig.md).[useTabs](internal.FormatterConfig.md#usetabs)

#### Defined in

models.ts:84

___

### wordWrap

• **wordWrap**: `boolean`

#### Inherited from

[EditorConfig](internal.EditorConfig.md).[wordWrap](internal.EditorConfig.md#wordwrap)

#### Defined in

models.ts:87

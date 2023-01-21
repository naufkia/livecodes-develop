---
id: "internal.AppConfig"
title: "Interface: AppConfig"
sidebar_label: "AppConfig"
custom_edit_url: null
---

[_internal](../modules/internal.md).AppConfig

## Hierarchy

- **`AppConfig`**

  ↳ [`Config`](Config.md)

## Properties

### allowLangChange

• **allowLangChange**: `boolean`

#### Defined in

models.ts:60

___

### mode

• **mode**: ``"full"`` \| ``"result"`` \| ``"editor"`` \| ``"codeblock"``

#### Defined in

models.ts:61

___

### readonly

• **readonly**: `boolean`

#### Defined in

models.ts:59

___

### tools

• **tools**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `active` | ``""`` \| ``"console"`` \| ``"compiled"`` \| ``"tests"`` |
| `enabled` | ``"all"`` \| (``"console"`` \| ``"compiled"`` \| ``"tests"``)[] |
| `status` | [`ToolsPaneStatus`](../modules/internal.md#toolspanestatus) |

#### Defined in

models.ts:62

___

### zoom

• **zoom**: ``1`` \| ``0.5`` \| ``0.25``

#### Defined in

models.ts:67

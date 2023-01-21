---
id: "internal.API"
title: "Interface: API"
sidebar_label: "API"
custom_edit_url: null
---

[_internal](../modules/internal.md).API

## Hierarchy

- **`API`**

  ↳ [`Playground`](Playground.md)

## Properties

### destroy

• **destroy**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

models.ts:15

___

### exec

• **exec**: (`command`: [`APICommands`](../modules/internal.md#apicommands), ...`args`: `any`[]) => `Promise`<{ `output`: `any`  } \| { `error`: `string`  }\>

#### Type declaration

▸ (`command`, ...`args`): `Promise`<{ `output`: `any`  } \| { `error`: `string`  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `command` | [`APICommands`](../modules/internal.md#apicommands) |
| `...args` | `any`[] |

##### Returns

`Promise`<{ `output`: `any`  } \| { `error`: `string`  }\>

#### Defined in

models.ts:14

___

### format

• **format**: (`allEditors?`: `boolean`) => `Promise`<`void`\>

#### Type declaration

▸ (`allEditors?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `allEditors?` | `boolean` |

##### Returns

`Promise`<`void`\>

#### Defined in

models.ts:3

___

### getCode

• **getCode**: () => `Promise`<[`Code`](Code.md)\>

#### Type declaration

▸ (): `Promise`<[`Code`](Code.md)\>

##### Returns

`Promise`<[`Code`](Code.md)\>

#### Defined in

models.ts:7

___

### getConfig

• **getConfig**: (`contentOnly?`: `boolean`) => `Promise`<[`Config`](Config.md)\>

#### Type declaration

▸ (`contentOnly?`): `Promise`<[`Config`](Config.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `contentOnly?` | `boolean` |

##### Returns

`Promise`<[`Config`](Config.md)\>

#### Defined in

models.ts:5

___

### getShareUrl

• **getShareUrl**: (`shortUrl?`: `boolean`) => `Promise`<`string`\>

#### Type declaration

▸ (`shortUrl?`): `Promise`<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `shortUrl?` | `boolean` |

##### Returns

`Promise`<`string`\>

#### Defined in

models.ts:4

___

### onChange

• **onChange**: (`fn`: [`ChangeHandler`](../modules/internal.md#changehandler)) => { `remove`: () => `void`  }

#### Type declaration

▸ (`fn`): `Object`

##### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | [`ChangeHandler`](../modules/internal.md#changehandler) |

##### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `remove` | () => `void` |

#### Defined in

models.ts:13

___

### run

• **run**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

models.ts:2

___

### runTests

• **runTests**: () => `Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

#### Type declaration

▸ (): `Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

##### Returns

`Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

#### Defined in

models.ts:12

___

### setConfig

• **setConfig**: (`config`: `Partial`<[`Config`](Config.md)\>) => `Promise`<[`Config`](Config.md)\>

#### Type declaration

▸ (`config`): `Promise`<[`Config`](Config.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | `Partial`<[`Config`](Config.md)\> |

##### Returns

`Promise`<[`Config`](Config.md)\>

#### Defined in

models.ts:6

___

### show

• **show**: (`panel`: [`EditorId`](../modules/internal.md#editorid) \| ``"console"`` \| ``"compiled"`` \| ``"tests"`` \| ``"result"``, `options?`: { `column?`: `number` ; `full?`: `boolean` ; `line?`: `number` ; `zoom?`: ``1`` \| ``0.5`` \| ``0.25``  }) => `Promise`<`void`\>

#### Type declaration

▸ (`panel`, `options?`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `panel` | [`EditorId`](../modules/internal.md#editorid) \| ``"console"`` \| ``"compiled"`` \| ``"tests"`` \| ``"result"`` |
| `options?` | `Object` |
| `options.column?` | `number` |
| `options.full?` | `boolean` |
| `options.line?` | `number` |
| `options.zoom?` | ``1`` \| ``0.5`` \| ``0.25`` |

##### Returns

`Promise`<`void`\>

#### Defined in

models.ts:8

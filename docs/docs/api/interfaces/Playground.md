---
id: "Playground"
title: "Interface: Playground"
sidebar_label: "Playground"
sidebar_position: 0
custom_edit_url: null
---

## Hierarchy

- [`API`](internal.API.md)

  ↳ **`Playground`**

## Properties

### destroy

• **destroy**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Inherited from

[API](internal.API.md).[destroy](internal.API.md#destroy)

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

#### Inherited from

[API](internal.API.md).[exec](internal.API.md#exec)

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

#### Inherited from

[API](internal.API.md).[format](internal.API.md#format)

#### Defined in

models.ts:3

___

### getCode

• **getCode**: () => `Promise`<[`Code`](Code.md)\>

#### Type declaration

▸ (): `Promise`<[`Code`](Code.md)\>

##### Returns

`Promise`<[`Code`](Code.md)\>

#### Inherited from

[API](internal.API.md).[getCode](internal.API.md#getcode)

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

#### Inherited from

[API](internal.API.md).[getConfig](internal.API.md#getconfig)

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

#### Inherited from

[API](internal.API.md).[getShareUrl](internal.API.md#getshareurl)

#### Defined in

models.ts:4

___

### load

• **load**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

models.ts:22

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

#### Inherited from

[API](internal.API.md).[onChange](internal.API.md#onchange)

#### Defined in

models.ts:13

___

### run

• **run**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Inherited from

[API](internal.API.md).[run](internal.API.md#run)

#### Defined in

models.ts:2

___

### runTests

• **runTests**: () => `Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

#### Type declaration

▸ (): `Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

##### Returns

`Promise`<{ `results`: [`TestResult`](internal.TestResult.md)[]  }\>

#### Inherited from

[API](internal.API.md).[runTests](internal.API.md#runtests)

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

#### Inherited from

[API](internal.API.md).[setConfig](internal.API.md#setconfig)

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

#### Inherited from

[API](internal.API.md).[show](internal.API.md#show)

#### Defined in

models.ts:8

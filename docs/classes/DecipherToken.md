[**@mgraphic/cipher-token**](../README.md) • **Docs**

***

[@mgraphic/cipher-token](../globals.md) / DecipherToken

# Class: DecipherToken

Decipher token
 DecipherToken

## Extends

- `AbstractBaseClass`

## Constructors

### new DecipherToken()

> **new DecipherToken**(`newConfig`?): [`DecipherToken`](DecipherToken.md)

Creates an instance of AbstractBaseClass.

#### Parameters

• **newConfig?**: [`CipherTokenConfig`](CipherTokenConfig.md)

#### Returns

[`DecipherToken`](DecipherToken.md)

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.constructor`

#### Defined in

[\_base.ts:28](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L28)

## Properties

### config

> `protected` **config**: [`CipherTokenConfig`](CipherTokenConfig.md)

Config object

#### Inherited from

`AbstractBaseClass.config`

#### Defined in

[\_base.ts:14](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L14)

***

### key?

> `protected` `optional` **key**: `CipherKey`

Key

#### Inherited from

`AbstractBaseClass.key`

#### Defined in

[\_base.ts:20](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L20)

## Methods

### decipher()

> **decipher**(`cipherObject`, `key`?): `string`

Decipher data

#### Parameters

• **cipherObject**: [`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

• **key?**: `any`

#### Returns

`string`

#### Defined in

[decipher.ts:58](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/decipher.ts#L58)

***

### generateRandomKey()

> **generateRandomKey**(): `CipherKey`

Generate random key

#### Returns

`CipherKey`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.generateRandomKey`

#### Defined in

[\_base.ts:39](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L39)

***

### keyFrom()

> **keyFrom**(`source`): `Promise`\<`CipherKey`\>

Generate key from object

#### Parameters

• **source**: `RequireAtLeastOne`\<`object`\>

#### Returns

`Promise`\<`CipherKey`\>

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFrom`

#### Defined in

[\_base.ts:97](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L97)

***

### keyFromBuffer()

> **keyFromBuffer**(`buffer`): `CipherKey`

Generate key from buffer

#### Parameters

• **buffer**: `Buffer`

#### Returns

`CipherKey`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromBuffer`

#### Defined in

[\_base.ts:51](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L51)

***

### keyFromFile()

> **keyFromFile**(`fileName`): `Promise`\<`CipherKey`\>

Generate key from file

#### Parameters

• **fileName**: `string`

#### Returns

`Promise`\<`CipherKey`\>

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromFile`

#### Defined in

[\_base.ts:75](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L75)

***

### keyFromString()

> **keyFromString**(`secret`): `CipherKey`

Generate key from string

#### Parameters

• **secret**: `string`

#### Returns

`CipherKey`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromString`

#### Defined in

[\_base.ts:63](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/_base.ts#L63)

***

### untokenize()

> **untokenize**(`token`, `key`?): `string`

Untokenize token

#### Parameters

• **token**: `string`

• **key?**: `CipherKey`

#### Returns

`string`

#### Defined in

[decipher.ts:17](https://github.com/mgraphic/cipher-token/blob/fc62126e1d3f555d007122c7a34acccb9b74a009/src/decipher.ts#L17)

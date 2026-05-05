[**@mgraphic/cipher-token**](../README.md)

***

[@mgraphic/cipher-token](../globals.md) / CipherToken

# Class: CipherToken

Defined in: [cipher.ts:10](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/cipher.ts#L10)

Cipher token
 CipherToken

## Extends

- `AbstractBaseClass`

## Constructors

### Constructor

> **new CipherToken**(`newConfig?`): `CipherToken`

Defined in: [\_base.ts:28](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L28)

Creates an instance of AbstractBaseClass.

#### Parameters

##### newConfig?

[`CipherTokenConfig`](CipherTokenConfig.md)

#### Returns

`CipherToken`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.constructor`

## Properties

### config

> `protected` **config**: [`CipherTokenConfig`](CipherTokenConfig.md)

Defined in: [\_base.ts:14](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L14)

Config object

#### Inherited from

`AbstractBaseClass.config`

***

### key?

> `protected` `optional` **key?**: `CipherKey`

Defined in: [\_base.ts:20](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L20)

Key

#### Inherited from

`AbstractBaseClass.key`

## Methods

### cipher()

> **cipher**(`data`, `key?`): [`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

Defined in: [cipher.ts:32](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/cipher.ts#L32)

Cipher data

#### Parameters

##### data

`string`

##### key?

`CipherKey`

#### Returns

[`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

***

### keyFrom()

> **keyFrom**(`source`): `Promise`\<`CipherKey`\>

Defined in: [\_base.ts:87](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L87)

Generate key from object

#### Parameters

##### source

`RequireAtLeastOne`\<\{ `buffer?`: `Buffer`\<`ArrayBufferLike`\>; `file?`: `string`; `text?`: `string`; \}\>

#### Returns

`Promise`\<`CipherKey`\>

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFrom`

***

### keyFromBuffer()

> **keyFromBuffer**(`buffer`): `CipherKey`

Defined in: [\_base.ts:40](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L40)

Generate key from buffer

#### Parameters

##### buffer

`Buffer`

#### Returns

`CipherKey`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromBuffer`

***

### keyFromFile()

> **keyFromFile**(`fileName`): `Promise`\<`CipherKey`\>

Defined in: [\_base.ts:64](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L64)

Generate key from file

#### Parameters

##### fileName

`string`

#### Returns

`Promise`\<`CipherKey`\>

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromFile`

***

### keyFromString()

> **keyFromString**(`secret`): `CipherKey`

Defined in: [\_base.ts:52](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L52)

Generate key from string

#### Parameters

##### secret

`string`

#### Returns

`CipherKey`

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.keyFromString`

***

### tokenize()

> **tokenize**(`data`, `key?`): `string`

Defined in: [cipher.ts:17](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/cipher.ts#L17)

Generate token

#### Parameters

##### data

`string`

##### key?

`CipherKey`

#### Returns

`string`

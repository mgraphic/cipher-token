[**@mgraphic/cipher-token**](../README.md)

***

[@mgraphic/cipher-token](../globals.md) / CipherToken

# Class: CipherToken

Defined in: [cipher.ts:10](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/cipher.ts#L10)

Cipher token
 CipherToken

## Extends

- `AbstractBaseClass`

## Constructors

### Constructor

> **new CipherToken**(`newConfig?`): `CipherToken`

Defined in: [\_base.ts:29](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L29)

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

Defined in: [\_base.ts:15](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L15)

Config object

#### Inherited from

`AbstractBaseClass.config`

***

### key?

> `protected` `optional` **key?**: `CipherKey`

Defined in: [\_base.ts:21](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L21)

Key

#### Inherited from

`AbstractBaseClass.key`

## Methods

### cipher()

> **cipher**(`data`, `key?`): [`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

Defined in: [cipher.ts:32](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/cipher.ts#L32)

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

Defined in: [\_base.ts:88](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L88)

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

Defined in: [\_base.ts:41](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L41)

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

Defined in: [\_base.ts:65](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L65)

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

Defined in: [\_base.ts:53](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/_base.ts#L53)

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

Defined in: [cipher.ts:17](https://github.com/mgraphic/cipher-token/blob/2f4dfcb531fd02694f60801c83da26160ecba2a4/src/cipher.ts#L17)

Generate token

#### Parameters

##### data

`string`

##### key?

`CipherKey`

#### Returns

`string`

[**@mgraphic/cipher-token**](../README.md)

***

[@mgraphic/cipher-token](../globals.md) / DecipherToken

# Class: DecipherToken

Defined in: [decipher.ts:10](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/decipher.ts#L10)

Decipher token
 DecipherToken

## Extends

- `AbstractBaseClass`

## Constructors

### Constructor

> **new DecipherToken**(`newConfig?`): `DecipherToken`

Defined in: [\_base.ts:28](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/_base.ts#L28)

Creates an instance of AbstractBaseClass.

#### Parameters

##### newConfig?

[`CipherTokenConfig`](CipherTokenConfig.md)

#### Returns

`DecipherToken`

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

### decipher()

> **decipher**(`cipherObject`, `key?`): `string`

Defined in: [decipher.ts:59](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/decipher.ts#L59)

Decipher data

#### Parameters

##### cipherObject

[`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

##### key?

`CipherKey`

#### Returns

`string`

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

### untokenize()

> **untokenize**(`token`, `key?`): `string`

Defined in: [decipher.ts:17](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/decipher.ts#L17)

Untokenize token

#### Parameters

##### token

`string`

##### key?

`CipherKey`

#### Returns

`string`

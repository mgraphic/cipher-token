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

[\_base.ts:28](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L28)

## Properties

### config

> `protected` **config**: [`CipherTokenConfig`](CipherTokenConfig.md)

Config object

#### Inherited from

`AbstractBaseClass.config`

#### Defined in

[\_base.ts:14](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L14)

***

### key?

> `protected` `optional` **key**: `CipherKey`

Key

#### Inherited from

`AbstractBaseClass.key`

#### Defined in

[\_base.ts:20](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L20)

## Methods

### decipher()

> **decipher**(`cipherObject`, `key`?): `string`

Decipher data

#### Parameters

• **cipherObject**: [`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

• **key?**: `CipherKey`

#### Returns

`string`

#### Defined in

[decipher.ts:59](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/decipher.ts#L59)

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

[\_base.ts:87](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L87)

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

[\_base.ts:40](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L40)

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

[\_base.ts:64](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L64)

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

[\_base.ts:52](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/_base.ts#L52)

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

[decipher.ts:17](https://github.com/mgraphic/cipher-token/blob/6ab4a04a2f8507b6bcf0aa89603c3ca7bcb3b225/src/decipher.ts#L17)

[**@mgraphic/cipher-token**](../README.md) • **Docs**

***

[@mgraphic/cipher-token](../globals.md) / CipherToken

# Class: CipherToken

Cipher token
 CipherToken

## Extends

- `AbstractBaseClass`

## Constructors

### new CipherToken()

> **new CipherToken**(`newConfig`?): [`CipherToken`](CipherToken.md)

Creates an instance of AbstractBaseClass.

#### Parameters

• **newConfig?**: [`CipherTokenConfig`](CipherTokenConfig.md)

#### Returns

[`CipherToken`](CipherToken.md)

#### Memberof

AbstractBaseClass

#### Inherited from

`AbstractBaseClass.constructor`

#### Defined in

[\_base.ts:28](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L28)

## Properties

### config

> `protected` **config**: [`CipherTokenConfig`](CipherTokenConfig.md)

Config object

#### Inherited from

`AbstractBaseClass.config`

#### Defined in

[\_base.ts:14](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L14)

***

### key?

> `protected` `optional` **key**: `CipherKey`

Key

#### Inherited from

`AbstractBaseClass.key`

#### Defined in

[\_base.ts:20](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L20)

## Methods

### cipher()

> **cipher**(`data`, `key`?): [`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

Cipher data

#### Parameters

• **data**: `string`

• **key?**: `CipherKey`

#### Returns

[`CipherEncryptionObject`](../type-aliases/CipherEncryptionObject.md)

#### Defined in

[cipher.ts:32](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/cipher.ts#L32)

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

[\_base.ts:87](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L87)

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

[\_base.ts:40](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L40)

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

[\_base.ts:64](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L64)

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

[\_base.ts:52](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/_base.ts#L52)

***

### tokenize()

> **tokenize**(`data`, `key`?): `string`

Generate token

#### Parameters

• **data**: `string`

• **key?**: `CipherKey`

#### Returns

`string`

#### Defined in

[cipher.ts:17](https://github.com/mgraphic/cipher-token/blob/84fd06062d7f61b79d7a8155440ee4cc7cc44b40/src/cipher.ts#L17)

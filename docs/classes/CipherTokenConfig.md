[**@mgraphic/cipher-token**](../README.md) • **Docs**

***

[@mgraphic/cipher-token](../globals.md) / CipherTokenConfig

# Class: CipherTokenConfig

## Constructors

### new CipherTokenConfig()

> **new CipherTokenConfig**(): [`CipherTokenConfig`](CipherTokenConfig.md)

#### Returns

[`CipherTokenConfig`](CipherTokenConfig.md)

## Properties

### cipherAlgorithm

> **cipherAlgorithm**: `CipherGCMTypes` = `'aes-256-gcm'`

The cipher algorithm to use to encrypt/decrypt the token.

#### Default

```ts
'aes-256-gcm'
```

#### Defined in

[config.ts:11](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L11)

***

### encryptionEncoding

> **encryptionEncoding**: `Encoding` = `'hex'`

The encoding to use for encryption.

#### Default

```ts
'hex'
```

#### Defined in

[config.ts:25](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L25)

***

### hashAlgorithm

> **hashAlgorithm**: `string` = `'sha256'`

The hash algorithm to use to generate the key.

#### Default

```ts
'sha256'
```

#### Defined in

[config.ts:17](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L17)

***

### keyLength

> **keyLength**: `number` = `32`

The length of the key in bytes.

#### Default

```ts
32
```

#### Defined in

[config.ts:57](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L57)

***

### saltByteSize

> **saltByteSize**: `number` = `8`

The length of the salt in bytes.

#### Default

```ts
8
```

#### Defined in

[config.ts:63](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L63)

***

### saltEncoding

> **saltEncoding**: `BufferEncoding` = `'hex'`

The encoding to use for the salt.

#### Default

```ts
'hex'
```

#### Defined in

[config.ts:31](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L31)

***

### tagEncoding

> **tagEncoding**: `BufferEncoding` = `'hex'`

The encoding to use for the tag.

#### Default

```ts
'hex'
```

#### Defined in

[config.ts:37](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L37)

***

### textEncoding

> **textEncoding**: `BufferEncoding` = `'utf8'`

The encoding to use for plaintext.

#### Default

```ts
'utf8'
```

#### Defined in

[config.ts:43](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L43)

***

### tokenEncoding

> **tokenEncoding**: `BufferEncoding` = `'base64'`

The encoding to use for the token.

#### Default

```ts
'base64'
```

#### Defined in

[config.ts:49](https://github.com/mgraphic/cipher-token/blob/889192861d364587ebc3a064e78745c249ead5c3/src/config.ts#L49)

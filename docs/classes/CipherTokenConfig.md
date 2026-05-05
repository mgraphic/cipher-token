[**@mgraphic/cipher-token**](../README.md)

***

[@mgraphic/cipher-token](../globals.md) / CipherTokenConfig

# Class: CipherTokenConfig

Defined in: [config.ts:4](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L4)

## Constructors

### Constructor

> **new CipherTokenConfig**(): `CipherTokenConfig`

#### Returns

`CipherTokenConfig`

## Properties

### cipherAlgorithm

> **cipherAlgorithm**: `CipherGCMTypes` = `'aes-256-gcm'`

Defined in: [config.ts:11](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L11)

The cipher algorithm to use to encrypt/decrypt the token.

#### Default

```ts
'aes-256-gcm'
```

***

### encryptionEncoding

> **encryptionEncoding**: `Encoding` = `'hex'`

Defined in: [config.ts:25](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L25)

The encoding to use for encryption.

#### Default

```ts
'hex'
```

***

### hashAlgorithm

> **hashAlgorithm**: `string` = `'sha256'`

Defined in: [config.ts:17](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L17)

The hash algorithm to use to generate the key.

#### Default

```ts
'sha256'
```

***

### keyLength

> **keyLength**: `number` = `32`

Defined in: [config.ts:57](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L57)

The length of the key in bytes.

#### Default

```ts
32
```

***

### saltByteSize

> **saltByteSize**: `number` = `8`

Defined in: [config.ts:63](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L63)

The length of the salt in bytes.

#### Default

```ts
8
```

***

### saltEncoding

> **saltEncoding**: `BufferEncoding` = `'hex'`

Defined in: [config.ts:31](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L31)

The encoding to use for the salt.

#### Default

```ts
'hex'
```

***

### tagEncoding

> **tagEncoding**: `BufferEncoding` = `'hex'`

Defined in: [config.ts:37](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L37)

The encoding to use for the tag.

#### Default

```ts
'hex'
```

***

### textEncoding

> **textEncoding**: `BufferEncoding` = `'utf8'`

Defined in: [config.ts:43](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L43)

The encoding to use for plaintext.

#### Default

```ts
'utf8'
```

***

### tokenEncoding

> **tokenEncoding**: `BufferEncoding` = `'base64'`

Defined in: [config.ts:49](https://github.com/mgraphic/cipher-token/blob/375453b53fb7163b65cab0330ec38bb7e5e07f57/src/config.ts#L49)

The encoding to use for the token.

#### Default

```ts
'base64'
```

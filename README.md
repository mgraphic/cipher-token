<div align="center">
  <img src="https://raw.githubusercontent.com/mgraphic/cipher-token/main/cipher-token-logo.png" width="75%" />
  <br />
  <a href="https://www.npmjs.com/package/@mgraphic/cipher-token"><img src="https://img.shields.io/npm/v/@mgraphic/cipher-token?maxAge=3600" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@mgraphic/cipher-token"><img src="https://img.shields.io/npm/dt/@mgraphic/cipher-token?maxAge=3600" alt="npm downloads" /></a>
</div>
<br />

# Cipher Token Generator

**[API Documentation (docs/globals.md)](docs/globals.md)**

A package tool to encrypt and decrypt secrets into storable string values without requiring a vault to store them. Tokens can ciphered and deciphered by a single key that can be generated by a string, buffer, file, or auto-generated (to be stored privately), or even a combination of these.

```bash
npm install @mgraphic/cipher-token
```

## Example

### Encryption:

```javascript
const { getCipherToken } = require('@mgraphic/cipher-token');

//   Encrypt:
const cipherToken = getCipherToken();
cipherToken.keyFromString('secret_string_key');
const token = cipherToken.tokenize('Secret Text encrypted by a string key');
console.log('Token:', token);
```

### Decryption:

```javascript
const { getDecipherToken } = require('@mgraphic/cipher-token');

//   Decrypt:
const decipherToken = getDecipherToken();
decipherToken.keyFromString('secret_string_key');
const decrypted = decipherToken.untokenize(token);
console.log('Decrypted:', decrypted);
```

<!-- NPM Publish: https://zellwk.com/blog/publish-to-npm/ -->
<!-- npx np -->

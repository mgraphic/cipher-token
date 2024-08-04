import { CipherGCMTypes, Encoding } from 'crypto';
import { HASH_TYPES } from './_utils';

export class CipherTokenConfig {
  // Algorithms:

  /**
   * The cipher algorithm to use to encrypt/decrypt the token.
   * @default 'aes-256-gcm'
   */
  cipherAlgorithm: CipherGCMTypes = 'aes-256-gcm';

  /**
   * The hash algorithm to use to generate the key.
   * @default 'sha256'
   */
  hashAlgorithm: (typeof HASH_TYPES)[number] = 'sha256';

  // Encodings:

  /**
   * The encoding to use for encryption.
   * @default 'hex'
   */
  encryptionEncoding: Encoding = 'hex';

  /**
   * The encoding to use for the salt.
   * @default 'hex'
   */
  saltEncoding: BufferEncoding = 'hex';

  /**
   * The encoding to use for the tag.
   * @default 'hex'
   */
  tagEncoding: BufferEncoding = 'hex';

  /**
   * The encoding to use for plaintext.
   * @default 'utf8'
   */
  textEncoding: BufferEncoding = 'utf8';

  /**
   * The encoding to use for the token.
   * @default 'base64'
   */
  tokenEncoding: BufferEncoding = 'base64';

  // Other:

  /**
   * The length of the key in bytes.
   * @default 32
   */
  keyLength: number = 32;

  /**
   * The length of the salt in bytes.
   * @default 8
   */
  saltByteSize: number = 8;
}

import { CipherGCMTypes, Encoding } from 'crypto';
import { HASH_TYPES } from './_utils';

export class CipherTokenConfig {
  // Algorithms:
  cipherAlgorithm: CipherGCMTypes = 'aes-256-gcm';
  hashAlgorithm: (typeof HASH_TYPES)[number] = 'sha256';

  // Encodings:
  encryptionEncoding: Encoding = 'hex';
  saltEncoding: BufferEncoding = 'hex';
  tagEncoding: BufferEncoding = 'hex';
  textEncoding: BufferEncoding = 'utf8';
  tokenEncoding: BufferEncoding = 'base64';

  // Other:
  keyLength: number = 32;
  saltByteSize: number = 8;
}

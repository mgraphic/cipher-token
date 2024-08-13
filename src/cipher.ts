import { randomBytes, CipherGCM, createCipheriv } from 'crypto';
import { AbstractBaseClass } from './_base';
import { CipherEncryptionObject, CipherKey } from './model';

/**
 * Cipher token
 * @class CipherToken
 * @extends {AbstractBaseClass}
 */
export class CipherToken extends AbstractBaseClass {
  /**
   * Generate token
   * @param {string} data
   * @param {CipherKey} [key]
   * @returns {string}
   */
  tokenize(data: string, key?: CipherKey): string {
    const cipherEncryptionObject = JSON.stringify(this.cipher(data, key));

    return Buffer.from(
      cipherEncryptionObject,
      this.config.textEncoding
    ).toString(this.config.tokenEncoding);
  }

  /**
   * Cipher data
   * @param {string} data
   * @param {CipherKey} [key]
   * @returns {CipherEncryptionObject}
   */
  cipher(data: string, key?: CipherKey): CipherEncryptionObject {
    key = key || this.key;

    if (!key) {
      throw new Error('No key provided');
    }

    const salt = randomBytes(this.config.saltByteSize).toString(
      this.config.saltEncoding
    );
    const cipher: CipherGCM = createCipheriv(
      this.config.cipherAlgorithm,
      key,
      salt
    );
    const encrypted = Buffer.concat([
      cipher.update(Buffer.from(data, this.config.textEncoding)),
      cipher.final(),
    ]).toString(this.config.encryptionEncoding);
    const tag = cipher.getAuthTag().toString(this.config.tagEncoding);

    return { encrypted, salt, tag };
  }
}

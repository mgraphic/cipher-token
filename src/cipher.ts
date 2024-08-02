import { randomBytes, CipherGCM, createCipheriv } from 'crypto';
import { AbstractBaseClass } from './_base';
import { CipherEncryptionObject, CipherKey } from './model';

export class CipherToken extends AbstractBaseClass {
  tokenize(data: string, key?: CipherKey): string {
    const cipherEncryptionObject = JSON.stringify(this.cipher(data, key));

    return Buffer.from(
      cipherEncryptionObject,
      this.config.textEncoding
    ).toString(this.config.tokenEncoding);
  }

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
    const encrypted =
      cipher.update(data).toString(this.config.encryptionEncoding) +
      cipher.final(this.config.encryptionEncoding);
    const tag = cipher.getAuthTag().toString(this.config.tagEncoding);

    return { encrypted, salt, tag };
  }
}

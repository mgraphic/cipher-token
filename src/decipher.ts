import { DecipherGCM, createDecipheriv } from 'crypto';
import { AbstractBaseClass } from './_base';
import { CipherEncryptionObject, CipherKey } from './model';

export class DecipherToken extends AbstractBaseClass {
  untokenize(token: string, key?: CipherKey): string {
    let cipherEncryptionObject: CipherEncryptionObject;

    try {
      cipherEncryptionObject = JSON.parse(
        Buffer.from(token, this.config.tokenEncoding).toString(
          this.config.textEncoding
        )
      );
    } catch (err) {
      throw new Error('Invalid token');
    }

    if (
      // is object null or undefined?
      !token ||
      // do the required keys exist?
      !('encrypted' in cipherEncryptionObject) ||
      !('salt' in cipherEncryptionObject) ||
      !('tag' in cipherEncryptionObject) ||
      // are the values defined?
      !cipherEncryptionObject.encrypted ||
      !cipherEncryptionObject.salt ||
      !cipherEncryptionObject.tag ||
      // are the types correct?
      typeof cipherEncryptionObject.encrypted !== 'string' ||
      typeof cipherEncryptionObject.salt !== 'string' ||
      typeof cipherEncryptionObject.tag !== 'string'
    ) {
      throw new Error('Invalid token');
    }

    return this.decipher(cipherEncryptionObject, key);
  }

  decipher(cipherObject: CipherEncryptionObject, key?: any): string {
    key = key || this.key;

    const decipher: DecipherGCM = createDecipheriv(
      this.config.cipherAlgorithm,
      key,
      cipherObject.salt
    );

    decipher.setAuthTag(Buffer.from(cipherObject.tag, this.config.tagEncoding));

    return (
      decipher.update(cipherObject.encrypted, this.config.encryptionEncoding) +
      decipher.final(this.config.textEncoding)
    );
  }
}

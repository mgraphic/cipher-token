import { createHash, randomBytes, scryptSync } from 'crypto';
import { RequireAtLeastOne } from './_utils';
import { CipherTokenConfig } from './config';
import { CipherKey, DEFAULT_CT_CONFIG } from './model';

export abstract class AbstractBaseClass {
  protected config: CipherTokenConfig;
  protected key?: CipherKey;

  constructor(newConfig?: CipherTokenConfig) {
    this.config = newConfig
      ? { ...newConfig, ...DEFAULT_CT_CONFIG }
      : DEFAULT_CT_CONFIG;
  }

  generateRandomKey(): CipherKey {
    this.key = randomBytes(this.config.keyLength);

    return this.key;
  }

  keyFromBuffer(buffer: Buffer): CipherKey {
    this.key = scryptSync(buffer, buffer, this.config.keyLength);

    return this.key;
  }

  keyFromString(secret: string): CipherKey {
    this.key = scryptSync(secret, secret, this.config.keyLength);

    return this.key;
  }

  async keyFromFile(fileName: string): Promise<CipherKey> {
    const rs = await require('fs').createReadStream(fileName);
    const hash = createHash(this.config.hashAlgorithm);

    return new Promise((resolve, reject) => {
      rs.on('error', reject);
      rs.on('data', (chunk: any) => hash.update(chunk));
      rs.on('end', () => {
        const final = hash.digest();
        this.key = scryptSync(final, final, this.config.keyLength);

        resolve(this.key);
      });
    });
  }

  async keyFrom(
    source: RequireAtLeastOne<{ buffer?: Buffer; file?: string; text?: string }>
  ): Promise<CipherKey> {
    const { buffer, file, text } = source;
    const hash = createHash(this.config.hashAlgorithm);

    if (buffer) {
      hash.update(buffer);
    }

    if (text) {
      hash.update(Buffer.from(text, 'utf8'));
    }

    if (file) {
      await new Promise(async (resolve, reject) => {
        const rs = await require('fs').createReadStream(file);
        rs.on('error', reject);
        rs.on('data', (chunk: any) => hash.update(chunk));
        rs.on('end', resolve);
      });
    }

    const final = hash.digest();
    this.key = scryptSync(final, final, this.config.keyLength);

    return this.key;
  }
}

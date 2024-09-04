import {
  generateRandomString,
  getCipherToken,
  getDecipherToken,
} from '../src/functions';

describe('functions', () => {
  it('should be defined', () => {
    expect(getCipherToken).toBeDefined();
    expect(getDecipherToken).toBeDefined();
  });

  it('should get cipher token', () => {
    const cipherToken = getCipherToken();
    expect(cipherToken).toBeDefined();
    expect(cipherToken).toHaveProperty('tokenize');
    expect(cipherToken).toHaveProperty('cipher');
    expect(cipherToken).toHaveProperty('keyFromString');
    expect(cipherToken).toHaveProperty('keyFromBuffer');
  });

  it('should get decipher token', () => {
    const decipherToken = getDecipherToken();
    expect(decipherToken).toBeDefined();
    expect(decipherToken).toHaveProperty('untokenize');
    expect(decipherToken).toHaveProperty('decipher');
  });

  it('should generate a 32 bit random key', () => {
    const key = generateRandomString();
    expect(key).toHaveLength(64);
  });

  it('should generate 8 bit random key', () => {
    const key = generateRandomString(8);
    expect(key).toHaveLength(16);
  });
});

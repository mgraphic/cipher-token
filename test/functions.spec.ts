import { getCipherToken, getDecipherToken } from '../src/functions';

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
    expect(cipherToken).toHaveProperty('generateRandomKey');
  });

  it('should get decipher token', () => {
    const decipherToken = getDecipherToken();
    expect(decipherToken).toBeDefined();
    expect(decipherToken).toHaveProperty('untokenize');
    expect(decipherToken).toHaveProperty('decipher');
  });
});

import { CipherTokenConfig } from '../src/config';

describe('CipherTokenConfig', () => {
  it('should be defined', () => {
    expect(CipherTokenConfig).toBeDefined();
  });

  it('should have default values', () => {
    const config = new CipherTokenConfig();
    expect(config).toBeDefined();
    expect(config.cipherAlgorithm).toEqual('aes-256-gcm');
    expect(config.hashAlgorithm).toEqual('sha256');
    expect(config.encryptionEncoding).toEqual('hex');
    expect(config.saltEncoding).toEqual('hex');
    expect(config.tagEncoding).toEqual('hex');
    expect(config.textEncoding).toEqual('utf8');
    expect(config.tokenEncoding).toEqual('base64');
    expect(config.keyLength).toEqual(32);
    expect(config.saltByteSize).toEqual(8);
  });
});

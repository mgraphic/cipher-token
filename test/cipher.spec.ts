import { CipherToken } from '../src/cipher';

describe('CipherToken', () => {
  let cipherToken: CipherToken;

  beforeEach(() => {
    cipherToken = new CipherToken();
    cipherToken.keyFromString('secret_string_key');
  });

  it('should be defined', () => {
    expect(cipherToken).toBeDefined();
  });

  it('should tokenize', () => {
    const cipherSpy = jest.spyOn(cipherToken, 'cipher');
    const token = cipherToken.tokenize('hello world');
    const parsedToken = JSON.parse(
      Buffer.from(token, 'base64').toString('utf8')
    );
    expect(token).toBeDefined();
    expect(token).toHaveLength(140);
    expect(parsedToken.encrypted).toHaveLength(22);
    expect(parsedToken.salt).toHaveLength(16);
    expect(parsedToken.tag).toHaveLength(32);
    expect(cipherSpy).toHaveBeenCalled();
  });

  it('should cipher', () => {
    const token = cipherToken.cipher('hello world');
    expect(token.encrypted).toBeDefined();
    expect(token.encrypted).toHaveLength(22);
    expect(token.salt).toBeDefined();
    expect(token.salt).toHaveLength(16);
    expect(token.tag).toBeDefined();
    expect(token.tag).toHaveLength(32);
  });
});

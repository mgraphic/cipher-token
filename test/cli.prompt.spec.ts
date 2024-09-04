const mockInquirerInput = jest.fn();
const mockInquirerPassword = jest.fn();
const mockInquirerSelect = jest.fn();

jest.mock('@inquirer/prompts', () => {
  const actualModule = jest.requireActual('@inquirer/prompts');
  return {
    ...actualModule,
    input: mockInquirerInput,
    password: mockInquirerPassword,
    select: mockInquirerSelect,
  };
});

import { runPrompt } from '../src/cli/prompt';

describe('@mgraphic/cipher-token CLI', () => {
  describe('prompt.ts', () => {
    describe('runPrompt()', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should generate a random 32 bit string', async () => {
        mockInquirerSelect.mockImplementation(async () => 'generate');

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({});

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{64}$/);
      });

      it('should generate a random 8 bit string', async () => {
        mockInquirerSelect.mockImplementation(async () => 'generate');

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({ byteSize: 8 });

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{16}$/);
      });

      it('should tokenize a plain text string with default settings', async () => {
        mockInquirerSelect.mockImplementation(async () => 'tokenize');
        mockInquirerPassword.mockImplementation(async () => 'secret key');
        mockInquirerInput.mockImplementation(
          async () => 'This is a deciphered text string'
        );

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({});

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(mockInquirerPassword).toHaveBeenCalledTimes(1);
        expect(mockInquirerInput).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[A-Za-z0-9+=/]{196}$/);
      });

      it('should decipher a token string with default settings', async () => {
        mockInquirerSelect.mockImplementation(async () => 'untokenize');
        mockInquirerPassword.mockImplementation(async () => 'secret key');
        mockInquirerInput.mockImplementation(
          async () =>
            'eyJlbmNyeXB0ZWQiOiI3MTdiNzY3MWQyZjU3YzAz' +
            'ZDIyYmNjZjYwZTVjMmFmMDMxN2MwMmY5OTY3YjBl' +
            'NzQyZGYxMDNlMDA0ODRiODlkIiwic2FsdCI6IjBi' +
            'MjYzNzUxNThkMzdlNTQiLCJ0YWciOiIwZTdlMDc1' +
            'NDNhZmI2MWY4ZmRkZDc3NTZiYjNjYTNlYyJ9'
        );

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({});

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(mockInquirerPassword).toHaveBeenCalledTimes(1);
        expect(mockInquirerInput).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toEqual(
          'This is a deciphered text string'
        );
      });

      it('should tokenize a plain text string with custom settings', async () => {
        mockInquirerSelect.mockImplementation(async () => 'tokenize');
        // mockInquirerPassword.mockImplementation(async () => 'secret key');
        mockInquirerInput.mockImplementation(
          async () => 'This is a deciphered text string'
        );

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({
          key: 'secret key',
          cipherAlgorithm: 'aes-128-gcm',
          hashAlgorithm: 'sha512',
          encryptionEncoding: 'base64',
          saltEncoding: 'base64',
          tagEncoding: 'base64',
          textEncoding: 'utf8',
          tokenEncoding: 'hex',
          keyLength: 16,
          saltByteSize: 16,
        });

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(mockInquirerPassword).toHaveBeenCalledTimes(0);
        expect(mockInquirerInput).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{254}$/);
      });

      it('should decipher a token string with custom settings', async () => {
        mockInquirerSelect.mockImplementation(async () => 'untokenize');
        mockInquirerInput.mockImplementation(
          async () =>
            '7b22656e63727970746564223a2241397345352b' +
            '4e2b5668436763365563414a4355674469664e2b' +
            '4f62464c54585433715638772b7a3836593d222c' +
            '2273616c74223a22317a365357497735616d5848' +
            '6e51455847662f6e61773d3d222c22746167223a' +
            '2257456541787955537944784e42414558673942' +
            '2f6e673d3d227d'
        );

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        await runPrompt({
          key: 'secret key',
          cipherAlgorithm: 'aes-128-gcm',
          hashAlgorithm: 'sha512',
          encryptionEncoding: 'base64',
          saltEncoding: 'base64',
          tagEncoding: 'base64',
          textEncoding: 'utf8',
          tokenEncoding: 'hex',
          keyLength: 16,
          saltByteSize: 16,
        });

        expect(mockInquirerSelect).toHaveBeenCalledTimes(1);
        expect(mockInquirerPassword).toHaveBeenCalledTimes(0);
        expect(mockInquirerInput).toHaveBeenCalledTimes(1);
        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toEqual(
          'This is a deciphered text string'
        );
      });
    });
  });
});

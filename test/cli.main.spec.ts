const mockCli = jest.fn();

jest.mock('cleye', () => {
  const actualModule = jest.requireActual('cleye');
  return {
    ...actualModule,
    cli: mockCli,
  };
});

import { main } from '../src/cli/main';
import * as prompt from '../src/cli/prompt';

describe('@mgraphic/cipher-token CLI', () => {
  describe('main.ts', () => {
    describe('main()', () => {
      afterEach(() => {
        jest.clearAllMocks();
      });

      it('should run prompt', () => {
        mockCli.mockReturnValue({ command: 'prompt' });

        const spy = jest
          .spyOn(prompt, 'runPrompt')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalled();
      });

      it('should generate a random 32 bit string', () => {
        mockCli.mockReturnValue({
          command: 'generate',
          flags: { byteSize: undefined },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{64}$/);
      });

      it('should generate a random 8 bit string', () => {
        mockCli.mockReturnValue({
          command: 'generate',
          flags: { byteSize: 8 },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{16}$/);
      });

      it('should tokenize a plain text string with default settings', () => {
        mockCli.mockReturnValue({
          command: 'tokenize',
          flags: { key: 'secret key' },
          _: { plainText: 'This is a deciphered text string' },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[A-Za-z0-9+=/]{196}$/);
      });

      it('should decipher a token string with default settings', () => {
        mockCli.mockReturnValue({
          command: 'untokenize',
          flags: { key: 'secret key' },
          _: {
            token:
              'eyJlbmNyeXB0ZWQiOiI3MTdiNzY3MWQyZjU3YzAz' +
              'ZDIyYmNjZjYwZTVjMmFmMDMxN2MwMmY5OTY3YjBl' +
              'NzQyZGYxMDNlMDA0ODRiODlkIiwic2FsdCI6IjBi' +
              'MjYzNzUxNThkMzdlNTQiLCJ0YWciOiIwZTdlMDc1' +
              'NDNhZmI2MWY4ZmRkZDc3NTZiYjNjYTNlYyJ9',
          },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toEqual(
          'This is a deciphered text string'
        );
      });

      it('should tokenize a plain text string with custom settings', () => {
        mockCli.mockReturnValue({
          command: 'tokenize',
          flags: {
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
          },
          _: { plainText: 'This is a deciphered text string' },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toMatch(/^[a-z0-9]{254}$/);
      });

      it('should decipher a token string with custom settings', () => {
        mockCli.mockReturnValue({
          command: 'untokenize',
          flags: {
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
          },
          _: {
            token:
              '7b22656e63727970746564223a2241397345352b' +
              '4e2b5668436763365563414a4355674469664e2b' +
              '4f62464c54585433715638772b7a3836593d222c' +
              '2273616c74223a22317a365357497735616d5848' +
              '6e51455847662f6e61773d3d222c22746167223a' +
              '2257456541787955537944784e42414558673942' +
              '2f6e673d3d227d',
          },
        });

        const spy = jest
          .spyOn(console, 'log')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy).toHaveBeenCalledWith(expect.any(String));
        expect(spy.mock.calls[0][0]).toEqual(
          'This is a deciphered text string'
        );
      });

      it('tokenize command should throw an error if no key is provided', () => {
        mockCli.mockReturnValue({
          command: 'tokenize',
          flags: { key: undefined },
          _: { plainText: '' },
        });
        const mockExit = jest
          .spyOn(process, 'exit')
          .mockReturnValueOnce(undefined as never);

        const spy = jest
          .spyOn(console, 'error')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy.mock.calls[0][0]).toEqual(
          'The required key was not provided, please pass in a key as a --key flag'
        );
      });

      it('untokenize command should throw an error if no key is provided', () => {
        mockCli.mockReturnValue({
          command: 'untokenize',
          flags: { key: undefined },
          _: { plainText: '' },
        });
        const mockExit = jest
          .spyOn(process, 'exit')
          .mockReturnValueOnce(undefined as never);

        const spy = jest
          .spyOn(console, 'error')
          .mockImplementationOnce(jest.fn());

        main();

        expect(spy.mock.calls[0][0]).toEqual(
          'The required key was not provided, please pass in a key as a --key flag'
        );
      });
    });
  });
});

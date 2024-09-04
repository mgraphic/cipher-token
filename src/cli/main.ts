import { cli, command } from 'cleye';
import { runPrompt } from './prompt';
import {
  cipherTokenConfigFlags,
  createCipherTokenConfigObject,
} from './config';
import { getCipherToken, getDecipherToken, generateRandomString } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getArgv(): any {
  const argv = cli({
    commands: [
      command({
        name: 'prompt',
        flags: { key: String, ...cipherTokenConfigFlags },
      }),

      command({
        name: 'tokenize',
        description: 'Tokenize plain text to a cipher token',
        parameters: ['<plain text>'],
        help: {
          usage:
            'tokenize --key=<secret key> [flags...] <plain text to tokenize>',
        },
        flags: {
          key: { type: String, description: 'Secret Key (required)' },
          ...cipherTokenConfigFlags,
        },
      }),

      command({
        name: 'untokenize',
        description: 'Untokenize a cipher token to plain text',
        parameters: ['<token>'],
        help: {
          usage: 'untokenize --key=<secret key> [flags...] <token to decipher>',
        },
        flags: {
          key: { type: String, description: 'Secret Key (required)' },
          ...cipherTokenConfigFlags,
        },
      }),

      command({
        name: 'generate',
        description: 'Generate a random string to be used as a secret key',
        flags: {
          byteSize: {
            type: Number,
            default: 32,
            description: 'Byte Size',
            alias: 'b',
          },
        },
      }),
    ],
  });

  return argv;
}

export function main(): void {
  const argv = getArgv();

  switch (argv.command) {
    case 'tokenize': {
      if (!argv.flags.key) {
        console.error(
          'The required key was not provided, please pass in a key as a --key flag'
        );
        return process.exit(1);
      }

      const tokenizer = getCipherToken(
        createCipherTokenConfigObject(argv.flags)
      );

      tokenizer.keyFromString(argv.flags.key as string);

      console.log(tokenizer.tokenize(argv._.plainText));
      break;
    }
    case 'untokenize': {
      if (!argv.flags.key) {
        console.error(
          'The required key was not provided, please pass in a key as a --key flag'
        );
        return process.exit(1);
      }

      const untokenizer = getDecipherToken(
        createCipherTokenConfigObject(argv.flags)
      );

      untokenizer.keyFromString(argv.flags.key as string);

      console.log(untokenizer.untokenize(argv._.token));
      break;
    }
    case 'generate':
      console.log(generateRandomString(argv.flags.byteSize));
      break;
    default:
      runPrompt(argv.flags);
      break;
  }
}

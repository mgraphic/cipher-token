import { input, password, select } from '@inquirer/prompts';
import { lt } from './node-check';
import { createCipherTokenConfigObject } from './config';
import { generateRandomString, getCipherToken, getDecipherToken } from '..';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function runPrompt(flags: any): Promise<void> {
  if (lt('18')) {
    /* istanbul ignore next */
    console.error(
      'Please use Node.js 18.x or higher to run this part of the cli.'
    );
    return process.exit(1);
  }

  const answer = await select({
    message: 'Select a task to run',
    choices: [
      {
        name: 'Tokenize a value',
        value: 'tokenize',
        description: 'Tokenize plain text to a cipher token',
      },
      {
        name: 'Untokenize a value',
        value: 'untokenize',
        description: 'Untokenize a cipher token to plain text',
      },
      {
        name: 'Generate a random string',
        value: 'generate',
        description: 'Generate a random string to be used as a secret key',
      },
    ],
  });

  if (answer === 'tokenize') {
    try {
      const tokenizer = getCipherToken(createCipherTokenConfigObject(flags));

      if (!flags.key) {
        const key = await password({
          message: 'Enter the key',
        });
        tokenizer.keyFromString(key);
      } else {
        tokenizer.keyFromString(flags.key);
      }

      const plainText = await input({
        message: 'Enter the plain text to tokenize',
        required: true,
      });

      console.log(tokenizer.tokenize(plainText));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      /* istanbul ignore next */
      console.error(e.message || e);
    }

    return;
  }

  if (answer === 'untokenize') {
    try {
      const untokenizer = getDecipherToken(
        createCipherTokenConfigObject(flags)
      );

      if (!flags.key) {
        const key = await password({
          message: 'Enter the key',
        });
        untokenizer.keyFromString(key);
      } else {
        untokenizer.keyFromString(flags.key);
      }

      const plainText = await input({
        message: 'Enter the token to decipher',
        required: true,
      });

      console.log(untokenizer.untokenize(plainText));

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (e: any) {
      /* istanbul ignore next */
      console.error(e.message || e);
    }

    return;
  }

  if (answer === 'generate') {
    console.log(generateRandomString(flags.byteSize));
    return;
  }
}

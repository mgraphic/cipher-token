import {
  generateRandomString,
  getCipherToken,
  getDecipherToken,
} from './src/functions';

const cformatReset = '\x1b[0m';
const cformatTitle = `\x1b[45m%s${cformatReset}`;
const cformatDescription = `\x1b[32m%s${cformatReset}`;
const cformatResult = `\x1b[36m%s\x1b[90m%s\x1b[33m%s${cformatReset}`;
const cformatComment = `\x1b[90m%s${cformatReset}`;

const e2e = async () => {
  console.log(cformatDescription, 'START E2E\n');

  // Key by string:
  await (async () => {
    console.log(
      cformatTitle,
      'Encryption & decryption of the string "Secret Text encrypted by a string key" by using a secret key from a string value:'
    );

    //   Encrypt:
    console.log(cformatComment, '## Encrypted Text');
    const cipherToken = getCipherToken();
    cipherToken.keyFromString('secret_string_key');
    const token = cipherToken.tokenize('Secret Text encrypted by a string key');
    console.log(cformatResult, 'Token', ': ', token);

    //   Decrypt:
    console.log(cformatComment, '## Decrypted Text');
    const decipherToken = getDecipherToken();
    decipherToken.keyFromString('secret_string_key');
    const decrypted = decipherToken.untokenize(token);
    console.log(cformatResult, 'Decrypted', ': ', decrypted);

    console.log('');
  })();

  // Key by file:
  await (async () => {
    console.log(
      cformatTitle,
      'Encryption & decryption of the string "Secret Text encrypted by a file key" by using a secret key from a file:'
    );

    //   Encrypt:
    console.log(cformatComment, '## Encrypted Text');
    const cipherToken = getCipherToken();
    await cipherToken.keyFromFile('package.json');
    const token = cipherToken.tokenize('Secret Text encrypted by a file key');
    console.log(cformatResult, 'Token', ': ', token);

    //   Decrypt:
    console.log(cformatComment, '## Decrypted Text');
    const decipherToken = getDecipherToken();
    await decipherToken.keyFromFile('package.json');
    const decrypted = decipherToken.untokenize(token);
    console.log(cformatResult, 'Decrypted', ': ', decrypted);

    console.log('');
  })();

  // Key by buffer:
  await (async () => {
    console.log(
      cformatTitle,
      'Encryption & decryption of the string "Secret Text encrypted by a buffer key" by using a secret key from a buffer:'
    );

    //   Encrypt:
    console.log(cformatComment, '## Encrypted Text');
    const cipherToken = getCipherToken();
    cipherToken.keyFromBuffer(Buffer.from('buffer_key'));
    const token = cipherToken.tokenize('Secret Text encrypted by a buffer key');
    console.log(cformatResult, 'Token', ': ', token);

    //   Decrypt:
    console.log(cformatComment, '## Decrypted Text');
    const decipherToken = getDecipherToken();
    decipherToken.keyFromBuffer(Buffer.from('buffer_key'));
    const decrypted = decipherToken.untokenize(token);
    console.log(cformatResult, 'Decrypted', ': ', decrypted);

    console.log('');
  })();

  // Key by random bytes:
  await (async () => {
    console.log(
      cformatTitle,
      'Encryption & decryption of the string "Secret Text encrypted by a random bytes key" by using a secret key from a random bytes:'
    );

    //   Encrypt:
    console.log(cformatComment, '## Encrypted Text');
    const key = generateRandomString();
    const cipherToken = getCipherToken();
    cipherToken.keyFromString(key);
    const token = cipherToken.tokenize(
      'Secret Text encrypted by a random bytes key'
    );
    console.log(cformatResult, 'Token', ': ', token);

    //   Decrypt:
    console.log(cformatComment, '## Decrypted Text');
    const decipherToken = getDecipherToken();
    decipherToken.keyFromString(key);
    const decrypted = decipherToken.untokenize(token);
    console.log(cformatResult, 'Decrypted', ': ', decrypted);

    console.log('');
  })();

  // Key by combo:
  await (async () => {
    console.log(
      cformatTitle,
      'Encryption & decryption of the string "Secret Text encrypted by a combo key" by using a secret key from a filem buffer, and string value:'
    );

    //   Encrypt:
    console.log(cformatComment, '## Encrypted Text');
    const cipherToken = getCipherToken();
    await cipherToken.keyFrom({
      buffer: Buffer.from('buffer_key'),
      text: 'secreat-key-string',
      file: 'package.json',
    });
    const token = cipherToken.tokenize('Secret Text encrypted by a combo key');
    console.log(cformatResult, 'Token', ': ', token);

    //   Decrypt:
    console.log(cformatComment, '## Decrypted Text');
    const decipherToken = getDecipherToken();
    await decipherToken.keyFrom({
      buffer: Buffer.from('buffer_key'),
      text: 'secreat-key-string',
      file: 'package.json',
    });
    const decrypted = decipherToken.untokenize(token);
    console.log(cformatResult, 'Decrypted', ': ', decrypted);

    console.log('');
  })();

  console.log(cformatDescription, 'END E2E');
};

e2e();

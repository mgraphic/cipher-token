import { DecipherToken } from '../src/decipher';

describe('DecipherToken', () => {
  let decipherToken: DecipherToken;

  beforeEach(() => {
    decipherToken = new DecipherToken();
    decipherToken.keyFromString('secret_string_key');
  });

  it('should be defined', () => {
    expect(decipherToken).toBeDefined();
  });

  it('should untokenize', () => {
    const token = decipherToken.untokenize(
      'eyJlbmNyeXB0ZWQiOiI4ZmE2YzJmZmYyZDI3NmMzZmVhOTk3ZTljZDUyMGIyNWY5MDY4MGI2NjhjYzliMzcxYWJjZmI2NGMwOTdhZTQ3N2I5NGM2NThhMyIsInNhbHQiOiI2YWEyNWViNTU1ZGE0YjliIiwidGFnIjoiZDJhNDc2MjVhY2EzMjBlZjk3YmZmNjc0YjMzMzVhNjAifQ=='
    );
    expect(token).toEqual('Secret Text encrypted by a string key');
  });

  it('should decipher', () => {
    const token = decipherToken.decipher({
      encrypted:
        '8fa6c2fff2d276c3fea997e9cd520b25f90680b668cc9b371abcfb64c097ae477b94c658a3',
      salt: '6aa25eb555da4b9b',
      tag: 'd2a47625aca320ef97bff674b3335a60',
    });
    expect(token).toEqual('Secret Text encrypted by a string key');
  });
});

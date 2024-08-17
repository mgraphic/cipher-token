import { AbstractBaseClass } from '../src/_base';
import * as crypto from 'crypto';

class ExtendedBaseClass extends AbstractBaseClass {}

jest.mock('crypto', () => {
  return {
    createHash: jest.fn(() => {
      return {
        update: jest.fn(),
        digest: jest.fn(),
      };
    }),
    randomBytes: jest.fn(() => '00112233445566778899aabbccddeeff'),
    scryptSync: jest.fn(() => '00112233445566778899aabbccddeeff'),
  };
});

describe('AbstractBaseClass', () => {
  let abstractBaseClass: ExtendedBaseClass;

  beforeEach(() => {
    abstractBaseClass = new ExtendedBaseClass();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should generate key from buffer', () => {
    const key = abstractBaseClass.keyFromBuffer(
      Buffer.from('00112233445566778899aabbccddeeff')
    );
    expect(key).toBeDefined();
    expect(key).toHaveLength(32);
    expect(key).toEqual('00112233445566778899aabbccddeeff');
    expect(crypto.randomBytes).not.toHaveBeenCalled();
  });

  it('should generate key from string', () => {
    const key = abstractBaseClass.keyFromString(
      '00112233445566778899aabbccddeeff'
    );
    expect(key).toBeDefined();
    expect(key).toHaveLength(32);
    expect(key).toEqual('00112233445566778899aabbccddeeff');
    expect(crypto.randomBytes).not.toHaveBeenCalled();
  });

  it('should generate key from file', async () => {
    const key = await abstractBaseClass.keyFromFile('test/test.txt');
    expect(key).toBeDefined();
    expect(key).toHaveLength(32);
    expect(key).toEqual('00112233445566778899aabbccddeeff');
    expect(crypto.randomBytes).not.toHaveBeenCalled();
  });

  it('should generate key from object', async () => {
    const key = await abstractBaseClass.keyFrom({
      buffer: Buffer.from('00112233445566778899aabbccddeeff'),
      text: '00112233445566778899aabbccddeeff',
      file: 'test/test.txt',
    });
    expect(key).toBeDefined();
    expect(key).toHaveLength(32);
    expect(key).toEqual('00112233445566778899aabbccddeeff');
    expect(crypto.randomBytes).not.toHaveBeenCalled();
  });
});

import { BinaryLike, CipherKey as CryptoCipherKey } from 'crypto';
import { CipherTokenConfig } from './config';

type TypedArray =
  | Float32Array
  | Float64Array
  | Int16Array
  | Int32Array
  | Int8Array
  | Uint16Array
  | Uint32Array
  | Uint8Array
  | Uint8ClampedArray;

export type CipherDataType =
  | string
  | BinaryLike
  | Buffer
  | DataView
  | TypedArray;

export type CipherEncryptionObject = {
  encrypted: string;
  salt: string;
  tag: string;
};

export type CipherKey = CryptoCipherKey;

export const DEFAULT_CT_CONFIG: CipherTokenConfig = new CipherTokenConfig();

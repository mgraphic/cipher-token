import { CipherToken } from './cipher';
import { CipherTokenConfig } from './config';
import { DecipherToken } from './decipher';

export function getCipherToken(newConfig?: CipherTokenConfig): CipherToken {
  return new CipherToken(newConfig);
}

export function getDecipherToken(newConfig?: CipherTokenConfig): DecipherToken {
  return new DecipherToken(newConfig);
}

import { CipherToken } from './cipher';
import { CipherTokenConfig } from './config';
import { DecipherToken } from './decipher';

/**
 * Get cipher token class
 * @param {CipherTokenConfig} [newConfig]
 * @returns {CipherToken}
 */
export function getCipherToken(newConfig?: CipherTokenConfig): CipherToken {
  return new CipherToken(newConfig);
}

/**
 * Get decipher token class
 * @param {CipherTokenConfig} [newConfig]
 * @returns {DecipherToken}
 */
export function getDecipherToken(newConfig?: CipherTokenConfig): DecipherToken {
  return new DecipherToken(newConfig);
}

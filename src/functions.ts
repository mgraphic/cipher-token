import { randomBytes } from 'crypto';
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

/**
 * Generate random string
 * @param {number} [byteSize=32]
 * @returns {string}
 */
export function generateRandomString(byteSize = 32): string {
  return randomBytes(byteSize).toString('hex');
}

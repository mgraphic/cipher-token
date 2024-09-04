import { CipherTokenConfig, DEFAULT_CT_CONFIG } from '..';

export const cipherTokenConfigFlags: Record<string, unknown> = {
  cipherAlgorithm: {
    type: String,
    default: DEFAULT_CT_CONFIG.cipherAlgorithm,
    description: 'Cipher Algorithm',
    alias: 'a',
  },
  hashAlgorithm: {
    type: String,
    default: DEFAULT_CT_CONFIG.hashAlgorithm,
    description: 'Hash Algorithm',
    alias: 'y',
  },
  encryptionEncoding: {
    type: String,
    default: DEFAULT_CT_CONFIG.encryptionEncoding,
    description: 'Encryption Encoding',
    alias: 'e',
  },
  saltEncoding: {
    type: String,
    default: DEFAULT_CT_CONFIG.saltEncoding,
    description: 'Salt Encoding',
    alias: 's',
  },
  tagEncoding: {
    type: String,
    default: DEFAULT_CT_CONFIG.tagEncoding,
    description: 'Tag Encoding',
    alias: 't',
  },
  textEncoding: {
    type: String,
    default: DEFAULT_CT_CONFIG.textEncoding,
    description: 'Text Encoding',
    alias: 'x',
  },
  tokenEncoding: {
    type: String,
    default: DEFAULT_CT_CONFIG.tokenEncoding,
    description: 'Token Encoding',
    alias: 'z',
  },
  keyLength: {
    type: Number,
    default: DEFAULT_CT_CONFIG.keyLength,
    description: 'Key Length',
    alias: 'k',
  },
  saltByteSize: {
    type: Number,
    default: DEFAULT_CT_CONFIG.saltByteSize,
    description: 'Salt Byte Size',
    alias: 'b',
  },
};

export const configCipherTokenKeys = Object.keys(cipherTokenConfigFlags);

export function createCipherTokenConfigObject(
  flags: Record<string, unknown>
): CipherTokenConfig {
  const config = {} as Record<string, unknown>;
  configCipherTokenKeys.forEach((key) => {
    if (flags[key]) {
      config[key] = flags[key];
    }
  });

  return config as unknown as CipherTokenConfig;
}

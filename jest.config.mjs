/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  rootDir: './',
  testEnvironment: 'node',
  transform: { '^.+.tsx?$': ['ts-jest', {}] },
  coverageDirectory: './coverage',
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  coverageReporters: ['json', 'html', 'text', 'text-summary'],
  testMatch: ['<rootDir>/test/**/*.spec.ts'],
};

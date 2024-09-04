import { defineConfig } from 'tsup';

export default defineConfig({
  format: ['cjs', 'esm'],
  entry: ['./src/index.ts', './src/cli/cli.ts'],
  dts: true,
  shims: true,
  skipNodeModulesBundle: true,
  sourcemap: true,
  clean: true,
});

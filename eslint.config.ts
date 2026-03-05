import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    files: ['**/*.ts'],
    rules: {
      semi: 'off',
      'prefer-const': 'error',
    },
  },
])

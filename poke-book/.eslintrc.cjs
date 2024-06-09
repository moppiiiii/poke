const TypeScript = require('@typescript-eslint/eslint-plugin');
const globals = require('globals');
const path = require('path');

const typescriptESLintRules = {
  ...TypeScript.configs['strict-type-checked'].rules,
  ...TypeScript.configs['stylistic-type-checked'].rules,
  '@typescript-eslint/ban-types': 'warn',
  '@typescript-eslint/ban-ts-comment': 'warn',
  '@typescript-eslint/no-explicit-any': [
    'warn',
    {
      fixToUnknown: false,
    },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_|^Param|^Props',
      caughtErrorsIgnorePattern: '^_',
      destructuredArrayIgnorePattern: '^_',
    },
  ],
  '@typescript-eslint/consistent-type-imports': [
    'warn',
    {
      fixStyle: 'separate-type-imports',
      prefer: 'type-imports',
    },
  ],
  '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
  'no-console': 'warn',
  'no-undef': 'off',
  'unused-imports/no-unused-vars': 'off',
};

/** @type {import("@types/eslint").Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: { project: [path.resolve(__dirname, './tsconfig.base.json')] },
    },
  },
  extends: ['eslint:recommended', 'eslint-config-prettier'],
  overrides: [
    {
      files: ['*'],
      plugins: ['eslint-plugin-unused-imports'],
      rules: {
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
          'warn',
          {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
          },
        ],
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['*'],
      plugins: ['simple-import-sort'],
      rules: {
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
      },
    },
    {
      files: ['*'],
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        ...globals.worker,
      },
    },
    {
      files: ['*.ts'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.base.json')],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        ...typescriptESLintRules,
        'require-await': 'off',
        'no-floating-promises': 'off',
        'no-unsafe-return': 'off',
      },
    },
    {
      files: ['*.tsx'],
      plugins: ['@typescript-eslint'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: [path.resolve(__dirname, './tsconfig.base.json')],
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      rules: {
        ...typescriptESLintRules,
        '@typescript-eslint/require-await': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
      },
    },
  ],
  ignorePatterns: ['**/*.md', '**/dist/*'],
};

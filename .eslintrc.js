module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  env: {
    node: true,
    jest: true,
  },
  root: true,
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'import',
    'nestjs',
    'security',
    'clean-code',
    'sonarjs',
    'canonical',
    'promise',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:nestjs/recommended',
    'plugin:security/recommended',
    'plugin:sonarjs/recommended',
    'plugin:canonical/recommended',
    'plugin:n/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: [
          'builtin',
          'external',
          'internal',
          ['parent', 'sibling'],
          'index',
        ],
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    'n/no-missing-import': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'nestjs/parse-int-pipe': 'error',
    'nestjs/deprecated-api-modules': 'error',
    'nestjs/use-dependency-injection': 'error',
    'nestjs/use-validation-pipe': 'error',
    'clean-code/feature-envy': 'error',
    'n/exports-style': ['error', 'module.exports'],
    'canonical/import-specifier-newline': 'off',
  },
  settings: {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
    'import/resolver': {
      typescript: { alwaysTryTypes: true, directory: './tsconfig.json' },
    },
  },
  ignorePatterns: [
    'dist/*',
    '.next/*',
    'node_modules/*',
    '.eslintrc.js',
    '*.json',
  ],
};

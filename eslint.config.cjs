const baseConfig = require('./eslint/base.config.cjs');
const reactConfig = require('./eslint/react.config.cjs');

/** @type {import('typescript-eslint').Config} */
module.exports = [
  {
    ignores: [
      '.react-router/**',
      '**/*.spec.ts',
      '**/*.spec.tsx',
      'react-router.config.ts',
      'eslint/**'
    ],
  },
  ...baseConfig,
  ...reactConfig,
];
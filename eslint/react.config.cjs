const reactPlugin = require('eslint-plugin-react');
const hooksPlugin = require('eslint-plugin-react-hooks');
const unicornPlugin = require('eslint-plugin-unicorn');

/** @type {Awaited<import('typescript-eslint').Config>} */
module.exports = [
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': hooksPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...reactPlugin.configs['jsx-runtime'].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...unicornPlugin.configs.recommended.rules,
      'react/prop-types': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
    languageOptions: {
      globals: {
        React: 'writable',
      },
    },
  },
];

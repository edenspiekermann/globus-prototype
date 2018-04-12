module.exports = {
  parser: "babel-eslint",
  // we are using the Airbnb config, because it has a lot of additional rules for liniting React components and a11y best practices
  extends: ['airbnb', 'prettier', 'prettier/react'], // extending recommended config and config derived from eslint-config-prettier,
  plugins: ['prettier'], // activating esling-plugin-prettier (--fix stuff)
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      defaultParams: true
    }
  },
  globals: {
    // we need this to use System.import() for code splitting
    'System': false,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        bracketSpacing: true,
      }
    ],
    // we don't error when files from devDependencies are imported, since we need them in the .stories.js files,
    // and we want these files to be linted, but not to be exported with the repository
    'import/no-extraneous-dependencies': 'off',
    // This rule struggles with flow and class properties
    'react/sort-comp': 'off',
    // ignore linebreak style. the CRLF / LF endings wont matter
    // if a windows user correctly converts CRLF to LF upon commits otherwise
    // there are errors every line.
    'linebreak-style': 'off',
    // adding this for compatibility reasons
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: [ 'invalidHref' ]
      }
    ],
    'react/react-in-jsx-scope': 'off',
  },
};

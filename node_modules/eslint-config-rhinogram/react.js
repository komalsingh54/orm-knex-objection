module.exports = {
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": "airbnb",
  "globals": {
    "$": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "arrowFunctions": true,
      "binaryLiterals": true,
      "blockBindings": true,
      "classes": true,
      "defaultParams": true,
      "destructuring": true,
      "forOf": true,
      "generators": true,
      "modules": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralShorthandProperties": true,
      "octalLiterals": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "spread": true,
      "superInFunctions": true,
      "templateStrings": true,
      "unicodeCodePointEscapes": true,
      "globalReturn": true,
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "plugins": [
    "react",
    "babel",
    "jsx-a11y"
  ],
  "rules": {
    "arrow-body-style": 1,
    "arrow-parens": 1,
    "class-methods-use-this": 0,
    "import/extensions": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "import/prefer-default-export": 1,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-static-element-interactions": 0,
    "key-spacing": [2, { "mode": "minimum" }],
    "max-len": [0],
    "no-confusing-arrow": ["error", {"allowParens": true}],
    "no-multi-assign" : 0,
    "no-multi-spaces": [2, { "exceptions": { "ImportDeclaration": true, "VariableDeclarator": true } }],
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-return-assign": ["error", "except-parens"],
    "no-script-url": 0,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "no-use-before-define": ["error", { "functions": false }],
    "object-curly-newline": 0,
    "react/forbid-prop-types": 0,
    "react/jsx-indent": 1,
    "react/no-find-dom-node": 0,
    "react/no-unused-prop-types": 1,
    "react/prefer-stateless-function": 1,
    "react/require-default-props": 0,
    "space-before-function-paren": ["error", "never"],
    "spaced-comment": 0
  }
};

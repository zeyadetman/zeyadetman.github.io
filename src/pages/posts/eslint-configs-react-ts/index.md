---
title: Setup eslint configs into your React App (Support TS)
date: "2020-12-28"
author: zeyadetman
categories: programming, javascript, frontend, reactjs, typescript
comments: true
layout: post
---

# List of installs

- @typescript-eslint/eslint-plugin
- @typescript-eslint/parser
- eslint
- eslint-config-airbnb-base
- eslint-config-prettier
- eslint-plugin-import
- eslint-plugin-prettier
- prettier

# Commands

1. `npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb-base eslint-config-prettier eslint-plugin-import eslint-plugin-prettier prettier`.

2. `node_modules/eslint/bin/eslint.js {path} --fix`

# Files

1. `.eslintrc.js`
```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'max-len': [0, 160, 2, { ignoreUrls: true }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
```

2. `.eslintrc.yaml`
```yaml
env:  
  node: true  
extends:  
  - plugin:@typescript-eslint/recommended  
  - prettier/@typescript-eslint  
  - plugin:prettier/recommended  
parser: '@typescript-eslint/parser'  
parserOptions:  
  ecmaVersion: 9  
  project: ./tsconfig.json  
plugins:  
 - '@typescript-eslint'
```

3. `.prettierrc.yml`
```yml
tabWidth: 2  
singleQuote: true
printWidth: 160
```

# Questions May help

1. [Disable eslint for all files in directory and subdirectories](https://stackoverflow.com/q/43194302/5721245)
2. [Nested .eslintrc files in Visual Studio Code](https://stackoverflow.com/questions/45668816/nested-eslintrc-files-in-visual-studio-code)

# Problems you may face

1. While running eslint fix on the project i got this error
> AssertionError [ERR_ASSERTION]: Node must be provided when reporting error if location is not provided

to fix it i did a loop on the files in the directory and fix each of them to get the code snippet that cause the previous problem
```
for file in *; do                                            
    if [ -f "$file" ]; then
        ../node_modules/eslint/bin/eslint.js "$file" --fix
    fi
done
```

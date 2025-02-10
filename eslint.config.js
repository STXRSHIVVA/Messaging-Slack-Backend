import pluginJs from '@eslint/js'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: {
        ...globals.browser, 
        ...globals.node 
      }
    },
    plugins: {
      'simple-import-sort': simpleImportSort
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
    }
  },
  {
    ...pluginJs.configs.recommended
  }
]
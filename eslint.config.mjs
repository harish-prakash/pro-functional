import js from '@eslint/js'
import { dirname } from 'path'
import tslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)

const __dirname = dirname(__filename)

const tsFiles = ['**/*.{ts,tsx}']

const tsBaseConfig = tslint.configs.recommended.map((config) => ({
    ...config,
    files: tsFiles,
}))

/**
 * @type {import('eslint').Linter.Config[]}
 */
const tslintConfig = [
    ...tsBaseConfig,
    {
        files: tsFiles,
        languageOptions: {
            parserOptions: { projectService: true, tsconfigRootDir: __dirname },
        },
    },
]

/**
 * @type {import('eslint').Linter.Config}
 */
const ignoreLocations = {
    ignores: [
        '**/.next',
        'next-env.d.ts',
        'postcss.config.mjs',
        'tailwind.config.ts',
    ],
}

/**
 * @type{import('eslint').Linter.Config}
 */
const customRules = {
    rules: {
        'arrow-body-style': 'error',
        'no-console': 'error',
        'padding-line-between-statements': [
            'error',
            { blankLine: 'always', prev: '*', next: 'return' },
        ],
    },
}

const eslintConfig = tslint.config(
    js.configs.recommended,
    tslintConfig,
    ignoreLocations,
    customRules
)

export default eslintConfig

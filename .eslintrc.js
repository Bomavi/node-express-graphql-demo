module.exports = {
	env: {
		es6: true,
		node: true,
	},
	parserOptions: {
        sourceType: 'module',
        ecmaVersion: 8,
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
	},
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	globals: {
		SERVICE_NAME: false,
		SERVICE_TOKEN: false,
	},
	rules: {
		// eslint
		'no-console': ['warn', { allow: ['warn', 'error'] }],
		'lines-around-comment': ['error', { beforeBlockComment: true }],
		'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
		'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
		'no-nested-ternary': 'error',
		'no-trailing-spaces': 'error',
		'prefer-object-spread': 'error',
		'space-before-blocks': 'error',
		'spaced-comment': ['error', 'always'],
		'no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],
		'require-atomic-updates': 0,
		// typescript
		'@typescript-eslint/no-non-null-assertion': 0,
		'@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_', 'ignoreRestSiblings': true }],
		// prettier
		'prettier/prettier': [
			'error',
			{
				useTabs: true,
				tabWidth: 2,
				semi: true,
				singleQuote: true,
				printWidth: 90,
			},
		],
	},
};

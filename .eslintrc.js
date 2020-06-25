module.exports = {
	root: true,
	extends: ['@react-native-community', 'airbnb', 'prettier'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error',
		indent: 'off',
		'no-use-before-define': 'off',
		'react/prop-types': 'off',
		'no-console': 'off',
		'func-names': 'off',
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': 'off',
		'react/destructuring-assignment': 'off',
		'react/jsx-curly-newline': 'off',
		'class-methods-use-this': 'off',
		'import/extensions': 'off',
		'react-native/no-inline-styles': 'off',
		'no-nested-ternary': 'off',
		'import/no-unresolved': 'off',
		'import/no-extraneous-dependencies': 'off',
		'no-plusplus': 'off',
		'no-unused-expressions': 'off',
		'global-require': 'off',
		'no-param-reassign': 'off',
		'no-useless-escape': 'off',
		'no-restricted-syntax': 'off',
		'no-unused-vars': 'off',
		'no-new': 'off',
		camelcase: 'off',
		'no-underscore-dangle': 'off',
		'guard-for-in': 'off',
		'no-await-in-loop': 'off',
		'no-shadow': 'off',
		'no-async-promise-executor': 'off',
		'no-dupe-class-members': 'off',
		'no-continue': 'off',
	},
};

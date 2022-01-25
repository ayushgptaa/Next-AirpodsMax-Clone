module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"no-console": "warn",
		"react/prop-types": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-props-no-spreading": 0,
		"react/react-in-jsx-scope": 0,
		"import/no-unresolved": 0,
		"react/function-component-definition": [
			1,
			{
				namedComponents: "arrow-function",
			},
		],
		"arrow-body-style": 0,
	},
};

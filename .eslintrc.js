module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint',
        'prettier/react',
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        'prettier/prettier': ['error'],
        'react/jsx-one-expression-per-line': 0,
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
        'import/extensions': 'off'
    }
};

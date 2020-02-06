module.exports = {
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: "eslint:recommended",
    env: {
        browser: true,
        es6: true
    },
    globals: {
        process: "readonly"
    },
    parserOptions: {
        ecmaVersion: 6,
        sourceType: "module"
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    overrides: [
        {
            files: ["**/*.ts"],
            rules: {
                // Things that don't play nicely with TS:
                "require-yield": "off",
                "no-unused-vars": "off",
                "no-extra-semi": "off"
            }
        }
    ]
}
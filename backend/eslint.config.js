export default {
  languageOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    indent: "off",
    "new-cap": "off",
    "object-curly-spacing": ["error", "always"],
    "array-bracket-spacing": "off",
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        comments: 150,
      },
    ],
    "no-console": "off",
    quotes: ["error", "double"],
    "operator-linebreak": [
      "warn",
      "before",
      {
        overrides: {
          ":": "before",
          "=": "after",
        },
      },
    ],
    "no-trailing-spaces": "off",
    "linebreak-style": "off",
    "sort-imports": ["error", {
      "ignoreCase": true,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
    }]
  },
  ignores: ["node_modules/**"],
};

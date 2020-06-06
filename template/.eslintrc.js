module.exports = {
  parser: "@typescript-eslint/parser",
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  env: { es6: true, node: true },
  plugins: ["@typescript-eslint"],
  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-explicit-any": "off",
  },
};

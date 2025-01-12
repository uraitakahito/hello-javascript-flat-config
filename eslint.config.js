import js from "@eslint/js";

export default [
  js.configs.all,
  {
    files: ["**/*.js"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  },
];

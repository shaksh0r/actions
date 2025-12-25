import js from "@eslint/js";
import globals from "globals";

//added some comment

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.node,
      }
    },
  },
  {
    files: ["test/**/*.js"],
    languageOptions: {
      globals: globals.jest,
    }
  }
];

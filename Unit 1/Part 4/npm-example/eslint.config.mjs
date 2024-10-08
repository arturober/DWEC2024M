import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  {
    rules: {
      indent: ["error", 2],
      "no-unused-vars": "warn",
      quotes: ["error", "double"],
    },
  },
];

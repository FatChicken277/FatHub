import eslintPluginAstro from "eslint-plugin-astro";

export default [
  // add more generic rule sets here, such as:
  // js.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      // override/add rules settings here, such as:
      "astro/no-set-html-directive": "error", // Disallow setting the HTML directive
      "no-unused-vars": "warn", // Warning on unused variables
      "no-trailing-spaces": "error", // Error on trailing spaces
      "no-console": "warn", // Warn on console statements (can be adjusted as needed)
    },
  },
];

// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  printWidth: 140,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: true,
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: [".*", "*.md", "*.mdx", "*.toml", "*.yml"],
      options: {
        useTabs: false,
      },
    },
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};

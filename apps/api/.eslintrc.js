export default {
  extends: ["@repo/eslint-config/base"],
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: __dirname,
  },
  env: {
    node: true,
    jest: true,
  },
  rules: {
    "no-console": "off",
  },
};

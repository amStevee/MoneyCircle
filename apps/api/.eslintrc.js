import path from "node:path";
import { fileURLToPath } from "node:url";
import { config } from "@repo/eslint-config/base"; // Ensure this matches your shared package export name

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default [
  // 1. Spread your shared flat config
  ...config,

  // 2. Add your API workspace overrides
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    rules: {
      "no-console": "off",
    },
  },

  // 3. Ignore built assets & dependencies
  {
    ignores: ["dist/**", "node_modules/**"],
  },
];

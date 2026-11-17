// @ts-check -- linted via allowJs: a flat config is only ever parsed, never
// type-checked, so the typed rules here are informational.
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "dist/**",
      "dist-portable/**",
      "dist.bak/**",
      "node_modules/**",
      "playwright-report/**",
      "test-results/**",
      "local/**",
      ".worktrees/**",
      "artifacts/**",
      "output/**",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
  },
  {
    // eslint's own flat config: parsed, never type-checked. The js.configs
    // presets are untyped from our perspective, so any assignment from them
    // is fine here and only here.
    files: ["eslint.config.js"],
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
    },
  },
  {
    // Optional, explicitly-typed third-party browser APIs may need this
    // while the typed-lint surface is still young; never blanket-disable
    // type-aware rules for src/.
    files: ["src/main.ts"],
    rules: {
      "@typescript-eslint/no-unsafe-element-access": "off",
    },
  },
);

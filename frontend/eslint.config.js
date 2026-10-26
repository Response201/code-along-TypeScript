
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";

const requireUseStateType = {
  meta: {
    type: "problem",
    schema: [],
    messages: {
      missingType:
        "Ange en explicit typ, exempelvis useState<ProductModel[]>.",
    },
  },
  "@typescript-eslint/typedef": [
  "error",
  {
    variableDeclaration: true
  }
],

  create(context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "useState" &&
          !node.typeArguments?.params?.length &&
          !node.typeParameters?.params?.length
        ) {
          context.report({
            node,
            messageId: "missingType",
          });
        }
      },
    };
  },
};

export default defineConfig([
  globalIgnores(["dist"]),

  {
    files: ["**/*.{js,jsx,ts,tsx}"],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    languageOptions: {
      globals: globals.browser,
    },

    plugins: {
      local: {
        rules: {
          "require-use-state-type": requireUseStateType,
        },
      },
    },

    rules: {
      "local/require-use-state-type": "error",
    },
  },
]);

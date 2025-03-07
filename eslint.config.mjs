import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  // Bu yerda kerakli qoida o'zgartirishlarini qo'shishingiz mumkin
  {
    rules: {
      "react/no-unescaped-entities": "off", // Bu qoida o'chirilgan
      "no-empty-object-type": "off", // Bu qoida o'chirilgan
    }
  }
];

export default eslintConfig;

import type { Config } from "tailwindcss";
import { EloTailwindBaseConfig } from "./styles/tailwind.base.config";

const config: Config = {
  mode: 'jit',
  purge: [
    './public/**/*.html',
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./tokens/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  ...EloTailwindBaseConfig,
  plugins: [],
};
export default config;

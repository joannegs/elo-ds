import type { Config } from "tailwindcss";
import { EloTailwindBaseConfig } from "./styles/tailwind.base.config";

const config: Config = {
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

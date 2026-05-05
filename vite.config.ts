import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import Sonda from "sonda/vite";
import { defineConfig } from "vite";

export default defineConfig({
	build: { sourcemap: true },
	plugins: [
		react(),
		babel({
			presets: [reactCompilerPreset()],
		}),
		tailwindcss(),
		Sonda(),
	],
});

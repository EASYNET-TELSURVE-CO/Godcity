// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: "Godcity",
				short_name: "Godcity",
				description:
					"Church Management System - Manage your church efficiently with Godcity.",
				start_url: "/",
				display: "standalone",
				theme_color: "#4f46e5", // Use the primary color from Tailwind config
				background_color: "#f3f4f6", // Light background color from Tailwind config
				icons: [
					{
						src: "GC.png", // Path to your logo image
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "GC.png", // Path to your logo image
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
});

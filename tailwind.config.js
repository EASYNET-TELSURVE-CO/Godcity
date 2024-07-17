// tailwind.config.js

module.exports = {
	darkMode: "class", // or 'media' if you prefer
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: "#ffd700", // Gold
					dark: "#c0a700", // Darker gold
				},
				secondary: {
					DEFAULT: "#3b82f6", // Blue 500
					dark: "#1e40af", // Blue 700
				},
				background: {
					DEFAULT: "#f3f4f6", // Gray 100
					dark: "#1f2937", // Gray 800
				},
				text: {
					DEFAULT: "#1f2937", // Gray 800
					dark: "#f3f4f6", // Gray 100
				},
				// Add other colors as needed
			},
		},
	},
	plugins: [],
};

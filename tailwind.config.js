// tailwind.config.js
module.exports = {
    darkMode: 'class', // or 'media' if you prefer
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            light: '#4f46e5', // Indigo 600
            dark: '#3b82f6', // Blue 500
          },
          secondary: {
            light: '#ec4899', // Pink 500
            dark: '#f43f5e', // Rose 500
          },
          background: {
            light: '#f3f4f6', // Gray 100
            dark: '#1f2937', // Gray 800
          },
          text: {
            light: '#1f2937', // Gray 800
            dark: '#f3f4f6', // Gray 100
          },
          // Add other colors as needed
        },
      },
    },
    plugins: [],
  }
  
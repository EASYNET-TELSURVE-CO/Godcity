import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
	isDarkMode: false,
	toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	// Check the initial theme from localStorage or system preference
	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		const prefersDarkScheme = window.matchMedia(
			"(prefers-color-scheme: dark)"
		).matches;

		if (storedTheme === "dark" || (!storedTheme && prefersDarkScheme)) {
			setIsDarkMode(true);
		}
	}, []);

	// Update theme color in meta tag
	useEffect(() => {
		const themeColorMetaTag = document.getElementById("theme-color");
		if (isDarkMode) {
			document.documentElement.classList.add("dark");
			themeColorMetaTag.setAttribute("content", "#0d0d20"); // Dark mode color
		} else {
			document.documentElement.classList.remove("dark");
			themeColorMetaTag.setAttribute("content", "#F2F5FA"); // Light mode color
		}
	}, [isDarkMode]);

	// Toggle theme and update localStorage
	const toggleTheme = () => {
		setIsDarkMode((prevMode) => {
			const newMode = !prevMode;
			localStorage.setItem("theme", newMode ? "dark" : "light");
			return newMode;
		});
	};

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

// Custom hook to use the ThemeContext
export const useTheme = () => useContext(ThemeContext);

import React from "react";
import { BsLightbulbFill, BsLightbulbOffFill } from "react-icons/bs";
import { useTheme } from "../../contexts/ThemeContext";

const DarkModeToggle = () => {
	const { isDarkMode, toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-800"
		>
			{isDarkMode ? (
				<BsLightbulbFill className="text-primary" />
			) : (
				<BsLightbulbOffFill className="text-contrast/50" />
			)}
		</button>
	);
};

export default DarkModeToggle;

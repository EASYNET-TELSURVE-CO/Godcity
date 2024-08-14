// src/components/layout/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		if (window.scrollY > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", toggleVisibility);
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	return (
		<div className="fixed bottom-8 right-6">
			{isVisible && (
				<button
					onClick={scrollToTop}
					className="p-4 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
				>
					<FaArrowUp size={16} />
				</button>
			)}
		</div>
	);
};

export default ScrollToTop;

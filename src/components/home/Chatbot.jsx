// src/components/home/Chatbot.jsx

import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import "aos/dist/aos.css";

const Chatbot = ({ sectionRefs }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [chatHistory, setChatHistory] = useState([]);
	const [pendingAction, setPendingAction] = useState(null);
	const messageInputRef = useRef(null);

	const toggleChatbot = () => setIsOpen(!isOpen);

	const handleUserInput = (input) => {
		const trimmedInput = input.trim().toLowerCase();
		let response;

		const affirmationKeywords = ["yes", "yeah", "yep", "sure", "okay", "ok"];
		const negationKeywords = ["no", "nope", "nah"];

		if (pendingAction) {
			if (affirmationKeywords.some((word) => trimmedInput.includes(word))) {
				pendingAction();
				setPendingAction(null);
				return;
			} else if (negationKeywords.some((word) => trimmedInput.includes(word))) {
				response = "Action canceled.";
				setPendingAction(null);
			} else {
				response = "Please respond with a clear yes or no.";
				setChatHistory((prev) => [
					...prev,
					{ type: "user", message: input },
					{ type: "bot", message: response },
				]);
				return;
			}
		} else {
			switch (true) {
				case trimmedInput.includes("features"):
					response = "Do you want to navigate to the Features section?";
					setPendingAction(() => () => {
						sectionRefs.features.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Features section." },
						]);
					});
					break;
				case trimmedInput.includes("cta"):
					response = "Do you want to navigate to the Call to Action section?";
					setPendingAction(() => () => {
						sectionRefs.cta.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Call to Action section." },
						]);
					});
					break;
				case trimmedInput.includes("sermon"):
					response = "Do you want to navigate to the Sermon section?";
					setPendingAction(() => () => {
						sectionRefs.sermon.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Sermon section." },
						]);
					});
					break;
				case trimmedInput.includes("banner"):
					response = "Do you want to navigate to the Banner section?";
					setPendingAction(() => () => {
						sectionRefs.banner.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Banner section." },
						]);
					});
					break;
				case trimmedInput.includes("about us"):
					response = "Do you want to navigate to the About Us section?";
					setPendingAction(() => () => {
						sectionRefs.aboutUs.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to About Us section." },
						]);
					});
					break;
				case trimmedInput.includes("testimonials"):
					response = "Do you want to navigate to the Testimonials section?";
					setPendingAction(() => () => {
						sectionRefs.testimonials.current.scrollIntoView({
							behavior: "smooth",
						});
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Testimonials section." },
						]);
					});
					break;
				case trimmedInput.includes("events"):
					response = "Do you want to navigate to the Events section?";
					setPendingAction(() => () => {
						sectionRefs.events.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Events section." },
						]);
					});
					break;
				case trimmedInput.includes("payment"):
					response = "Do you want to navigate to the Payment section?";
					setPendingAction(() => () => {
						sectionRefs.payment.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Payment section." },
						]);
					});
					break;
				case trimmedInput.includes("contact"):
					response = "Do you want to navigate to the Contact section?";
					setPendingAction(() => () => {
						sectionRefs.contact.current.scrollIntoView({ behavior: "smooth" });
						setChatHistory((prev) => [
							...prev,
							{ type: "bot", message: "Navigating to Contact section." },
						]);
					});
					break;
				default:
					response = "Sorry, I didn't understand that. Please try again.";
			}
		}

		setChatHistory((prev) => [
			...prev,
			{ type: "user", message: input },
			{ type: "bot", message: response },
		]);
	};

	useEffect(() => {
		const darkModeMediaQuery = window.matchMedia(
			"(prefers-color-scheme: dark)"
		);
		const handleDarkModeChange = (e) => {
			document.documentElement.classList.toggle("dark", e.matches);
		};

		handleDarkModeChange(darkModeMediaQuery);
		darkModeMediaQuery.addEventListener("change", handleDarkModeChange);

		return () =>
			darkModeMediaQuery.removeEventListener("change", handleDarkModeChange);
	}, []);

	return (
		<div
			className={`fixed bottom-[30%] right-4 shadow-2xl rounded-3xl p-8 transition-all text-gray-700 dark:text-gray-300
        ${
					isOpen
						? "w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white dark:bg-gray-800"
						: "w-16 h-16 bg-primary flex items-center justify-center"
				}  z-[9999]`}
			style={{
				animation: isOpen ? "none" : "bounce 2s infinite",
			}}
		>
			<div className="flex items-center justify-between">
				<h2
					className={`text-lg text-black dark:text-white ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<SmartToyIcon className="text-primary" />
				</h2>
				<IconButton onClick={toggleChatbot} size="large">
					{isOpen ? (
						<CloseIcon className="text-primary" />
					) : (
						<ChatIcon className="text-white" />
					)}
				</IconButton>
			</div>
			{isOpen && (
				<div className="mt-4 flex flex-col h-80">
					<div className="flex-grow overflow-y-auto mb-2 scrollbar-hidden">
						{chatHistory.map((entry, index) => (
							<div
								key={index}
								className={`mb-4 p-2 rounded-lg font-light ${
									entry.type === "bot"
										? "bg-green-100 text-left dark:bg-green-900 text-green-600 dark:text-green-300 rounded-l-lg rounded-r-2xl"
										: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-r-lg rounded-l-2xl text-right"
								}`}
							>
								{entry.message}
							</div>
						))}
					</div>
					<input
						type="text"
						placeholder="Type here..."
						className="w-full p-4 font-light border rounded-2xl dark:bg-gray-700 dark:text-gray-300"
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleUserInput(e.target.value);
								e.target.value = "";
							}
						}}
						ref={messageInputRef}
					/>
				</div>
			)}
		</div>
	);
};

export default Chatbot;

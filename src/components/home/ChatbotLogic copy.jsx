import React, { useState, useEffect } from "react";
import ChatInterface from "./ChatInterface";
import Fuse from "fuse.js";
import "aos/dist/aos.css";

// Define synonyms and NLP options
const synonyms = {
    events: ["events", "event", "even"],
    features: ["features", "functionality", "functions"],
    hero: ["hero", "welcome", "intro", "header"],
    cta: ["cta", "call to action", "action"],
    sermon: ["sermon", "preaching", "talk"],
    banner: ["banner", "advertisement", "promo"],
    aboutUs: ["about us", "about", "company"],
    testimonials: ["testimonials", "reviews", "feedback"],
    payment: ["payment", "pay", "checkout"],
    contact: ["contact", "connect", "support", "help"],
};

// Flatten synonyms for Fuse.js
const flattenedSynonyms = Object.entries(synonyms).reduce((acc, [key, values]) => {
    values.forEach(value => acc.push({ key, value }));
    return acc;
}, []);

const fuse = new Fuse(flattenedSynonyms, { keys: ['value'], threshold: 0.3 });

const ChatbotLogic = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [chatHistory, setChatHistory] = useState([]);
    const [pendingAction, setPendingAction] = useState(null);

    const toggleChatbot = () => setIsOpen(!isOpen);

    const handleUserInput = (input) => {
        const trimmedInput = input.trim().toLowerCase();
        let response;

        const affirmationKeywords = ["yes", "yeah", "yep", "sure", "okay", "ok"];
        const negationKeywords = ["no", "nope", "nah"];
        const greetings = ["hi", "hello", "hey", "greetings"];

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
            if (greetings.some((word) => trimmedInput.includes(word))) {
                response = "Hello! How can I assist you today? You can ask me to navigate to different sections or provide contact details.";
            } else if (trimmedInput.includes("contact")) {
                response = `You can contact us via email at support@godcity.com or call us at +1234567890. Do you want to navigate to the Contact section?`;
                setPendingAction(() => () => {
                    sectionRefs.current.contact.current.scrollIntoView({
                        behavior: "smooth",
                    });
                    setChatHistory((prev) => [
                        ...prev,
                        { type: "bot", message: "Navigating to Contact section." },
                    ]);
                });
            } else if (trimmedInput.includes("link") || trimmedInput.includes("website")) {
                response = 'Here are some useful links: <a href="https://www.example.com">Our Website</a>, <a href="https://www.example.com/help">Help Center</a>.';
            } else {
                const result = fuse.search(trimmedInput);
                const topMatch = result[0]?.item?.key;

                switch (topMatch) {
                    case "features":
                        response = "Do you want to navigate to the Features section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.features.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Features section." },
                            ]);
                        });
                        break;
                    case "hero":
                        response = "Do you want to navigate to the Hero section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.hero.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Hero section." },
                            ]);
                        });
                        break;
                    case "cta":
                        response = "Do you want to navigate to the Call to Action section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.cta.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Call to Action section." },
                            ]);
                        });
                        break;
                    case "sermon":
                        response = "Do you want to navigate to the Sermon section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.sermon.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Sermon section." },
                            ]);
                        });
                        break;
                    case "banner":
                        response = "Do you want to navigate to the Banner section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.banner.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Banner section." },
                            ]);
                        });
                        break;
                    case "aboutUs":
                        response = "Do you want to navigate to the About Us section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.aboutUs.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to About Us section." },
                            ]);
                        });
                        break;
                    case "testimonials":
                        response = "Do you want to navigate to the Testimonials section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.testimonials.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Testimonials section." },
                            ]);
                        });
                        break;
                    case "events":
                        response = "Do you want to navigate to the Events section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.events.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Events section." },
                            ]);
                        });
                        break;
                    case "payment":
                        response = "Do you want to navigate to the Payment section?";
                        setPendingAction(() => () => {
                            sectionRefs.current.payment.current.scrollIntoView({
                                behavior: "smooth",
                            });
                            setChatHistory((prev) => [
                                ...prev,
                                { type: "bot", message: "Navigating to Payment section." },
                            ]);
                        });
                        break;
                    default:
                        response = "Sorry, I didn't understand that. Please try again.";
                }
            }
        }

        setChatHistory((prev) => [
            ...prev,
            { type: "user", message: input },
            { type: "bot", message: response },
        ]);
    };

    return (
        <ChatInterface
            chatHistory={chatHistory}
            handleUserInput={handleUserInput}
            toggleChatbot={toggleChatbot}
            isOpen={isOpen}
        />
    );
};

export default ChatbotLogic;

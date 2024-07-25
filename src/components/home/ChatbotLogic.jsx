// src/components/home/ChatbotLogic.jsx

import React, { useState, useEffect } from "react";
import ChatInterface from "./ChatInterface";
import "aos/dist/aos.css";

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
        console.log("Executing pending action...");
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
        response =
          "Hello! How can I assist you today? You can ask me to navigate to different sections or provide contact details.";
      } else if (trimmedInput.includes("contact")) {
        response = `You can contact us via email at support@godcity.com or call us at +1234567890. Do you want to navigate to the Contact section?`;
        setPendingAction(() => () => {
          console.log("Navigating to Contact section...");
          sectionRefs.current.contact.current.scrollIntoView({ behavior: "smooth" });
          setChatHistory((prev) => [
            ...prev,
            { type: "bot", message: "Navigating to Contact section." },
          ]);
        });
      } else if (
        trimmedInput.includes("link") ||
        trimmedInput.includes("website")
      ) {
        response =
          'Here are some useful links: <a href="https://www.example.com">Our Website</a>, <a href="https://www.example.com/help">Help Center</a>.';
      } else {
        switch (true) {
          case trimmedInput.includes("features"):
            response = "Do you want to navigate to the Features section?";
            setPendingAction(() => () => {
              console.log("Navigating to Features section...");
              sectionRefs.current.features.current.scrollIntoView({
                behavior: "smooth",
              });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Features section." },
              ]);
            });
            break;
          case trimmedInput.includes("hero"):
            response = "Do you want to navigate to the Hero section?";
            setPendingAction(() => () => {
              console.log("Navigating to Hero section...");
              sectionRefs.current.hero.current.scrollIntoView({ behavior: "smooth" });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Hero section." },
              ]);
            });
            break;
          case trimmedInput.includes("cta"):
            response = "Do you want to navigate to the Call to Action section?";
            setPendingAction(() => () => {
              console.log("Navigating to Call to Action section...");
              sectionRefs.current.cta.current.scrollIntoView({
                behavior: "smooth",
              });
              setChatHistory((prev) => [
                ...prev,
                {
                  type: "bot",
                  message: "Navigating to Call to Action section.",
                },
              ]);
            });
            break;
          case trimmedInput.includes("sermon"):
            response = "Do you want to navigate to the Sermon section?";
            setPendingAction(() => () => {
              console.log("Navigating to Sermon section...");
              sectionRefs.current.sermon.current.scrollIntoView({ behavior: "smooth" });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Sermon section." },
              ]);
            });
            break;
          case trimmedInput.includes("banner"):
            response = "Do you want to navigate to the Banner section?";
            setPendingAction(() => () => {
              console.log("Navigating to Banner section...");
              sectionRefs.current.banner.current.scrollIntoView({ behavior: "smooth" });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Banner section." },
              ]);
            });
            break;
          case trimmedInput.includes("about us"):
            response = "Do you want to navigate to the About Us section?";
            setPendingAction(() => () => {
              console.log("Navigating to About Us section...");
              sectionRefs.current.aboutUs.current.scrollIntoView({
                behavior: "smooth",
              });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to About Us section." },
              ]);
            });
            break;
          case trimmedInput.includes("testimonials"):
            response = "Do you want to navigate to the Testimonials section?";
            setPendingAction(() => () => {
              console.log("Navigating to Testimonials section...");
              sectionRefs.current.testimonials.current.scrollIntoView({
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
              console.log("Navigating to Events section...");
              sectionRefs.current.events.current.scrollIntoView({ behavior: "smooth" });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Events section." },
              ]);
            });
            break;
          case trimmedInput.includes("payment"):
            response = "Do you want to navigate to the Payment section?";
            setPendingAction(() => () => {
              console.log("Navigating to Payment section...");
              sectionRefs.current.payment.current.scrollIntoView({
                behavior: "smooth",
              });
              setChatHistory((prev) => [
                ...prev,
                { type: "bot", message: "Navigating to Payment section." },
              ]);
            });
            break;
          case trimmedInput.includes("contact"):
            response = "Do you want to navigate to the Contact section?";
            setPendingAction(() => () => {
              console.log("Navigating to Contact section...");
              sectionRefs.current.contact.current.scrollIntoView({
                behavior: "smooth",
              });
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
    <ChatInterface
      chatHistory={chatHistory}
      handleUserInput={handleUserInput}
      toggleChatbot={toggleChatbot}
      isOpen={isOpen}
    />
  );
};

export default ChatbotLogic;
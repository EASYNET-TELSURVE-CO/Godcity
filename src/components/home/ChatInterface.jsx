import React, { useState, useRef, useEffect } from "react";
import { IconButton } from "@mui/material";
import ChatIcon from "@mui/icons-material/Chat";
import CloseIcon from "@mui/icons-material/Close";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const ChatInterface = ({ chatHistory, handleUserInput, toggleChatbot, isOpen }) => {
  const messageInputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const dummyDivRef = useRef(null);
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  const handleScroll = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      const isAtBottom =
        chatContainer.scrollHeight - chatContainer.scrollTop === chatContainer.clientHeight;
      setIsUserScrolling(!isAtBottom);
    }
  };

  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.addEventListener("scroll", handleScroll);
      return () => chatContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (isOpen && dummyDivRef.current && !isUserScrolling) {
      //dummyDivRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isOpen, isUserScrolling]);

  return (
    <div
      className={`fixed bottom-[30%] right-4 shadow-2xl rounded-3xl p-8 transition-all text-gray-700 dark:text-gray-300
        ${
          isOpen
            ? "w-[360px] sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white dark:bg-gray-800"
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
          <div
            ref={chatContainerRef}
            className="flex-grow overflow-y-auto mb-2 scrollbar-hidden"
          >
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
            <div ref={dummyDivRef} />
          </div>
          <input
            type="text"
            placeholder="Type here..."
            className="w-full p-4 cursor-auto font-light border rounded-2xl dark:bg-gray-700 dark:text-gray-300"
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

export default ChatInterface;
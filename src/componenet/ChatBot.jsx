import React, { useState, useEffect, useRef } from "react";
import { askGemini } from "../utils/gemini";
import ReactMarkdown from "react-markdown";

const ChatBot = () => {
    const [userInput, setUserInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    // Auto-scroll to the latest message
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async () => {
        if (!userInput.trim()) return;

        const newMessages = [...messages, { text: userInput, sender: "You" }];
        setMessages(newMessages);
        setUserInput("");
        setIsTyping(true);

        try {
            const aiReply = await askGemini(userInput);
            setMessages([...newMessages, { text: aiReply, sender: "AI" }]);
        } catch (error) {
            setMessages([...newMessages, { text: "Error: Failed to get AI response.", sender: "AI" }]);
            console.log(error);
        } finally {
            setIsTyping(false);
        }
    };

    return (
        <div className="flex flex-col h-[90vh] w-full bg-gray-900 text-white shadow-lg rounded-lg p-4">
            {/* Chat Header */}
            <div className="text-center text-lg font-semibold mb-4">🤖 AI Chatbot</div>

            {/* Chat Messages */}
            <div className="flex-grow overflow-y-auto space-y-4 p-2">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={`flex ${msg.sender === "You" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`p-3 max-w-[75%] rounded-lg ${msg.sender === "You"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-700 text-white"
                                }`}
                            style={{ textAlign: "left" }} // Aligns text to the left
                        >
                            <strong className="block mb-1">{msg.sender}</strong>
                            <ReactMarkdown>{msg.text}</ReactMarkdown>
                        </div>
                    </div>
                ))}

                {isTyping && (
                    <div className="flex justify-start">
                        <div className="bg-gray-700 p-3 rounded-lg max-w-[75%]">
                            <strong className="block mb-1">AI</strong>
                            <span className="animate-pulse">Typing...</span>
                        </div>
                    </div>
                )}

                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="flex items-center mt-4">
                <input
                    type="text"
                    className="flex-grow p-3 rounded-lg bg-gray-800 text-white border border-gray-600 outline-none"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button
                    className="ml-3 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                    onClick={handleSendMessage}
                >
                    Send
                </button>
            </div>
        </div>
    );
};

export default ChatBot;

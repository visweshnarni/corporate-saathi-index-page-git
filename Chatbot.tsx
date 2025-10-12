import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            // Initial welcome message from bot when chat opens
            if (messages.length === 0) {
                setTimeout(() => {
                    setMessages([{
                        id: 1,
                        text: "Hello! Welcome to CorporateSaathi. How can I help you today?",
                        sender: 'bot'
                    }]);
                }, 500);
            }
        }
    }, [isOpen]);

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const toggleChat = () => {
        setIsOpen(prev => !prev);
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;

        const newUserMessage = {
            id: messages.length + 1,
            text: inputValue,
            sender: 'user'
        };
        setMessages(prev => [...prev, newUserMessage]);
        setInputValue('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: messages.length + 2,
                text: "Thanks for your message! Our team will get back to you shortly. For immediate assistance, please call us at +91 022 6962 2654.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1200);
    };

    return (
        <div className="fixed bottom-5 left-5 z-50">
            {/* Chat Window */}
            <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
                <div className="w-80 sm:w-96 h-[500px] bg-white dark:bg-brand-light rounded-xl shadow-2xl flex flex-col border border-slate-200 dark:border-slate-700 overflow-hidden">
                    {/* Header */}
                    <div className="bg-brand-purple text-white p-4 flex justify-between items-center">
                        <div>
                            <h3 className="font-bold text-lg">CorporateSaathi Assistant</h3>
                            <p className="text-xs text-brand-purple-light">Typically replies instantly</p>
                        </div>
                        <button onClick={toggleChat} className="p-1 rounded-full hover:bg-white/20 transition-colors" aria-label="Close chat">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map(msg => (
                            <div key={msg.id} className={`flex items-end gap-2 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                {msg.sender === 'bot' && (
                                     <div className="w-8 h-8 rounded-full bg-brand-purple flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                                     </div>
                                )}
                                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                                    msg.sender === 'user'
                                    ? 'bg-brand-purple text-white rounded-br-lg'
                                    : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 rounded-bl-lg'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                         <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-slate-200 dark:border-slate-700">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 bg-slate-100 dark:bg-brand-dark border border-slate-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple transition"
                            />
                            <button type="submit" className="bg-brand-purple text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-brand-purple-light transition-colors" aria-label="Send message">
                                <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* FAB Button */}
            <button
                onClick={toggleChat}
                className="bg-brand-purple text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center hover:bg-brand-purple-light transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-brand-purple/50"
                aria-label="Open chat"
            >
                 <svg className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                 <svg className={`w-8 h-8 absolute transition-transform duration-300 ${isOpen ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>
    );
};

export default Chatbot;

import { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMsg]);

    const msgToSend = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/chatbot/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msgToSend }),
      });

      const data = await res.json();
      const botMsg = { text: data.reply, sender: "bot" };

      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { text: "Server error. Try again.", sender: "bot" },
      ]);
    }

    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 
                   text-white rounded-full shadow-lg hover:shadow-2xl 
                   flex items-center justify-center text-3xl transition-all active:scale-95"
      >
        💬
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="w-80 h-[450px] mt-4 rounded-2xl shadow-2xl backdrop-blur-xl 
                        border border-white/20 bg-white/80 flex flex-col overflow-hidden animate-fadeIn">

          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 
                          text-white p-4 text-center text-lg font-semibold shadow-md">
            AryaCare Assistant
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`px-4 py-2 rounded-xl text-sm max-w-[75%] shadow ${
                  msg.sender === "user"
                    ? "bg-indigo-600 text-white ml-auto rounded-br-none"
                    : "bg-white border border-gray-200 text-gray-800 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {/* Typing Loader */}
            {loading && (
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-300"></span>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 rounded-xl border border-gray-300 
                         focus:ring-2 focus:ring-indigo-500 outline-none text-sm"
            />

            <button
              onClick={sendMessage}
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 
                         rounded-xl shadow-md active:scale-95 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

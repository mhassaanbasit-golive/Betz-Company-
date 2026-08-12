import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, X } from "lucide-react";
import { ChatMessage } from "../types";

export default function AskAIWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      sender: "bot",
      text: "Welcome to Betz Company. I am your dedicated assistant. How can I assist you with our land development, entitlements, or brokerage services today?"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of chat
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userText }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
    } catch (error) {
      console.error("Chat Error:", error);
      // Hardcoded fallback protocol:
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "My portal is currently updating. Please call 469-682-2212, and we will assist you immediately."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* The Monogram Pill Widget */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-[20px] right-[20px] z-40 flex items-center bg-white border border-[#5D6F50] rounded-[50px] shadow-[0_0_20px_rgba(93,111,80,0.2)] hover:shadow-[0_0_25px_rgba(93,111,80,0.35)] transition-all duration-300 hover:scale-[1.03] cursor-pointer pl-3 pr-4 h-[44px] md:h-[50px] w-full max-w-[160px] md:max-w-[260px] overflow-hidden"
        id="ai-monogram-pill"
        style={{ boxSizing: "border-box" }}
      >
        <div className="flex items-center w-full gap-2">
          {/* Stacked B/C Monogram with Gold Vertical Line */}
          <div className="flex items-center gap-2 min-w-[32px]" id="pill-monogram">
            <div className="w-[2px] h-6 bg-[#5D6F50]" />
            <div className="flex flex-col text-[10px] leading-tight font-serif text-black font-semibold text-center uppercase tracking-tighter">
              <span>B</span>
              <span>C</span>
            </div>
          </div>

          {/* Thin Vertical Divider */}
          <div className="w-[1px] h-5 bg-neutral-200" />

          {/* Text: Ask Betz Company AI */}
          <span className="font-sans text-[11px] md:text-xs font-semibold text-[#000000] tracking-wider uppercase text-left whitespace-nowrap overflow-hidden text-ellipsis flex-1">
            <span className="hidden md:inline">Ask Betz Company AI</span>
            <span className="inline md:hidden">Ask Betz AI</span>
          </span>
        </div>
      </button>

      {/* Expanded Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-end justify-end p-4 md:p-6 pointer-events-none">
            {/* Backdrop for click away */}
            <div
              className="fixed inset-0 bg-black/10 backdrop-blur-[1px] pointer-events-auto"
              onClick={() => setIsOpen(false)}
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white w-full max-w-sm h-[480px] rounded-[16px] shadow-2xl flex flex-col overflow-hidden border border-black/5 z-10 pointer-events-auto"
              id="ai-chat-window"
            >
              {/* Header: Absolute Black Background */}
              <div className="bg-[#000000] text-white p-4 flex justify-between items-center" id="chat-header">
                {/* Header Content Left */}
                <div className="flex flex-col text-left" id="chat-header-info">
                  <span className="font-serif text-xs tracking-widest text-white leading-tight">
                    BETZ COMPANY
                  </span>
                  <div className="w-12 h-[2px] bg-[#5D6F50] my-1" />
                  <span className="font-sans text-[10px] tracking-widest text-[#5D6F50] font-semibold">
                    DEDICATED
                  </span>
                </div>

                {/* Header Content Right - Close Button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#5D6F50] transition-colors p-1.5 rounded-full cursor-pointer"
                  id="chat-close-btn"
                  aria-label="Close Chat"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Chat Messages Log */}
              <div className="flex-1 overflow-y-auto p-4 bg-neutral-50/50 space-y-4" id="chat-messages-container">
                {messages.map((msg, index) => {
                  const isBot = msg.sender === "bot";
                  return (
                    <div
                      key={index}
                      className={`flex ${isBot ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm font-sans leading-relaxed ${
                          isBot
                            ? "bg-white border border-neutral-100 text-black shadow-sm"
                            : "bg-[#000000] text-white shadow-sm"
                        }`}
                        id={`chat-msg-${index}`}
                      >
                        <p className="whitespace-pre-line">{msg.text}</p>
                      </div>
                    </div>
                  );
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-neutral-100 rounded-2xl px-4 py-3 shadow-sm flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D6F50] animate-bounce [animation-delay:-0.3s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D6F50] animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#5D6F50] animate-bounce" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Input Form at Bottom */}
              <form
                onSubmit={handleSend}
                className="p-3 border-t border-neutral-100 bg-white flex items-center gap-2"
                id="chat-input-form"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about properties, zoning..."
                  className="flex-1 bg-neutral-50 border border-neutral-200 focus:border-[#5D6F50] rounded-xl px-3 py-2 text-sm text-black font-sans focus:outline-none transition-colors"
                  id="chat-input-field"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="bg-[#000000] hover:bg-[#5D6F50] hover:text-black text-white p-2.5 rounded-xl transition-all duration-300 disabled:opacity-30 disabled:hover:bg-[#000000] disabled:hover:text-white cursor-pointer"
                  id="chat-send-btn"
                  aria-label="Send Message"
                >
                  <Send size={15} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

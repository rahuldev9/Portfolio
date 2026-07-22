"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  X,
  Send,
  Bot,
  User,
  Loader2,
  Sparkles,
  Trash2,
  ChevronDown,
  ArrowUp,
  Mic,
  Plus,
  ArrowRight,
  Menu,
} from "lucide-react";
import ReactMarkdown from "react-markdown";
import AIAgentTooltip from "./AIAgentTooltip";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const SUGGESTIONS = [
  "What is your tech stack?",
  "Tell me about your projects",
  "Are you available for hire?",
];

export default function PortfolioChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input when opened
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isLoading, isOpen]);

  const handleClearChat = () => {
    setMessages([]);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    const assistantMsgId = (Date.now() + 1).toString();
    setMessages((prev) => [
      ...prev,
      { id: assistantMsgId, role: "assistant", content: "" },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error("Failed to fetch response");
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        accumulatedText += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId
              ? { ...msg, content: accumulatedText }
              : msg,
          ),
        );
      }
    } catch (err) {
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === assistantMsgId
            ? {
                ...msg,
                content:
                  "I ran into an issue connecting to my server. Please try again in a moment!",
              }
            : msg,
        ),
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <div
      className={`w-full font-sans ${isOpen ? "absolute inset-0 z-100" : ""}`}
    >
      {/* Trigger Button */}
      {!isOpen && (
        <div>
          <AIAgentTooltip onClick={() => setIsOpen(true)} />
        </div>
      )}

      {/* Main Chat Dialog */}
      {isOpen && (
        <div className="w-full h-[580px] max-h-[85vh] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl text-slate-900 dark:text-slate-100 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-700/60 flex flex-col overflow-hidden animate-chat-slide-up mt-20">
          {/* Header */}
          <div className="px-5 py-4 bg-slate-100/90 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700/50 flex items-center justify-between backdrop-blur-md shrink-0">
            {/* Left side header elements (Menu / Info) */}
            <div className="flex items-center gap-3">
              <div>
                <h3 className="font-semibold text-base text-slate-900 dark:text-slate-100 leading-tight">
                  Robin
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Portfolio Assistant
                </p>
              </div>
            </div>

            {/* Right side header actions */}
            <div className="flex items-center gap-2">
              {messages.length > 0 && (
                <button
                  onClick={handleClearChat}
                  title="New Chat / Clear history"
                  className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full transition-colors shadow-sm"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 bg-slate-200/50 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700/80 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent flex flex-col">
            {/* Empty State / Welcome Screen matching the provided layout */}
            {messages.length <= 1 && (
              <div className="my-auto flex flex-col items-center justify-center text-center px-2 py-6">
                {/* Large Centered Icon */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-4">
                  <Sparkles className="w-8 h-8 text-white fill-white/20" />
                </div>

                <span className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                  Hello, there!
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                  How can I help?
                </h2>

                {/* Suggestion Pills stacked as seen in the image */}
                <div className="flex flex-col items-center gap-2.5 w-full max-w-sm">
                  {SUGGESTIONS.map((suggestion, idx) => (
                    <button
                      key={idx}
                      onClick={() => sendMessage(suggestion)}
                      className="w-auto flex items-center justify-center gap-2 text-xs font-medium bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 hover:border-blue-500/50 rounded-full px-5 py-2.5 transition-all text-center group"
                    >
                      <span>{suggestion}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message List */}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-3 ${
                  m.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {m.role === "assistant" && (
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] rounded-2xl px-4 py-3 leading-relaxed shadow-sm ${
                    m.role === "user"
                      ? "bg-blue-600 text-white rounded-tr-xs"
                      : "bg-slate-100 dark:bg-slate-800/90 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 rounded-tl-xs prose dark:prose-invert max-w-none prose-p:my-0 prose-pre:my-1 prose-pre:bg-slate-200 dark:prose-pre:bg-slate-900"
                  }`}
                >
                  {m.role === "assistant" ? (
                    m.content ? (
                      <ReactMarkdown>{m.content}</ReactMarkdown>
                    ) : (
                      <div className="flex items-center gap-1.5 py-1 px-0.5">
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce"></span>
                      </div>
                    )
                  ) : (
                    m.content
                  )}
                </div>

                {m.role === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Form matching image bottom bar design */}
          <div className="p-3 bg-slate-100/80 dark:bg-slate-800/40 border-t border-slate-200 dark:border-slate-800 shrink-0">
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-slate-950/80 border border-slate-300 dark:border-slate-700/80 rounded-full px-3 py-1.5 flex items-center gap-2 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500 transition-all"
            >
              {/* <button
                type="button"
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-full"
                aria-label="Add attachment"
              >
                <Plus className="w-4 h-4" />
              </button> */}

              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 placeholder-slate-500 focus:outline-none pl-4"
              />

              {/* <button
                type="button"
                className="p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors rounded-full"
                aria-label="Voice input"
              >
                <Mic className="w-4 h-4" />
              </button> */}

              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white p-2 rounded-full transition-all shadow-md shadow-blue-600/20 shrink-0"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

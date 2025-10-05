import { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import hummingbirdIcon from "@/assets/hummingbird-ai.png";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface ChatAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatAssistant = ({ isOpen, onClose }: ChatAssistantProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your AI security assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      role: "user",
      content: input,
    };

    setMessages([...messages, newMessage]);
    setInput("");

    // Simulate AI response (will be replaced with actual AI later)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm currently in demo mode. AI integration coming soon!",
        },
      ]);
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl h-[600px] m-4 rounded-3xl border border-border/50 bg-card shadow-2xl animate-fade-in-scale flex flex-col overflow-hidden">
        {/* Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-border/50 bg-gradient-primary">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-white/20 backdrop-blur-sm">
              <img src={hummingbirdIcon} alt="AI" className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">AI Security Assistant</h2>
              <p className="text-sm text-white/80">Powered by Hummingbird AI</p>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20 rounded-xl"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex gap-3 animate-fade-in ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-primary text-white shadow-glow-primary"
                      : "bg-muted text-foreground"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
                {message.role === "user" && (
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <span className="text-sm font-semibold">You</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-6 border-t border-border/50 bg-card/50 backdrop-blur-sm">
          <div className="flex gap-3">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask me anything about your security..."
              className="flex-1 rounded-xl border-border/50 bg-background focus:ring-2 focus:ring-primary"
            />
            <Button
              onClick={handleSend}
              className="rounded-xl bg-gradient-primary hover:opacity-90 shadow-glow-primary"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Press Enter to send • AI integration coming soon
          </p>
        </div>
      </div>
    </div>
  );
};

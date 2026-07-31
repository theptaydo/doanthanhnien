"use client";

import { Bot, MessageCircle, SendHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";

type Message = {
  role: "bot" | "user";
  content: string;
};

function getBotReply(input: string): string {
  const text = input.toLowerCase();

  if (text.includes("liên hệ") || text.includes("contact")) {
    return "Bạn có thể liên hệ qua email doanthanhnien@theptaydo.vn hoặc số 0292 3 888 999. Mình cũng có mục Liên hệ ngay trên trang chủ.";
  }

  if (text.includes("hoạt động") || text.includes("bài viết")) {
    return "Bạn bấm menu Hoạt động để xem toàn bộ bài viết, hoặc vào từng thẻ Khoảnh khắc hoạt động để xem chi tiết theo từng slug.";
  }

  if (text.includes("cán bộ") || text.includes("ưu tú")) {
    return "Bạn vào trang Cán bộ công tác để xem danh sách đầy đủ gương mặt ưu tú cùng vai trò, đơn vị và thành tích.";
  }

  if (text.includes("xin chào") || text.includes("hello") || text.includes("chào")) {
    return "Xin chào. Mình là trợ lý thông tin nhanh của Đoàn Thanh Niên Thép Tây Đô. Bạn cần tìm mục nào mình hỗ trợ ngay.";
  }

  return "Mình đang hỗ trợ phản hồi cơ bản. Bạn có thể hỏi về: liên hệ, hoạt động, bài viết, cán bộ công tác.";
}

export function BasicChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Xin chào. Mình là chatbot hỗ trợ nhanh. Bạn có thể hỏi về hoạt động, cán bộ công tác hoặc thông tin liên hệ.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  const sendMessage = () => {
    const value = input.trim();
    if (!value) {
      return;
    }

    const userMessage: Message = { role: "user", content: value };
    const botMessage: Message = { role: "bot", content: getBotReply(value) };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      {open ? (
        <div className="w-[min(92vw,360px)] rounded-lg border-2 border-primary bg-white">
          <header className="flex items-center justify-between bg-primary px-4 py-3 text-white">
            <h3 className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              <Bot className="h-4 w-4" strokeWidth={2.5} />
              AI Chatbot
            </h3>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-white/10 transition-all duration-200 hover:scale-105 hover:bg-white hover:text-primary"
              aria-label="Đóng chatbot"
            >
              <X className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </header>

          <div className="max-h-72 space-y-3 overflow-y-auto bg-muted p-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={[
                  "rounded-md px-3 py-2 text-sm",
                  message.role === "bot"
                    ? "bg-white text-gray-800"
                    : "bg-primary text-white",
                ].join(" ")}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="flex gap-2 p-3">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  sendMessage();
                }
              }}
              placeholder="Nhập câu hỏi..."
              className="h-11 flex-1 rounded-md border-2 border-transparent bg-muted px-3 text-sm text-foreground outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-primary focus:bg-white focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            />
            <button
              type="button"
              onClick={sendMessage}
              disabled={!canSend}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-primary text-white transition-all duration-200 hover:scale-105 hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
              aria-label="Gửi tin nhắn"
            >
              <SendHorizontal className="h-4 w-4" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-secondary text-white transition-all duration-200 hover:scale-105 hover:bg-emerald-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
          aria-label="Mở AI chatbot"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={2.5} />
        </button>
      )}
    </div>
  );
}

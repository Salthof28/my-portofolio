"use client"
import { useChat } from "@ai-sdk/react";
import { ArrowUp, BotMessageSquare } from "lucide-react";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

export function ChatBot () {
    const [enableChat, setEnableChat] = useState<boolean>(false)
    const [input, setInput] = useState<string>('')
    const { messages, sendMessage } = useChat()

    const handleSubmitChat = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(!input.trim()) return
        sendMessage({ text: input });
        setInput('')
    }

    // const chatContainerRef = useRef<HTMLDivElement>(null);
    // // 1. Efek otomatis untuk menggulirkan scrollbar ke bawah setiap ada pesan baru
    // useEffect(() => {
    //     const container = chatContainerRef.current;
    //     if (container) {
    //         // Memaksa posisi scroll vertikal (top) berada di posisi tinggi maksimal (scrollHeight)
    //         container.scrollTop = container.scrollHeight;
    //     }
    // }, [messages, enableChat]); // Berjalan setiap ada pesan baru ATAU saat kotak chat baru dibuka

    return (
        <div>
            <button onClick={() => setEnableChat(!enableChat)} className={`fixed z-20 rounded-2xl p-[1em] bg-amber-800 right-[2em] bottom-[2em] hover:scale-120 duration-300 active:scale-95`}>
                <BotMessageSquare className={`w-[2em] h-[2em] xl:w-[2.5em] xl:h-[2.5em]`} />
            </button>
            <div className={`${enableChat ? "flex flex-col" : "hidden"} gap-[1em] fixed z-20 right-[clamp(2em,calc(var(--prefcalc)*6),6em)] bottom-[clamp(7em,calc(var(--prefcalc)*20),8em)] p-[1em] bg-amber-800 rounded-2xl md:min-w-[clamp(19em,calc(var(--prefcalc)*20),20em)] md:max-w-[clamp(19em,calc(var(--prefcalc)*20),20em)] min-w-66 max-w-66`}>
                <div className={`flex flex-col gap-[0.8em] w-full min-h-[20em] p-[0.2em] max-h-[20em] overflow-auto custom-scrollbar scroll-smooth`}>
                    {messages.length > 0 ? (
                        messages.map((message) => (
                            <div key={message.id} className={`whitespace-pre-wrap w-fit ${message.role === "user" ? "bg-white/20 self-end p-[0.6em] rounded-lg" : "self-start"} field-sizing-content`}>
                                {/* {message.role === "user" ? "User: " : "AI: "} */}
                                {message.parts.map((part, i) => {
                                    switch (part.type) {
                                        case "text" :
                                            return (
                                                <div key={`${message.id}-${i}`}>
                                                    <ReactMarkdown>{part.text}</ReactMarkdown>
                                                </div>
                                            )
                                }
                                })}
                            </div>
                        ))
                    ) :(
                        <div className="flex flex-col items-center justify-center w-full h-full min-h-[18em] text-center gap-2 pointer-events-none select-none">
                            <p className="text-base font-semibold text-white/90 tracking-wide animate-pulse">
                                Ask about me! ✨
                            </p>
                        </div>
                    )}

                </div>
                <form onSubmit={handleSubmitChat} className={`flex flex-row w-full bg-white/10 p-[0.6em] gap-[0.2em] rounded-md items-start`}>
                    <textarea
                        placeholder={`ask about me`} 
                        rows={1} 
                        onChange={e => setInput(e.currentTarget.value)} 
                        onKeyDown={(e) => {
                            // Fitur kenyamanan: Tekan Enter untuk kirim, Shift + Enter untuk baris baru
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                e.currentTarget.form?.requestSubmit();
                            }
                        }}
                        className={`w-full max-w-full focus:outline-none resize-none overflow-auto custom-scrollbar max-h-[5em] text-white field-sizing-content`} 
                        value={input} 
                    />
                    <button className={`rounded-[50%] p-[0.2em] bg-amber-950 shrink-0`}>
                        <ArrowUp className={`w-[0.6em] h-[0.6em] xl:w-[1em] xl:h-[1em]`} />
                    </button>
                </form>
            </div>
        </div>
    )
}
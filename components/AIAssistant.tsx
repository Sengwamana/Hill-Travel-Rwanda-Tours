import React, { useState, useEffect, useRef } from 'react';
import { getGeminiResponse } from '../utils/gemini';

// Type definitions for Web Speech API
interface SpeechRecognitionEvent extends Event {
  results: {
    [key: number]: {
      [key: number]: {
        transcript: string;
      };
    };
  };
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onend: () => void;
}

declare global {
  interface Window {
    SpeechRecognition: { new (): SpeechRecognition };
    webkitSpeechRecognition: { new (): SpeechRecognition };
  }
}

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'ai' }[]>([
    { text: "Hello! I'm your Hill Travel Guide. Ask me anything about Rwanda!", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Initialize Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onresult = (event: SpeechRecognitionEvent) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        handleSend(transcript);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel(); // Stop any previous speech
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      // Optional: Try to select a specific voice if desired
      // const voices = window.speechSynthesis.getVoices();
      // utterance.voice = voices.find(v => v.lang === 'en-US') || null;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = async (text: string) => {
    if (!text.trim()) return;

    // Add User Message
    const userMsg = { text, sender: 'user' as const };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    // Get AI Response
    const responseText = await getGeminiResponse(text);
    
    // Add AI Message
    const aiMsg = { text: responseText, sender: 'ai' as const };
    setMessages(prev => [...prev, aiMsg]);
    setIsLoading(false);

    // Speak AI Response
    speak(responseText);
  };

  const toggleListening = () => {
    if (!recognitionRef.current) {
        alert("Voice recognition is not supported in this browser.");
        return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {/* Toggle Button */}
      {!isOpen && (
        <button 
            onClick={() => setIsOpen(true)}
            className="w-16 h-16 bg-forest text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
            aria-label="Open AI Assistant"
        >
            <span className="material-symbols-outlined text-3xl group-hover:rotate-12 transition-transform">smart_toy</span>
            {/* Pulse Effect */}
            <span className="absolute -inset-1 rounded-full bg-sage opacity-30 animate-ping"></span>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-sandstone/20 animate-in slide-in-from-bottom-10 fade-in duration-300">
            {/* Header */}
            <div className="bg-forest p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                    <div className="p-1.5 bg-white/20 rounded-full">
                        <span className="material-symbols-outlined text-xl">smart_toy</span>
                    </div>
                    <div>
                        <h3 className="font-serif font-bold tracking-wide">Hill Guide</h3>
                        <p className="text-[10px] uppercase tracking-wider opacity-80">AI Travel Assistant</p>
                    </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1 rounded-full transition-colors">
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-sandstone/10 scrollbar-thin scrollbar-thumb-sage/20">
                {messages.map((msg, idx) => (
                    <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                            msg.sender === 'user' 
                            ? 'bg-forest text-white rounded-tr-none' 
                            : 'bg-white text-earth border border-sandstone/10 rounded-tl-none'
                        }`}>
                            {msg.text}
                        </div>
                    </div>
                ))}
                {isLoading && (
                     <div className="flex justify-start">
                        <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-sandstone/10 flex items-center gap-2">
                            <span className="w-2 h-2 bg-sage rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-sage rounded-full animate-bounce delay-100"></span>
                            <span className="w-2 h-2 bg-sage rounded-full animate-bounce delay-200"></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t border-sandstone/10">
                <div className="flex items-center gap-2 relative">
                    <input 
                        type="text" 
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend(inputText)}
                        placeholder="Ask about Rwanda..."
                        className="flex-1 pl-4 pr-10 py-3 bg-sandstone/10 rounded-full text-sm border-2 border-transparent focus:border-sage focus:outline-none transition-all placeholder:text-gray-400"
                    />
                    
                    {/* Voice Button */}
                    <button 
                        onClick={toggleListening}
                        className={`absolute right-12 p-1.5 rounded-full transition-colors ${isListening ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-forest'}`}
                        title="Speak"
                    >
                         <span className="material-symbols-outlined text-xl">{isListening ? 'mic_off' : 'mic'}</span>
                    </button>

                    {/* Send Button */}
                    <button 
                        onClick={() => handleSend(inputText)}
                        disabled={!inputText.trim() && !isListening}
                        className="bg-forest text-white p-3 rounded-full hover:bg-forest/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                        <span className="material-symbols-outlined text-lg">send</span>
                    </button>
                </div>
            </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;

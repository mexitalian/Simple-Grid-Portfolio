import React, { useState, useRef } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
import { askAI } from '../services/geminiService.ts';

export const AIChatBot: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scrollViewportRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    setResponse(null);
    const aiResp = await askAI(input);
    setResponse(aiResp);
    setLoading(false);
    setInput('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
          <Sparkles size={16} />
        </div>
        <h3 className="font-bold text-[var(--slate11)] uppercase tracking-[0.2em] text-[10px]">Knowledge Assistant</h3>
      </div>
      
      <ScrollArea.Root className="flex-grow overflow-hidden mb-6 min-h-[140px]">
        <ScrollArea.Viewport className="w-full h-full rounded-2xl" ref={scrollViewportRef}>
          <div className="flex flex-col justify-end min-h-full pb-4">
            {response ? (
              <div className="p-5 bg-[var(--slate3)] border border-[var(--slate6)] rounded-[1.5rem] text-sm text-[var(--slate12)] leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-500 shadow-inner">
                <div className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-2">Response</div>
                {response}
              </div>
            ) : (
              <div className="p-5 border border-dashed border-[var(--slate6)] rounded-[1.5rem] text-center">
                <p className="text-sm text-[var(--slate10)] font-medium">
                  Ask me about Christian's stack or philosophy.
                </p>
              </div>
            )}
          </div>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          className="flex select-none touch-none p-0.5 bg-[var(--slate3)] transition-colors duration-[160ms] ease-out hover:bg-[var(--slate4)] data-[orientation=vertical]:w-2 rounded-full"
          orientation="vertical"
        >
          <ScrollArea.Thumb className="flex-1 bg-[var(--slate6)] rounded-full relative" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="w-full bg-[var(--slate3)] border border-[var(--slate6)] rounded-2xl py-4 pl-5 pr-14 text-sm font-medium text-[var(--slate12)] focus:outline-none focus:ring-2 focus:ring-indigo-500/40 transition-all placeholder:text-[var(--slate9)] shadow-lg"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 disabled:opacity-30 transition-all shadow-md active:scale-95"
        >
          {loading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
        </button>
      </form>
    </div>
  );
};
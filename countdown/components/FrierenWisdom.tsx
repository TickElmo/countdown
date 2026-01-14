
import React, { useState, useEffect } from 'react';
import { getFrierenQuote } from '../services/geminiService';

export const FrierenWisdom: React.FC = () => {
  const [quote, setQuote] = useState<string>('正在感受時間的流動...');
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    const newQuote = await getFrierenQuote();
    setQuote(newQuote);
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="glass-panel p-8 rounded-3xl max-w-2xl w-full border-white/5 relative overflow-hidden group">
      {/* 裝飾線條 */}
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/30"></div>
      
      <div className="flex flex-col items-center text-center gap-4">
        <div className="text-blue-300/60 italic text-sm mb-2">Frieren's Wisdom</div>
        
        <p className={`text-xl md:text-2xl text-blue-50 leading-relaxed font-light transition-opacity duration-1000 ${loading ? 'opacity-50' : 'opacity-100'}`}>
          「 {quote} 」
        </p>

        <button 
          onClick={fetchQuote}
          disabled={loading}
          className="mt-6 px-6 py-2 rounded-full border border-blue-400/30 text-blue-200 text-sm hover:bg-blue-400/10 transition-all active:scale-95 disabled:opacity-30"
        >
          {loading ? '回憶中...' : '另一段回憶'}
        </button>
      </div>
    </div>
  );
};

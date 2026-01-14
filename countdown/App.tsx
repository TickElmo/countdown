
import React, { useState, useEffect } from 'react';
import { CountdownDisplay } from './components/CountdownDisplay';
import { FrierenWisdom } from './components/FrierenWisdom';

const App: React.FC = () => {
  const targetDate = new Date('2026-01-18T00:00:00').getTime();
  
  // 背景圖片選用高質感的動漫意境圖（如森林、星空等符合芙莉蓮風格的）
  // 這裡選用一張具有魔法感且開闊的背景
  const bgImage = "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden">
      {/* 背景層 */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.7), rgba(15, 23, 42, 0.8)), url('${bgImage}')` }}
      />

      {/* 裝飾性花瓣/粒子效果 (模擬魔法) */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-blue-100 rounded-full blur-sm animate-pulse"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      {/* 主內容區 */}
      <main className="relative z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center gap-12 text-center">
        
        <header className="space-y-4 animate-float">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-widest drop-shadow-2xl">
            葬送的芙莉蓮
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-light tracking-widest uppercase opacity-80">
            Journey Towards 2026.01.18
          </p>
          <div className="h-px w-24 bg-blue-400 mx-auto opacity-50"></div>
        </header>

        {/* 倒數計時組件 */}
        <CountdownDisplay targetDate={targetDate} />

        {/* AI 語錄區 */}
        <FrierenWisdom />

        <footer className="mt-8 text-blue-300/40 text-sm tracking-tighter">
          時間是殘酷的，但也因此顯得美麗。
        </footer>
      </main>
    </div>
  );
};

export default App;

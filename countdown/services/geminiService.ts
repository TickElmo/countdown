
import { GoogleGenAI } from "@google/genai";

export const getFrierenQuote = async (): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: '請以《葬送的芙莉蓮》中芙莉蓮的角色口吻，寫一段關於「時間」、「勇者伙伴」或「旅行」的短語錄（不超過60字）。語氣要淡然而深情，充滿智慧，使用繁體中文。',
      config: {
        temperature: 0.8,
        topP: 0.9,
      }
    });

    return response.text || "時間流逝得真快，這十年對我而言，或許也只是漫長旅途中的一瞬。";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "勇者艾梅洛特曾說過，為了讓我在未來不感到孤單，他才決定展開這趟冒險。";
  }
};

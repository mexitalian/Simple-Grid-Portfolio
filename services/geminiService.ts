import { GoogleGenAI } from "@google/genai";
import { PROFILE_INFO } from '../constants.tsx';

export const askAI = async (question: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: question,
      config: {
        systemInstruction: `
          You are the AI version of ${PROFILE_INFO.name}. 
          Handle: ${PROFILE_INFO.handle}.
          Location: ${PROFILE_INFO.location}.
          Bio: ${PROFILE_INFO.bio}.
          Role: Product Designer & Frontend Engineer.
          Tone: Professional, witty, and concise. 
          Respond in under 2 sentences. 
          Knowledge: Design systems, React, TypeScript, and bento-style layouts.
        `,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having trouble thinking clearly right now. Try again?";
  } catch (error) {
    console.error("Gemini SDK Error:", error);
    return "I'm currently taking a short break from the matrix. Please try asking again in a moment!";
  }
};
import { GoogleGenerativeAI } from "@google/generative-ai";

// Use a VITE_ prefixed variable so Vite exposes it via import.meta.env.
// Never reference process.env here — it is not available in the browser.
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

// gemini-1.5-flash was retired in Sept 2025. Try current models in order.
const MODEL_CANDIDATES = ["gemini-2.5-flash", "gemini-3.1-flash-lite"];

const genAI = API_KEY && API_KEY !== 'PLACEHOLDER_API_KEY'
  ? new GoogleGenerativeAI(API_KEY)
  : null;

const buildPrompt = (message: string) => `
    You are the AI Assistant for 'Hill Travel Rwanda Tours'.
    Your tone is friendly, professional, and knowledgeable about Rwanda.
    Keep your answers concise (under 50 words preferably) as they may be spoken aloud.

    User Query: ${message}
    `;

export const getGeminiResponse = async (message: string): Promise<string> => {
  if (!genAI) {
    return "I'm not fully set up yet. Please add a valid VITE_GEMINI_API_KEY to your .env file to enable my travel knowledge.";
  }

  for (const modelName of MODEL_CANDIDATES) {
    try {
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent(buildPrompt(message));
      return result.response.text();
    } catch (error) {
      console.warn(`Gemini model "${modelName}" failed:`, error);
    }
  }

  return "I'm having trouble connecting to the network right now. Please check your connection and try again.";
};

import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize the Gemini API
// Support both vite env prefixes
const API_KEY = import.meta.env.GEMINI_API_KEY || import.meta.env.VITE_GEMINI_API_KEY;

let model: any = null;

if (API_KEY && API_KEY !== 'PLACEHOLDER_API_KEY') {
    const genAI = new GoogleGenerativeAI(API_KEY);
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
}

export const getGeminiResponse = async (message: string) => {
  try {
    if (!model) {
        return "I'm not fully set up yet. Please add a valid GEMINI_API_KEY to your .env.local file to enable my travel knowledge.";
    }
    
    const prompt = `
    You are the AI Assistant for 'Hill Travel Rwanda Tours'. 
    Your tone is friendly, professional, and knowledgeable about Rwanda.
    Keep your answers concise (under 50 words preferably) as they may be spoken aloud.
    
    User Query: ${message}
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error fetching Gemini response:", error);
    return "I'm having trouble connecting to the network right now. Please check your connection and try again.";
  }
};

import { GoogleGenAI } from "@google/genai";
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const GEMINI_API_KEY = "AIzaSyCNYZ1FGj3FGon6Ypte7o8060QBv9SBsGo";
const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
export default ai;


async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works",
    config: {
      temperature: 0.1,
    },
  });
  console.log(response.text);
}

await main();
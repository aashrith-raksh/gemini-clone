import ai from "./model";

export async function chat(chatContext: chatContext, newPrompt: string) {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: chatContext,
  });

  const response1 = await chat.sendMessage({
    message: newPrompt,
  });
  console.log("Chat response 1:", response1.text);

  return response1.text;
}

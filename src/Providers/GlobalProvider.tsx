import { chat } from "@/config/utils";
import { globalContext } from "@/store/global-context";
import { useState, type ReactNode } from "react";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [currentChat, setCurrentChat] = useState<chatContext>([]);
  const [userChats, setUserChats] = useState<chatContext[]>([]);

  function sendPrompt(newPrompt: chatContextItem) {
    if (currentChat.length === 0) {
      const newChat = [...currentChat]; // shallow clone is fine
      setUserChats((prev) => [newChat, ...prev]);
    }

    const chatContext = [...currentChat];
    const promptText = newPrompt.parts[0].text;

    setCurrentChat((prev) => [
      ...prev,
      { role: "user", parts: [{ text: promptText }] },
    ]);

    
    chat(chatContext, promptText).then((res) =>
      setCurrentChat((prev) => [
        ...prev,
        { role: "model", parts: [{ text: res! }] },
      ])
    );

  }

  const value = {
    currentChat, 
    userChats, 
    sendPrompt
  };
  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default GlobalProvider;

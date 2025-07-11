import { createContext } from "react";

export const globalContext = createContext<GlobalStateType>({
    userChats:[],
    currentChat:[],
    sendPrompt:() => {}
})
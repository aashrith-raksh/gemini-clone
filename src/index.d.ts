type chatContextItem = {
role:"user" | "model",
parts:[{text: string}]
}

type chatContext = chatContextItem[]

type GlobalStateType = {
    userChats:chatContext[],
    currentChat:chatContext,
    sendPrompt:(newPrompt:chatContextItem) => void
}
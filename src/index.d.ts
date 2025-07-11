type chatContextItem = {
role:"user" | "model",
parts:[{text: string}]
}

type chatContext = chatContextItem[]
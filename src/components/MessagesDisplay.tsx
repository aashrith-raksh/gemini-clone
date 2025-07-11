import { globalContext } from "@/store/global-context";
import { useContext } from "react";

const MessagesDisplay = () => {

  const {currentChat} = useContext(globalContext)

  return (
    <section className="flex-1 rounded-sm border shadow overflow-auto max-h-full p-2">
  <ul className="flex flex-col gap-2">
    {currentChat.map((item) => {
      const text = item.parts[0].text;
      const isUser = item.role === "user";

      return (
        <li
          key={text}
          className={`max-w-[70%] p-2 rounded-md text-white ${
            isUser ? "self-end bg-blue-700" : "self-start bg-gray-700"
          }`}
        >
          <p>{text}</p>
        </li>
      );
    })}
  </ul>
</section>

  );
};

export default MessagesDisplay;

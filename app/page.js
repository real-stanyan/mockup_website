"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import Products from "./components/Products";
import Home_intro from "./components/Home_intro";

import { IoChatboxEllipses } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoSendSharp } from "react-icons/io5";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [chatSwitch, setChatSwitch] = useState(false);
  const [messages, setMessages] = useState([
    // { role: "user", content: "sda" },
    // { role: "assistant", content: "sda" },
    // { role: "user", content: "sda" },
    // { role: "assistant", content: "sda" },
    // { role: "user", content: "sda" },
  ]);
  const [userInput, setUserInput] = useState("");

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: "user", content: userInput };
    setMessages([...messages, userMessage]); // Update local state to include new user message
    setUserInput("");

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [...messages, userMessage], // Include the updated conversation history
          max_tokens: 150,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
          },
        }
      );

      const botResponse = {
        role: "assistant",
        content: response.data.choices[0].message.content,
      };

      setMessages([...messages, userMessage, botResponse]); // Update the messages with both the new user and bot responses
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <>
      {/* chat box */}
      {chatSwitch ? (
        <div className="flex flex-col w-[80vw] h-[100vw] md:w-[500px] md:h-[500px] fixed bottom-5 right-10 bg-[#212121] z-50 border-4 border-[#494949] rounded-xl transition-all overflow-x-hidden overflow-y-scroll">
          <IoIosCloseCircleOutline
            className="text-[white] text-[8vw] md:text-[40px] absolute top-2 right-2"
            onClick={() => {
              setChatSwitch(false);
            }}
          />
          <h1 className="w-[100%] md:w-[500px] min-h-[50px] text-center text-[5vw] md:text-[20px] text-white font-bold mt-[10px]">
            Chat with us
          </h1>
          {/* chats area */}
          <div className="px-2 py-4">
            {messages.length === 0 && (
              <div className="text-[4vw] md:text-[30px] text-[white] text-center">
                <p>Chat with me</p>
                {/* 1 */}
                <div
                  onClick={() => {
                    setUserInput("Recommend some fitness supplements to me");
                  }}
                  className="my-2 border-2 border-[#494949] rounded-xl text-[4vw] md:text-[20px] cursor-pointer hover:bg-white hover:text-[black]"
                >
                  Recommend some fitness supplements to me
                </div>
                {/* 2 */}
                <div
                  onClick={() => {
                    setUserInput("How to improve sleep quality?");
                  }}
                  className="my-2 border-2 border-[#494949] rounded-xl text-[4vw] md:text-[20px] cursor-pointer hover:bg-white hover:text-[black]"
                >
                  How to improve sleep quality?
                </div>
                {/* 3 */}
                <div
                  onClick={() => {
                    setUserInput("How to make muscles recover faster?");
                  }}
                  className="my-2 border-2 border-[#494949] rounded-xl text-[4vw] md:text-[20px] cursor-pointer hover:bg-white hover:text-[black]"
                >
                  How to make muscles recover faster?
                </div>
              </div>
            )}
            {messages.map((msg, i) =>
              msg.role == "user" ? (
                // user
                <div
                  key={i}
                  className="text-[white] flex items-center justify-self-end justify-end"
                >
                  <p className="text-[3vw] md:text-[1vw] p-2 border-2 border-[#494949] rounded-xl">
                    {msg.content}
                  </p>
                  <img
                    src="/images/user.png"
                    alt=""
                    className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                  />
                </div>
              ) : (
                // ai
                <div
                  key={i}
                  className="text-[white] flex items-start justify-start"
                >
                  <img
                    src="/images/chat_ai.png"
                    alt=""
                    className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                  />
                  <p className="text-[3vw] md:text-[1vw] p-2 border-2 border-[#494949] rounded-xl">
                    {msg.content}
                  </p>
                </div>
              )
            )}
          </div>
          {/* input area */}
          <div className="w-full flex items-center mt-auto">
            <input
              type="text"
              className="w-full h-[50px] p-[10px] text-[20px]"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <IoSendSharp
              className="ml-[-35px] text-[20px]"
              onClick={sendMessage}
            />
          </div>
        </div>
      ) : (
        <div
          onClick={() => {
            setChatSwitch(true);
          }}
          className="w-[20vw] h-[20vw]  md:w-[100px] md:h-[100px] bg-[var(--primry-color)] rounded-full fixed bottom-2 right-2 z-50 flex justify-center items-center md:hover:w-[120px] md:hover:h-[120px] transition-all"
        >
          <IoChatboxEllipses className="text-[var(--main-color)] text-[10vw] md:text-[50px]" />
        </div>
      )}
      <Home_intro />
      <Products />
    </>
  );
}

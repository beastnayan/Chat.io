import React, { useState } from "react";
import UserSettings from "./UserSettings";

export default function UserChats({
  userProfilePicture,
  userName,
  dateOfBirth,
  fullName,
  mobilenumber,
}) {
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const openUserSetting = () => {
    setShowOptions(!showOptions);
  };

  const sendMessage = () => {
    if (inputMessage.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputMessage, sender: "user" },
      ]);

      setInputMessage("");

      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "This is a reply from the other user!", sender: "other" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="h-screen flex flex-col ">
      {/* User Info Section */}

      <div className=" p-4 flex  items-center justify-between">
        <div className="flex items-center">
          <img
            className="h-16 w-16 rounded-full cursor-pointer object-cover border-4 border-white"
            src={userProfilePicture}
            alt="userProfile"
          />
          <p className="pl-4">{userName}</p>
        </div>

        <div className="mr-12">
          <i
            onClick={openUserSetting}
            className="fa-solid fa-ellipsis-vertical cursor-pointer"
          ></i>
        </div>
      </div>

      <hr className="border-t-2 " />



      {/* Chat Messages (Takes Remaining Space) */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg min-w-[30%] h-auto max-w-[70%] break-all ${
              message.sender === "user"
                ? "bg-green-500  text-white self-start"
                : "bg-gray-300 text-black self-"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>


      {/* Input Area (Always Stays at the Bottom) */}
      <div className="] py-4 px-4 bg-[#023047]">
        <div className="flex items-center">
          <input
            className="flex-1 p-2 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            type="text"
            placeholder="Type a message..."
            onChange={(e) => setInputMessage(e.target.value)}
            value={inputMessage}
          />

          <button
            className="ml-4 bg-[#8da9c4] text-white px-4 py-2 rounded-lg hover:bg-blue-800"
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>

      {/* User Settings (Optional) */}
      {showOptions && (
        <div className="flex justify-center items-center">
          <UserSettings
            userName={userName}
            fullName={fullName}
            mobilenumber={mobilenumber}
            dateOfBirth={dateOfBirth}
            userProfilePicture={userProfilePicture}
            openUserSetting={openUserSetting}
          />
        </div>
      )}
    </div>
  );
}

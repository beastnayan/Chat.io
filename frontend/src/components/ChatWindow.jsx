import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import UserSettings from "./UserSettings";

function ChatWindow() {
  const [userName, setUserName] = useState("Beast Nayan");
  const [fullName, setfullName] = useState("Nayan Kanojiya");
  const [mobilenumber, setmobilenumber] = useState(9877435909);
  const [dateOfBirth, setdateOfBirth] = useState("2.02.1999");
  const [userProfilePicture, setuserProfilePicture] = useState(
    "https://imgs.search.brave.com/aRcOscm4cEGOfi--Y2SZSNrAgt7ooJLnW5Moo-a0mOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/ODY2ODM0L3Bob3Rv/L21hbi1kcml2aW5n/LWNhci13aXRoLXBh/cGllci1tYWNoZS1z/aGFyay1vbi1yb29m/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1QUE9xTzhXbC1i/VTlVSmk1RTk3cUYz/LTRtTE5VZjRfQ01X/MnRIT215bWV3PQ"
  );

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
    <div className="relative w-full h-screen bg-[#073b4c]">
      <Header />

      {/* Main Chat Window */}
      <div className="h-full">
        <div className="bg-[#669bbc]">
          <div className="p-4 pl-8 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-16 w-16 rounded-full cursor-pointer object-cover border-4 border-white"
                src={userProfilePicture}
                alt="userProfile"
              />
              <p className="pl-8 pt-5">{userName}</p>
            </div>

            <div className="mr-12">
              <i
                onClick={openUserSetting}
                className="fa-solid fa-ellipsis-vertical cursor-pointer"
              ></i>
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-grow p-4 overflow-y-auto h-72">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`mb-2 p-2 rounded-lg min-w-[30%] h-auto max-w-[70%] break-all ${
                message.sender === "user"
                  ? "bg-green-500 text-white self-start"
                  : "bg-gray-300 text-black self-start"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-white py-4">
          <div className="flex justify-center items-center">
            <input
              className="w-3/4 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
              type="text"
              placeholder="Type a message..."
              onChange={(e) => setInputMessage(e.target.value)}
              value={inputMessage}
            />
            <button
              className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>

      {/* User Settings (conditionally displayed on top) */}
      {showOptions && (
        <div className="flex justify-center items-center">
          <UserSettings
            userName={userName}
            fullName={fullName}
            mobilenumber={mobilenumber}
            dateOfBirth={dateOfBirth}
            userProfilePicture={userProfilePicture}
          />
        </div>
      )}
    </div>
  );
}

export default ChatWindow;

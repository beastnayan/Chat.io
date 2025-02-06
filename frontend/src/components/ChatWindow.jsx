 import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "./Header";
import UserChats from "./UserChats";

function ChatWindow() {
  const [userName, setUserName] = useState("Beast Nayan");
  const [fullName, setfullName] = useState("Nayan Kanojiya");
  const [mobilenumber, setmobilenumber] = useState(9877435909);
  const [dateOfBirth, setdateOfBirth] = useState("2.02.1999");
  const [userProfilePicture, setuserProfilePicture] = useState(
    "https://imgs.search.brave.com/aRcOscm4cEGOfi--Y2SZSNrAgt7ooJLnW5Moo-a0mOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/ODY2ODM0L3Bob3Rv/L21hbi1kcml2aW5n/LWNhci13aXRoLXBh/cGllci1tYWNoZS1z/aGFyay1vbi1yb29m/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1QUE9xTzhXbC1i/VTlVSmk1RTk3cUYz/LTRtTE5VZjRfQ01X/MnRIT215bWV3PQ"
  );




  return (
    <div className=" h-screen flex flex-col bg-black text-white">

      {/* chatwindw header */}
        <Header />
        <hr />

      {/* Main Chat Window */}
      <UserChats
            userProfilePicture={userProfilePicture}  
            userName={userName}  
            fullName={fullName}
            mobilenumber={mobilenumber}
            dateOfBirth={dateOfBirth}
        />

   
     
    </div>
  );
}

export default ChatWindow;

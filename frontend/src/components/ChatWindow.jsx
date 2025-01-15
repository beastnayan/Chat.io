import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import SerachUser from "./SearchUser"
import Header from "./Header"
import UserSettings from './UserSettings';








function ChatWindow() {


    const [userName, setUserName] = useState("Beast Nayan");
    const [fullName, setfullName] = useState("Nayan  Kanojiya")
    const [mobilenumber, setmobilenumber] = useState(9877435909)
    const [dateOfBirth, setdateOfBirth] = useState("2.02.1999")
    const [userProfilePicture, setuserProfilePicture] = useState("https://imgs.search.brave.com/aRcOscm4cEGOfi--Y2SZSNrAgt7ooJLnW5Moo-a0mOc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTg1/ODY2ODM0L3Bob3Rv/L21hbi1kcml2aW5n/LWNhci13aXRoLXBh/cGllci1tYWNoZS1z/aGFyay1vbi1yb29m/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1QUE9xTzhXbC1i/VTlVSmk1RTk3cUYz/LTRtTE5VZjRfQ01X/MnRIT215bWV3PQ")
   
    
    const [showOptions, setshowoptions] = useState(false);




    const handelClick = () => {
       
    };



   const openUserSetting = () => {
    setshowoptions(!showOptions);
    console.log("Image clicked", showOptions);
   }


    return (

    <div
       className=""
       style={{ width: "100%", height: "100vh", marginLeft: "auto" , backgroundColor: '#073b4c'}}
    >

        <Header/>





       <div
        className='flex'
       >


         <div
            className=' flex items-center justify-center bg-blue-500 '
            style={{width:"40%", height:"85vh"}}
        >
            
            <div
            className='h-3/4'
            style={{backgroundColor:"#2a9d8f"}}>


            <input 

            className=' w-72   h-10 rounded-tl-md rounded-bl-md  border-none outline-none '
            type="text" /> 

            <button 
            className='h-10 w-20 text-white rounded-tr-md rounded-br-md  hover:scale-105 transition duration-300'
            style={{backgroundColor:"#023047"}}
            >
            Search
            </button>

         </div>
    
    
    
    
        </div>



        <div className="w-full h-28" style={{ backgroundColor: '#118ab2' }}>
              
              <div className="flex flex-row items-start justify-start relative">
                  <img
                      className="h-20 w-20 cursor-pointer"
                      style={{ marginTop: "2.5%", marginLeft: "2.5%", borderRadius: "50%" }}
                      src={userProfilePicture}
                      alt="Profile"
                      onClick={handelClick}
                  />
                  <span
                    className = "pt-64"
                    style={{ paddingTop: "4.5%", paddingLeft: "3%" , fontSize:"20px" }}
                  >
                      {userName}
                  </span>


                <i 
                    className = "pt-64"
                    style={{ paddingTop: "4.5%", paddingLeft: "65%" , fontSize:"25px" }}
                    onClick={openUserSetting}
                    class ="fa-solid fa-ellipsis-vertical">
                </i>

                  {/* after clicking three dots  */}

                {showOptions && (
                   <UserSettings 
                   userName={userName} 
                   fullName={fullName}
                   mobileNumber={mobileNumber}  
                   dateOfBirth={dateOfBirth} 
                   userProfilePicture={userProfilePicture}
               />

                )}


               
              </div>
          </div>



       </div>











      
     </div>
    );
}

export default ChatWindow;

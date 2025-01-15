
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";








function LoginPage() {

const [phoneNumber , setphoneNumber] = useState('')
const [error , setError] = useState('')

const navigate = useNavigate();


function handelInputChange(e){
    setphoneNumber(e.target.value)
}


async function handelSendOTP()
{
    // Validate phone number to be exactly 10 digits and numeric
    const phonePattern = /^\d{10}$/;


    if (phonePattern.test(phoneNumber)) {

        try{

        let response = await axios.post("/api/v1/send-otp", {phoneNumber})

        console.log(response.data);
        
        navigate("/otp")
            
        } 
        catch (error) {
           
            console.log("Enter valid mobile no to recive otp: ",error);
            
            
        }
        console.log('Sending OTP to:', phoneNumber);
  
       
    } else {
        // Invalid phone number
        setError('Please enter a valid 10-digit mobile number');
    }
};



setTimeout(() => {
    setError("");
  }, 5000); // 5000 milliseconds = 5 seconds


    return (
        <>
        <div style={{backgroundColor : "#023047"}} className="flex flex-col items-center h-screen pt-8">
            <img 
                src="/CHAT.IO LOGO.png" 
                alt="App Logo" 
                className="h-56 w-56 mt-10 mb-20 rounded-full"
            />
            <h2 className="text-4xl text-white   font-semibold mb-4">Phone Verification....</h2>
            <input 
                type="text"
                placeholder="Enter your mobile number"
                className="border border-gray-300 rounded-md p-2 mb-4 w-64 text-center"
                value={phoneNumber}
                onChange={handelInputChange}
                style={{backgroundColor : "#457b9d"}}

            />

            <span className="mt-4 mb-4 text-red-400">{error}</span>


            <button
                onClick={handelSendOTP}
                className="bg-blue-500   text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Send OTP
            </button>
        </div>
    </>
    
    );
}

 
export default LoginPage ;

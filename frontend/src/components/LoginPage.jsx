
import React, { useState }  from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setActiveUser  } from "../store/AuthSlice";


function LoginPage() {

const [ phonenumber , setPhoneNumber] = useState('')
const [error , setError] = useState('')

const navigate = useNavigate();
const dispatch = useDispatch();


function handelInputChange(e){
    setPhoneNumber(e.target.value)
}


async function handelSendOTP()
{
    // Validate phone number to be exactly 10 digits and numeric
    const phonePattern = /^\d{10}$/;


    if ( phonePattern.test( phonenumber)) {

        try{
            let response = await axios({
                method: "POST",
                url: "/api/v1/otp",
                data: { phonenumber: phonenumber },
            })
            console.log("Response from axios: ", response.data);
            dispatch(setActiveUser({ phonenumber: phonenumber }))
            console.log("OTP sent successfully: ", response.data);
            navigate("/otp")
            setPhoneNumber("")
        } 
        catch (error) {
            console.log("Error from axios: ",error);
        }
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
        <div  className="flex flex-col items-center bg-black h-screen pt-8">
            <img 
                src="/CHAT.IO LOGO.png" 
                alt="App Logo" 
                className="h-44 w-44 mt-10 mb-20 rounded-full"
            />
            <h2 className="text-4xl text-white   font-semibold mb-4">Phone Verification....</h2>
            <input 
                type="text"
                placeholder="Enter your mobile number"
                className="border border-gray-300 rounded-md p-2 mb-4 w-64 text-center"
                value={phonenumber}
                onChange={handelInputChange}
                style={{backgroundColor : "#457b9d"}}

            />

            <span className="mt-4 mb-4 text-red-400">{error}</span>


            <button
                onClick={handelSendOTP}
                style={{backgroundColor : "#457b9d"}}
                className="bg-blue-500   text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
                Send OTP
            </button>
        </div>
    </>
    
    );
}

 
export default LoginPage ;

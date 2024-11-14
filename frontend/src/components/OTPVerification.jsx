import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate back to login page

function OTPVerification() {
  const [verificationCode, setVerificationCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [timer, setTimer] = useState(60);
  const [isDisabled, setIsDisabled] = useState(false);

  const navigate = useNavigate(); // Initialize navigate function

  useEffect(() => {
    const code = Math.floor(100000 + Math.random() * 900000); // 6-digit number
    setVerificationCode(code);
  }, []);

  // Countdown timer logic
  useEffect(() => {
    if (timer === 0) {
      setIsDisabled(true); 
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [timer]);

  const handleInputChange = (e) => {
    setInputCode(e.target.value);
  };

  // Handle the verification code submission
  const handleSubmit = () => {
    if (inputCode === verificationCode.toString()) {
      alert('Verification successful!');
    } else {
      alert('Invalid verification code.');
    }
  };

  // Navigate back to the login page
  const handleBackToLogin = () => {
    navigate('/login'); // Assuming your login page route is '/login'
  };

  return (
    <div style={{backgroundColor : "#023047"}} className="flex flex-col items-center h-screen pt-8 bg-gray-100">
      <h2 className="text-4xl text-white  font-semibold mb-4">Enter 6-Digit Code</h2>
      <p className="text-xl text-white mb-4">Verification Code: {verificationCode}</p>

      <input
        type="text"
        placeholder="Enter the 6-digit code"
        value={inputCode}
        onChange={handleInputChange}
        maxLength={6}
        className="border border-gray-300 rounded-md p-2 mb-4 w-64 text-center"
        disabled={isDisabled}
        style={{backgroundColor : "#457b9d"}}

      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        disabled={isDisabled}
      >
        Verify
      </button>

      <div className="mt-4">
        <p className="text-lg text-white ">Time Remaining: {timer}s</p>
      </div>


    </div>
  );
}

export default OTPVerification;

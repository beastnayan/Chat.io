import React, { useState } from "react";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    message: "",
    username: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div
      style={{ backgroundColor: "#023047" }}
      className="flex flex-col items-center h-screen justify-center"
    >
      {/* Image in the center */}
      <img
        // src="/logo.png" // Replace with your image path
        // alt="Registration Logo"
        className=" mb-8"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{ backgroundColor: "#014f86" }}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
      >

          {/* Image in the center */}
      <img
        src="/CHAT.IO LOGO.png" // Replace with your image path
        alt="Registration Logo"
        className="rounded-full  items-center ml-20   w-36 h-36 mb-8"
      />

        {/* Name Input */}
        <div className="mb-4">
          <label 
          // style={{ color: "#001524" }}
          className="block text-black text-sm font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Date of Birth Input */}
        <div className="mb-4">
          <label className="blocktext-black  text-sm font-bold mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Customizable Message Input
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter a short message"
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div> */}

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-black  text-sm font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Create a username"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;

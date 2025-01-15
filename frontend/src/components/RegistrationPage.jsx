import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";

function RegistrationPage() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    username: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target.name);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      console.log(imageUrl , "Image irl");
      
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Registration Successful!");
  };

  return (
    <div
      style={{ backgroundColor: "#023047" }}
      className="flex flex-col items-center min-h-screen justify-center px-4"
    >
      {/* Image Upload Section */}
      <div className="relative mb-8">
        <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          ) : (
            <p className="text-gray-500 text-sm md:text-base">No Image</p>
          )}
        </div>

        {/* Camera Icon */}
        <label
          htmlFor="imageInput"
          className="absolute bottom-0 right-0 bg-blue-500 text-white rounded-full p-2 cursor-pointer"
        >
          <FaCamera size={18} />
        </label>
        <input
          id="imageInput"
          type="file"
          accept="image/*"
          capture="user" // Enables camera for mobile
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-6 py-6 sm:px-8 sm:py-8 w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center text-blue-600 mb-4">
          Register
        </h2>

        {/* Name Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Date of Birth Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
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

        {/* Username Input */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm sm:text-base font-bold mb-2">
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
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationPage;

import React from 'react';

function UserSettings({ userName, fullName, mobilenumber, dateOfBirth, userProfilePicture ,openUserSetting}) {


 

    

  return (
    <div className="w-full h-auto flex justify-center items-center absolute top-[25%]   z-10 ">
      
      <div className="bg-gray-400 p-6 shadow-lg rounded-lg border flex flex-col items-center max-w-lg w-full">
        {/* Cancel Button */}
        <div className="w-full flex justify-end">
          <button
          onClick={openUserSetting}
          className="text-white bg-blue-900 hover:bg-blue-800 p-2 rounded-full">
            ✕
          </button>
        </div>

        {/* Profile Picture */}
        <div className="w-32 h-32 rounded-full flex items-center justify-center overflow-hidden border-4 border-green-700">
          <img
            className="w-full h-full object-cover"
            src={userProfilePicture}
            alt="User"
          />
        </div>

        {/* User Details */}
        <div className="w-full text-left mb-9 mt-9">
          <p className="p-2">
            <span className="font-bold">User Name :</span>{' '}
            <span className="text-black">{userName}</span>
          </p>
          <p className="p-2">
            <span className="font-bold F">Full Name :</span>{' '}
            <span className="text-black">{fullName}</span>
          </p>
          <p className="p-2">
            <span className="font-bold">Mobile No.:</span>{' '}
            <span className="text-black">{mobilenumber}</span>
          </p>
          <p className="p-2">
            <span className="font-bold">D.O.B :</span>{' '}
            <span className="text-black">{dateOfBirth}</span>
          </p>
        </div>
      </div>
      
    </div>
  );
}

export default UserSettings;

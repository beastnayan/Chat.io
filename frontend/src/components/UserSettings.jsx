import React from 'react'

function UserSettings({ userName, fullName, mobileNumber, dateOfBirth, userProfilePicture }) {

  return (


    <div
    className="absolute top-28 ml-44 bg-gray-400 p-4 shadow-lg rounded-lg border flex-col overflow-hidden flex items-start pl-60"
    style={{width:'700px' , height:"500px"}}
    >



        {/* Image constrained within the box */}
    
        <div
            className="w-32 h-32 ml-10 bg-green-500 rounded-full flex items-center justify-center overflow-hidden border-4 border-green-700"
        >
            <img
                className="w-full h-full object-cover"
                src={userProfilePicture}
                alt="User"
            />

        </div>



        {/* user detail */}

        <div
        className='mt-12 block'
        style={{backgroundColor:"green"}}
        >
            <p 
            className='p-3'
            >
            User Name : <span className='text-white'> {userName}</span>
                
            </p>

            <p 
            className='p-3'
            >
            Full Name: <span className='text-white'> {fullName}</span>
                
            </p>

            <p 
            className='p-3'
            >
            Mobile NO. : <span className='text-white'> {mobilenumber}</span>
                
            </p>
            <p 
            className='p-3'
            >
            D.O.B. : <span className='text-white'> {dateOfBirth}</span>
                
            </p>
        </div>
    
    </div>
  )
}

export default UserSettings
import React from 'react'

function SearchUser() {
  return (
    <div
    className=' flex items-center justify-center bg-blue-500 '
    style={{width:"40%" , height: '100vh'}}
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
  )
}

export default SearchUser
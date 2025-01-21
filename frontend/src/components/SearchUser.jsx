import React, { useState } from 'react';

function SearchUser() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="bg-[#353535] flex items-start justify-start  h-[85vh] sm:w-1/2 sm:h-[85vh] md:w-1/3 ">

           
            <div
                className={`h-full w-full  flex transition-transform duration-500 ease-in-out transform ml-9
                  ${isVisible ? 'translate-x-0' : '-translate-x-full'}
                  sm:translate-x-0 sm:h-[85vh] sm:w-[90%] md:w-[80%] lg:w-[70%]`
                }
            >
                <input 
                    className="w-full mt-9 sm:w-72 h-10 rounded-tl-md rounded-bl-md border-none outline-none p-2"
                    type="text"
                /> 

                <button 
                    className="h-10 w-20 text-white mt-9  rounded-tr-md rounded-br-md hover:scale-105 transition duration-300"
                    style={{ backgroundColor: "#023047" }}
                >
                    Search
                </button>




                {/* search box responsiveness */}

                {isVisible ? (
                    <button
                        className="text-white  text-2xl sm:hidden"
                        onClick={toggleSearch}
                    >
                        &times; {/* Close icon */}
                    </button>
                    ) : (

                    <div 
                    className=' h-full w-5'
                    >
                    {isVisible ? (
                       <div 
                       className='bg-yellow-400 '
                       >
                            <button
                                className="text-white text-2xl sm:hidden mt"
                                onClick={toggleSearch}
                            >
                                &times; {/* Close icon */}
                            </button>
                       </div>
                    ) : (



                        // Search Symbol

                       <div
                       className='h-auto w-8 ml-7'
                       >
                            <button
                                className="text-white text-2xl cursor-pointer sm:hidden"
                                onClick={toggleSearch}
                            >
                                <i className="fas fa-search"></i> {/* Search icon */}
                            </button>
                       </div>
                    )}

                    </div>
                )}

            </div>

             {/* <div
             className='w-0.5 h-full bg-black'
             >


             </div> */}
        </div>
    );
}

export default SearchUser;





{/* <i class="fa fa-search" aria-hidden="true"></i> */}
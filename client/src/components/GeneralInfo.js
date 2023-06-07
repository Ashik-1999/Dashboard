import React from 'react'

const GeneralInfo = () => {
  return (
    
        <div className='bg-white w-1/3 p-5'>
                <p className='font-semibold'>General inforamtion</p>
                <div className='flex p-1'>
                    <p className='text-gray-500'>Projects</p>
                    <div className='bg-gray-300 w-60 h-4 ml-4 mt-1 rounded-full ' >
                        <div className='bg-blue-600 w-24 h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>02/10</p>
                </div>

                <div className='flex flex-grow p-1'>
                    <p className='text-gray-500'>Users</p>
                    <div className='bg-gray-300 w-60 h-4 ml-8 mt-1 rounded-full ' >
                        <div className='bg-[#66E404]  h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>03/03</p>
                </div>


                <div className='flex flex-grow p-1'>
                    <p className='text-gray-500'>Channels</p>
                    <div className='bg-gray-300 w-60  h-4 ml-2 mt-1 rounded-full ' >
                        <div className='bg-[#E40404]  h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>10/10</p>
                </div>


                <div className='flex flex-grow p-1'>
                    <p className='text-gray-500'>Device</p>
                    <div className='bg-gray-300 w-60  h-4 ml-6 mt-1 rounded-full ' >
                        <div className='bg-[#0B3366] w-32 h-4  rounded-full'></div>
                    </div>
                    <p className='text-gray-300 ml-4'>05/10</p>
                </div>
            </div>
  
  )
}

export default GeneralInfo

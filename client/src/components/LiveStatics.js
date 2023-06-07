import React from 'react'

const LiveStatics = () => {
  return (
    <div>

    <div className='ml-3 w-1/3 flex  '>
      <div className='bg-white h-64 p-4 '>
         <p className='font-semibold  h-10'>Live statistics</p>   
         <div className='flex items-center'>


          <div>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300  border-l-[#FF9618] ml-2 mr-8">
                <p className='m-6 flex items-center  text-2xl text-gray-400'>15</p>
            </div>
            <button className="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2 flex items-center justify-center">
            <span className='font-normal text-sm pb-1 text-blue-400 '>Info</span>
         
          </button>
          </div>

      

          <div className=' '>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300  border-l-[#0B3366] border-t-[#0B3366] border-r-[#0B3366]   ml-2 mr-8 ">
                <p className='m-6 flex items-center  text-2xl text-gray-400'>27</p>
            </div>
            <button className="border border-blue-500 text-gray-700 font-bold rounded ml-6 mt-2 px-1 h-6 flex items-center justify-center" >
              <span className='font-normal text-sm pb-1 text-blue-400 '>   Warnings</span>
         
          </button>
          </div>


          <div className=' '>
            <div className=" w-24 h-24 rounded-full border-8 border-gray-300  border-b-[#C4FF96]  ml-2 ">
                <p className='m-6 flex items-center pl-2 text-2xl text-gray-400'>1</p>
            </div>
            <button className="border border-blue-500 text-gray-700 font-bold w-16 rounded ml-6 mt-2 flex items-center justify-center">
            <span className='font-normal text-sm pb-1 text-blue-400'>Errors</span>
          </button>
          </div>
       
         </div>
      </div>
    </div>
    
    </div>
  )
}

export default LiveStatics

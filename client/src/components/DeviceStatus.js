import React from 'react'
import ActivityLog from './ActivityLog'

const DeviceStatus = () => {
  return (
    <div className='flex'>
     <div className='mt-2  bg-white h-64  w-1/3  '>
      <p className='font-semibold m-4 mt-4 pt-4'>Device status</p>
   
     <div className=' h-40 overflow-y-scroll '>

      <table className=''>
        <thead>
            <tr className=''>
                <th className='mt-2 text-semibold'><span className=' mt-4'>Device Name</span></th>
                <th className=''><span className='p-2 mt-4'>Status</span></th>
                <th className=' mt-4'><span className='p-2 mt-4'>Last response</span></th>
            </tr>
        </thead>
        <tbody>
            <tr  className='bg-gray-200 mt-2 p-4'>
                <td className='mt-2 p-2'><span className='p-2 mt-4'>FutureIK device 01</span></td>
                <td><button className='bg-red-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>offline</span></button></td>
                <td ><span className='mt-4'>Fri Apr 26 2023 ; 03:00:10</span></td>
            </tr>

            <tr  className=' mt-2 p-2'>
                <td className='mt-2 p-2'><span className='p-2 mt-4'>FutureIK device 01</span></td>
                <td className=''><button className='  bg-red-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>offline</span></button></td>
                <td className=''><span className=' mt-4'>Fri Apr 26 2023 ; 15:00:10</span></td>
            </tr>

            <tr  className='bg-gray-200 mt-2 p-2'>
                <td className='mt-2 p-2'><span className='p-2 mt-4'>FutureIK Test 01</span></td>
                <td className=''><button className='  bg-green-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>online</span></button></td>
                <td className=''><span className=' mt-4'>Fri Apr 26 2023 ; 15:00:10</span></td>
            </tr>

            <tr  className=' mt-2'>
                <td className='mt-2 p-2'><span className='p-2 mt-4'>FutureIK Test 02</span></td>
                <td className=''><button className='  bg-green-800 rounded-md h-6 w-12 '> <span className='text-white text-sm'>online</span></button></td>
                <td className=''><span className='mt-4'>Fri Apr 26 2023 ; 12:00:10</span></td>
            </tr>
        </tbody>
        
      </table>
     </div>
     </div>
     <ActivityLog/>
    </div>
  )
}

export default DeviceStatus

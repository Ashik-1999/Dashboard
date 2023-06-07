import React from 'react'
import LocationImage from '../Images/Rectangle 182.png'

const Location = () => {
  return (
    <div className='ml-1 bg-white'>
        <p className='p-2'>Location -Devices</p>
        <div>
            <img src={LocationImage}  className='h-64'/>
        </div>
    </div>
  )
}

export default Location

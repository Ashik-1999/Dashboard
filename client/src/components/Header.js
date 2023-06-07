import React from 'react'
import account from '../Images/account 1.png'
import notification from '../Images/notification (2) 1.png'
import headset from '../Images/headset (1) 1.png'
import Content from './Content'

const Header = () => {
    
    
  return (
    <div className='w-full'>
        <div className=' flex h-16 bg-white justify-end items-center'>
            <div className='ml-2  w-64 pl-3 flex'>
               
                <img className='ml-12 w-6 h-6 cursor-pointer' src={headset}/>
                <img className='ml-12 w-6 h-6 cursor-pointer' src={notification}/>
                <img className='ml-12 w-6 h-6 cursor-pointer' src={account}/>
                
            </div>
        </div>
        <Content/>
    </div>
  )
}

export default Header

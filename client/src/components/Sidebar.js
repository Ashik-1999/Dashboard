import React from 'react'
import { useNavigate } from 'react-router-dom'
import dashboard from '../Images/dashboard.png'
import logo  from '../Images/logo-14 new 1.png'
import campaign from '../Images/campaign 1.png'
import channels  from '../Images/channels.png'
import commands from '../Images/command 1.png'
import arrow from '../Images/Vector 3.png'
import device  from '../Images/devices1 1.png'
import history  from '../Images/history 5.png'
import  medialibrary  from '../Images/media library 1.png'
import zone  from '../Images/zone 2.png'


const Sidebar = () => {


    const menus=[
        {icon:dashboard , name:'Dashboard'},
        {icon:campaign , name:'Campaigns'},
        {icon:commands , name:'Commands'},
        {icon:zone , name:'zones'},
        {icon:channels , name:'Channels'},
        {icon:medialibrary , name:'Devices'},
        {icon:device , name:'Media Library'},
        {icon:history , name:'History'}
    ]


  return (
    <section className='flex gap-6 relative'>
      <div className= "bg-[#0B3366]  h-screen w-48 duration-500 text-gray-100 px-4">
        <div className='py-3 flex justify-center'>
         <img src={logo} /> 
        </div>
        <img src={arrow} className='absolute top-[40%] left-[95%]'/>
        <div className='mt-4 flex flex-col  gap-4 relative'>
          {

           menus.map((menu, i) => (
              <div key={i} className="group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-blue-500 rounded-md" >
                <div><img src={menu.icon} alt='image' className='w-6 h-6'></img></div>
                <h2
                 
                  className="cursor-pointer duration-500 whitespace-pre">{menu.name}</h2>
                
              </div>
            
            ))
          }
        </div>    
      </div>
    </section>
  )
}

export default Sidebar

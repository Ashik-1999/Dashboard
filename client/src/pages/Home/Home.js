import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Content from '../../components/Content'

const Home = () => {
  return (
    <>
      <div className='flex bg-gray-100'>
            <Sidebar/>
            <Header/> 
      </div>
    </>
    
  )
}

export default Home

import React from 'react'
import Location from './Location'
import DomainQuota from './DomainQuota'

const RightSide = () => {
  return (
    <>
      <div className='w-[450px] flex flex-col'>
        <Location/>
        <DomainQuota/>
      </div>
    </>
  
  )
}

export default RightSide

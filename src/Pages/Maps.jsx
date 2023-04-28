import React from 'react'
import Navbar from '../Component/Navbar'
import map from '../Assets/maps.png'

export default function Maps() {
  return (
    <div className='fixed overflow-auto lineup'>
      <Navbar />
      <div className='flex items-center justify-center lg:h-[1800px] py-[150px]'>
        <img src={map} className='' alt="" />
      </div>
    </div>
  )
}

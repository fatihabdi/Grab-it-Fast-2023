import React from 'react'
import Navbar from '../Component/Navbar'
import comingsoon from '../Assets/comingsoon.png'
import comingsoonmobile from '../Assets/comingsoonmobile.png'

export default function LineUp() {
  return (
    <div className='lineup'>
      <Navbar />
      <div className='flex items-center justify-center h-screen'>
        {/* <h1 className='font-Normal lg:text-[128px] min-[300px]:text-[64px] text-white font-outline-4'>coming soon</h1> */}
        <img src={comingsoon} className='hidden md:block' alt="" />
        <img src={comingsoonmobile} className='md:hidden' alt="" />
      </div>
    </div>
  )
}

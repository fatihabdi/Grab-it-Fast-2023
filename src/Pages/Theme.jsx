import React from 'react'
import Navbar from '../Component/Navbar'
import judultheme from '../Assets/judultheme.png'
import isitheme from '../Assets/isitheme.png'
import thememobile from '../Assets/thememobile.png'

export default function Theme() {
  return (
    <div className='overflow-auto lineup min-[300px]:pt-[130px] md:pt-[230px] pb-[200px]'>
      <Navbar />
      <div className='flex flex-col items-center justify-center h-screen'>
        <img src={judultheme} className='hidden md:block' alt="" />
        <img src={isitheme} alt="" className='mt-[30px] md:block hidden' />
        <img src={thememobile} className='w-full md:hidden' alt="" />
      </div>
    </div>
  )
}

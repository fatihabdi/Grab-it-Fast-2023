import React from 'react'
import Navbar from '../Component/Navbar'
import bendera2 from '../Assets/bendera2.png'
import poster1 from '../Assets/poster1.png'
import poster2 from '../Assets/poster2.png'
import poster3 from '../Assets/poster3.png'
import poster4 from '../Assets/poster4.png'
import poster5 from '../Assets/poster5.png'

export default function ThrowbackPage() {
  return (
    <div className='lineup overflow-auto pb-[200px]'>
      <Navbar />
      <div className='flex flex-col items-center pt-[130px] justify-center'>
        <img src={bendera2} alt="" />
        <img src={poster1} className='w-full mt-[80px]' alt="" />
        <img src={poster2} className='w-full' alt="" />
        <img src={poster3} className='w-full' alt="" />
        <img src={poster4} className='w-full' alt="" />
        <img src={poster5} className='w-full' alt="" />
      </div>
    </div>
  )
}

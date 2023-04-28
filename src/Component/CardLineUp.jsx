import React from 'react'
import guest from '../Assets/guest.png'

export default function CardLineUp() {
  return (
    <div className='flex flex-col items-center group lg:mr-[54px] min-[300px]:mr-[20px]'>
      <img src={guest} alt="" className=''/>
      <h1 className='hidden text-white font-Normal group-hover:block font-outline-2 text-[36px] sticky -mt-[70px] font-bold'>cooming soon</h1>
    </div>
  )
}

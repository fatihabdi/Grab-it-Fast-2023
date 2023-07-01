import React from 'react'
import emina from '../Assets/emina.png'
import pahamify from '../Assets/pahamiffy.png'
import hydrococo from '../Assets/hydrococo.png'
import photoplace from '../Assets/Rectangle 42.png'

export default function Sponsorship() {
  return (
    <div className='border-[10px] border-white w-full h-[400px] bg-[#BCA7D0]'>
      <h1 className='font-Normal lg:text-[40px] min-[300px]:text-[20px] text-white text-center font-outline-1-purple font-bold mt-[10px]'>Sponsorship</h1>
      <div className='flex items-center justify-center gap-[30px] mt-5'>
        <img src={emina} alt="" className='min-[300px]:w-[59px] lg:w-[210px]' />
        <img src={pahamify} alt="" className='min-[300px]:w-[59px] lg:w-[210px]' />
        <img src={hydrococo} alt="" className='min-[300px]:w-[59px] lg:w-[210px]' />
        <img src={photoplace} alt="" className='min-[300px]:w-[59px] lg:w-[189px]' />
      </div>
    </div>
  )
}

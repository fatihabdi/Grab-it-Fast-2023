import React from 'react'
import gifpixel from '../Assets/gifpixel.png'
import ButtonPrimary from './ButtonPrimary'
import tulisanhome from '../Assets/tulisanhome.png'

export default function Hero() {
  return (
    <div className='lg:w-[867px] min-[300px]:w-[318px] lg:h-[1083px] min-[300px]:h-[430px] min-[300px]:border-[12px] lg:border-[28px] flex flex-col items-center border-[#35140F] bg-[#299CCB]'>
      <img src={gifpixel} alt="" className='lg:mt-[100px] min-[300px]:mt-[50px] min-[300px]:w-[277px] lg:w-[727px] lg:h-[309px] min-[300px]:h-[118px]' />
      {/* <h1 className='text-center font-Normal font-extrabold lg:text-[40px] min-[300px]:text-[20px] lg:font-outline-3 min-[300px]:font-outline-1 lg:mt-[100px] text-white'>29 JULY 2023</h1>
      <h1 className='text-center font-Normal font-extrabold lg:text-[40px] min-[300px]:text-[20px] lg:font-outline-3 min-[300px]:font-outline-1 lg:-mt-[25px] min-[300px]:mb-[57px] lg:mb-[88px] text-white'>GOR PADJAJARAN</h1> */}
      <img src={tulisanhome} className='md:mt-[94px] md:mb-[64px] min-[300px]:mt-[48px]' alt="" />
      <ButtonPrimary buttonClassName='max-md:mt-[30px]' />
    </div>
  )
}

import React from 'react'
import { ScrollingCarousel } from '@trendyol-js/react-carousel';
// import guest from '../Assets/guest.png'
import CardLineUp from './CardLineUp';

export default function Lineup() {
  return (
    <div className='pt-[50px]'>
      <div className='flex items-center justify-between pb-[100px]'>
        <div className='h-[25px] lg:w-[520px] min-[300px]:w-[120px] bg-[#35140F] border-r-[7px] border-t-[7px] border-b-[7px] border-white'></div>
        <h1 className='text-[#35140F] font-Normal lg:text-[40px] min-[300px]:text-[20px] lg:font-outline-2-white min-[300px]:font-outline-1-white'>Line Up</h1>
        <div className='h-[25px] lg:w-[520px] min-[300px]:w-[120px] bg-[#35140F] border-l-[7px] border-t-[7px] border-b-[7px] border-white'></div>
      </div>
      <div className='lg:pl-[98px] min-[300px]:pl-[20px] pb-[125px]'>
        <ScrollingCarousel>
          <CardLineUp />
          <CardLineUp />
          <CardLineUp />
          <CardLineUp />
        </ScrollingCarousel>
      </div>
    </div>
  )
}

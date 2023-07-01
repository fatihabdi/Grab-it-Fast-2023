import React from 'react'
import guest from '../../Assets/kevin.png'
import kevin_doang from '../../Assets/kevin_doang.png'
import tulisan_kevin from '../../Assets/tulisan_kevin.png'
import stroke from '../../Assets/stroke.png'

export default function CardLineUp4() {
  return (
    <div className='flex flex-col relative items-center group lg:mr-[54px] min-[300px]:mr-[20px]'>
      <img src={guest} alt="" className='sticky z-10'/>
      <img src={kevin_doang} className="absolute z-20 grayscale group-hover:grayscale-0" alt='' />
      <img src={tulisan_kevin} alt='' className='hidden text-white z-40 font-Normal group-hover:block sticky -mt-[120px] font-bold'/>
      <img src={stroke} alt="" className='absolute z-50' />
      <div className='absolute z-30 w-full h-full bg-gradient-to-t from-amber-900 to-transparent'></div>
    </div>
  )
}

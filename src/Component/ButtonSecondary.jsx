import React from 'react'

export default function ButtonSecondary(props) {
  return (
    <>
      <button className=''>
        <img src={props.button} alt="" className='sticky max-[768px]:w-[182px]' />
        {/* <h1 className='sticky -mt-[80px] font-Normal text-[36px] text-white'>{props.isi}</h1> */}
      </button>
    </>
  )
}

import React from 'react'

export default function ButtonSecondary(props) {
  return (
    <>
      <button className='' value={props.value} onChange={props.onChange}>
        <img src={props.button} alt="" className='sticky max-[768px]:w-[182px]' />
      </button>
    </>
  )
}

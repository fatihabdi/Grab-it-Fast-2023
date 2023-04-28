import React, { useState } from 'react'

export default function CardMascot(props) {
  const [ishover, sethover] = useState(false);

  function MouseOver() {
    sethover(true);
  }
  function MouseOut() {
    sethover(false);
  }
  return (
    <>
      <div onMouseOver={MouseOver} onMouseOut={MouseOut}>
        {ishover ? (
          <img src={props.imghover} className='' alt="" />
        ) : (
          <img src={props.img} className='max-[768px]:w-[220px]' alt="" />
        )}
      </div>
    </>
  )
}

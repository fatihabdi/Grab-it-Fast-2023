import React, { useState } from "react";

export default function CardThrowback(props) {
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
          <img src={props.imghover} alt="" />
        ) : (
          <img src={props.img} alt="" />
        )}
      </div>
    </>
  );
}

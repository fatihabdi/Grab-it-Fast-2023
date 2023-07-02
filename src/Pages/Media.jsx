import React from "react";
import Navbar from "../Component/Navbar";
import pahamify from "../Assets/pahamify.png";

export default function Media() {
  return (
    <div className="lineup overflow-auto max-md:pt-[130px] md:pt-[150px]">
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <img src={pahamify} alt="" />
      </div>
    </div>
  );
}

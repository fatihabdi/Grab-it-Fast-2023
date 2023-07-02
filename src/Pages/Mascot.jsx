import React from "react";
import Navbar from "../Component/Navbar";
import CardMascot from "../Component/CardMascot";
import ujang from "../Assets/ujang.png";
import ujang1 from "../Assets/ujang1.png";
import kasep from "../Assets/kasep.png";
import kasep1 from "../Assets/kasep1.png";
import geulis from "../Assets/geulis.png";
import geulis1 from "../Assets/geulis1.png";
import judulmascot from "../Assets/judulmascot.png";
import CardMascotMobile from "../Component/CardMascotMobile";
import judulmascotmobile from "../Assets/judulmascotmobile.png";

export default function Mascot() {
  return (
    <div className="overflow-auto lineup">
      <Navbar />
      <div className="flex relative flex-col md:h-screen items-center max-md:pt-[130px] md:pt-[150px] justify-center">
        {/* <h1 className='uppercase font-Normal lg:text-[64px] lg:font-outline-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FFC700] tracking-tighter'>introducing our mascot</h1> */}
        <img
          src={judulmascot}
          className="absolute hidden top-[120px] md:block"
          alt=""
        />
        <img src={judulmascotmobile} className="md:hidden" alt="" />
        <div className="md:flex hidden mt-[150px]">
          <CardMascot imghover={kasep} img={kasep1} />
          <CardMascot imghover={ujang} img={ujang1} />
          <CardMascot imghover={geulis} img={geulis1} />
        </div>
        <div className="md:hidden flex flex-col items-center justify-center mt-[22px]">
          <CardMascotMobile imghover={kasep} img={kasep1} />
          <CardMascotMobile imghover={ujang} img={ujang1} />
          <CardMascotMobile imghover={geulis} img={geulis1} />
        </div>
      </div>
    </div>
  );
}

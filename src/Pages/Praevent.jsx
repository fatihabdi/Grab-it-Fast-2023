import React from "react";
import Navbar from "../Component/Navbar";
import forcy_champ from "../Assets/forcy-champ.png";
import roadshow from "../Assets/roadshow.png";
import tryout from "../Assets/tryout.png";
import ButtonSecondary from "../Component/ButtonSecondary";
import { Link } from "react-router-dom";
import judulpraevent from "../Assets/judulpraevent.png";
import buttonaboutus from "../Assets/buttonaboutus.png";
import buttonmainevent from "../Assets/buttonmainevent.png";

export default function Praevent() {
  return (
    <div className="lineup overflow-auto pb-[100px] pt-[150px]">
      <Navbar />
      <div className="">
        {/* <h1 className="uppercase font-Normal lg:text-[110px] lg:font-outline-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FFC700] tracking-tighter">
          pra event
        </h1> */}
        <div className="flex justify-center">
          <img src={judulpraevent} className="max-[768px]:w-[298px]" alt="" />
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <img
            src={forcy_champ}
            className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] max-md:mt-[44px]"
            alt=""
          />
          <img
            src={roadshow}
            className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] max-md:mt-[8px]"
            alt=""
          />
          <img
            src={tryout}
            className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] max-md:mt-[8px]"
            alt=""
          />
        </div>
        <div className="md:flex hidden items-center justify-around mt-[30px]">
          <Link to="/aboutus">
            <ButtonSecondary button={buttonaboutus} />
          </Link>
          <Link to="/mainevent">
            <ButtonSecondary button={buttonmainevent} />
          </Link>
        </div>
      </div>
    </div>
  );
}

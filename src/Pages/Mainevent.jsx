import React from "react";
import Navbar from "../Component/Navbar";
import miniexpo from "../Assets/miniexpo.png";
import seminar from "../Assets/seminar.png";
import musiccomp from "../Assets/musiccomp.png";
import ButtonSecondary from "../Component/ButtonSecondary";
import { Link } from "react-router-dom";
import buttonaboutus from "../Assets/buttonaboutus.png";
import buttonpraevent from "../Assets/buttonpraevent.png";
import judulmainevent from "../Assets/judulmainevent.png";

export default function Mainevent() {
  return (
    <div className="lineup pb-[100px] pt-[150px] overflow-auto">
      <Navbar />
      {/* <h1 className="uppercase font-Normal lg:text-[110px] lg:font-outline-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-[#FFC700] pt-[150px] tracking-tighter">
        main event
      </h1> */}
      <div className="flex justify-center">
        <img src={judulmainevent} className="max-[768px]:w-[298px]" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center w-full">
        <img
          src={miniexpo}
          className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] min-[300px]:mt-[44px]"
          alt=""
        />
        <img
          src={seminar}
          className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] min-[300px]:mt-[8px]"
          alt=""
        />
        <img
          src={musiccomp}
          className="lg:w-[1223px] lg:h-[673px] md:mt-[80px] min-[300px]:mt-[8px]"
          alt=""
        />
      </div>
      <div className="md:flex hidden items-center justify-around mt-[30px]">
        <Link to="/aboutus">
          <ButtonSecondary button={buttonaboutus} />
        </Link>
        <Link to="/praevent">
          <ButtonSecondary button={buttonpraevent} />
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import guest from "../../Assets/bg_lineup.png";
import tulus_doang from "../../Assets/tulus_doang.png";
import tulisan_tulus from "../../Assets/tulisan_tulus.png";
import stroke from "../../Assets/stroke.png";

export default function CardLineUp() {
  return (
    <div className="flex flex-col relative items-center group lg:mr-[54px] max-md:mr-[20px]">
      <img src={guest} alt="" className="sticky z-10" />
      <img
        src={tulus_doang}
        className="absolute z-20 grayscale group-hover:grayscale-0"
        alt=""
      />
      <img
        src={tulisan_tulus}
        alt=""
        className="hidden text-white z-40 font-Normal group-hover:block sticky -mt-[430px] font-bold"
      />
      <img src={stroke} alt="" className="absolute z-50" />
      <div className="absolute z-30 w-full h-full bg-gradient-to-t from-amber-900 to-transparent"></div>
    </div>
  );
}

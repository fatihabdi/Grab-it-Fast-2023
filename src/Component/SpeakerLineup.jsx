import React from "react";
import cardkevin from "../Assets/cardkevin.png";
import kevinhover from "../Assets/kevinhover.png";
import CardPageLineUp from "./CardPageLineUp";
// import cardkevinmobile from "../Assets/cardkevinmobile.png";
import kevinhovermobile from "../Assets/kevinhovermobile.png";
import CardPageLineUpmobile from "./CardPageLineUpMobile";

export default function SpeakerLineup() {
  return (
    <div className="flex justify-center">
      <div className="hidden md:flex gap-[20px] max-md:flex-col justify-center">
        <CardPageLineUp img={cardkevin} imghover={kevinhover} />
      </div>
      <div className="flex md:hidden gap-[20px] max-md:flex-col justify-center">
        <CardPageLineUpmobile img={cardkevin} imghover={kevinhovermobile} />
      </div>
    </div>
  );
}

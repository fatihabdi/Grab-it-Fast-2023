import React from "react";
import cardtulus from "../Assets/cardtulus.png";
import cardnidji from "../Assets/cardnidji.png";
import cardjansen from "../Assets/cardjansen.png";
import CardPageLineUp from "./CardPageLineUp";
import nidjihover from "../Assets/nidjihover.png";
import tulushover from "../Assets/tulushover.png";
import jansenhover from "../Assets/jansenhover.png";
import CardPageLineUpMobile from "./CardPageLineUpMobile";
import nidjihovermobile from "../Assets/nidjihovermobile.png";
import tulushovermobile from "../Assets/tulushovermobile.png";
import jansenhovermobile from "../Assets/jansenhovermobile.png";

export default function GuestLineup() {
  return (
    <div className="">
      <div className="hidden md:flex gap-[20px] max-md:flex-col justify-center">
        <CardPageLineUp img={cardtulus} imghover={tulushover} />
        <CardPageLineUp img={cardnidji} imghover={nidjihover} />
        <CardPageLineUp img={cardjansen} imghover={jansenhover} />
      </div>
      <div className="flex md:hidden gap-[20px] max-md:flex-col justify-center">
        <CardPageLineUpMobile img={cardtulus} imghover={tulushovermobile} />
        <CardPageLineUpMobile img={cardnidji} imghover={nidjihovermobile} />
        <CardPageLineUpMobile img={cardjansen} imghover={jansenhovermobile} />
      </div>
    </div>
  );
}

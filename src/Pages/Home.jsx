import React from "react";
// import ButtonPrimary from "../Component/ButtonPrimary";
import Hero from "../Component/Hero";
import Navbar from "../Component/Navbar";
import cowo from "../Assets/cowo.png";
import cewe from "../Assets/cewe.png";
import Lineup from "../Component/Lineup";
import Throwback from "../Component/Throwback";
import Sponsorship from "../Component/Sponsorship";
import Media from "../Component/Media";

export default function Home() {
  return (
    <div className="home">
      <div className="flex flex-col items-center justify-center">
        <Navbar />
        <Hero />
        <img src={cowo} alt="" className="absolute right-0 mt-[150px] min-[300px]:hidden lg:block" />
        <img src={cewe} alt="" className="absolute left-0 mt-[150px] min-[300px]:hidden lg:block" />
      </div>
      <Lineup />
      <Throwback />
      <Sponsorship />
      <Media />
    </div>
  );
}

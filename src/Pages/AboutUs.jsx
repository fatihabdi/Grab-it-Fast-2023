import React from "react";
import Navbar from "../Component/Navbar";
// import bendera from "../Assets/bendera.png";
import judulaboutus from "../Assets/judulaboutus.png";
import tiang from "../Assets/tiang.png";
import tiangmobile from "../Assets/tiangmobile.png";
import ButtonSecondary from "../Component/ButtonSecondary";
import { Link } from "react-router-dom";
import buttonmainevent from "../Assets/buttonmainevent.png";
import buttonpraevent from "../Assets/buttonpraevent.png";

export default function AboutUs() {
  return (
    <div className="overflow-auto lineup">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-[150px]">
        <img src={judulaboutus} className="max-md:w-[360px]" alt="" />
      </div>
      <div className="w-full">
        <img src={tiang} alt="" className="w-full md:block max-[768px]:hidden" />
        <img src={tiangmobile} alt="" className="w-full max-[768px]:block md:hidden" />
        {/* <h1 className="w-[817px] sticky -mt-[570px] ml-[430px] text-[32px] font-Pixellari text-white text-justify">
          Grab It Fast 2022 merupakan kegiatan yang diselenggarakan oleh Family of
          Rain City (FORCY) Telkom University, yakni komunitas mahasiswa dari
          Bogor yang berada di Telkom University. Kegiatan ini menjadi salah satu
          upaya dalam mempromosikan Telkom University kepada masyarakat Bogor dan
          sekitarnya yang terdiri atas pra-event dan main event.
        </h1> */}
        <div className="md:-mt-[180px] min-[300px]:-mt-[70px] md:gap-[100px] min-[300px]:gap-[10px] flex justify-center items-center">
          <Link to="/praevent">
            <ButtonSecondary button={buttonpraevent} />
          </Link>
          <Link to="/mainevent">
            <ButtonSecondary button={buttonmainevent} />
          </Link>
        </div>
      </div>
    </div>
  );
}

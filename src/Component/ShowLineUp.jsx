import React, { useState, useEffect } from "react";
// import ButtonSecondary from "./ButtonSecondary";
import buttongueststars from "../Assets/buttongueststars.png";
import buttonspeaker from "../Assets/buttonspeaker.png";
import GuestLineup from "./GuestLineup";
import SpeakerLineup from "./SpeakerLineup";
import judul_lineup_mobile from "../Assets/judul_lineup_mobile.png";
import judul_lineup from "../Assets/judul_lineup.png";

export default function ShowLineUp() {
  const [showLineup, setShowLineup] = useState("gueststars");
  const [guestLineup, setGuestLineupVisible] = useState(false);
  const [speakerLineup, setSpeakerLineupVisible] = useState(false);
  const [className, setClassName] = useState("");
  const handlerOnChange = (value) => {
    setShowLineup(value);
    // console.log(value);
  };

  useEffect(() => {
    if (showLineup === "gueststars") {
      setGuestLineupVisible(true);
      setSpeakerLineupVisible(false);
      setClassName(
        "flex flex-col gap-[20px] mb-[30px] max-md:pt-[500px] lg:pt-[200px]"
      );
    } else if (showLineup === "speaker") {
      setGuestLineupVisible(false);
      setSpeakerLineupVisible(true);
      setClassName(
        "flex flex-col gap-[20px] mb-[30px] max-md:pt-[20px] lg:pt-[250px]"
      );
    }
  }, [showLineup]);

  return (
    <div className="md:top-[300px] max-md:top-[200px] flex flex-col z-20 justify-center items-center">
      <div className={className}>
        <img src={judul_lineup} alt="" className="hidden md:block" />
        <img src={judul_lineup_mobile} alt="" className="flex md:hidden" />
        <div className="flex gap-[20px]">
          <button
            className=""
            value="gueststars"
            onClick={() => handlerOnChange("gueststars")}
          >
            <img
              src={buttongueststars}
              alt=""
              className="sticky max-[768px]:w-[182px]"
            />
          </button>
          <button
            className=""
            value="speaker"
            onClick={() => handlerOnChange("speaker")}
          >
            <img
              src={buttonspeaker}
              alt=""
              className="sticky max-[768px]:w-[182px]"
            />
          </button>
        </div>
      </div>
      <div className="pb-[50px]">
        {guestLineup && <GuestLineup />}
        {speakerLineup && <SpeakerLineup />}
      </div>
    </div>
  );
}

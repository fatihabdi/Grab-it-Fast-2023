import React from "react";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import CardThrowback from "./CardThrowback";
import foto2018 from "../Assets/2018.png";
import foto2018hover from "../Assets/2018hover.png";
import foto2019 from "../Assets/2019.png";
import foto2019hover from "../Assets/2019hover.png";
import foto2020 from "../Assets/2020.png";
import foto2020hover from "../Assets/2020hover.png";
import foto2021 from "../Assets/2021.png";
import foto2021hover from "../Assets/2021hover.png";
import foto2022 from "../Assets/2022.png";
import foto2022hover from "../Assets/2022hover.png";

export default function Throwback() {
  return (
    <div>
      <div className="flex items-center justify-between pb-[100px]">
        <div className="h-[25px] lg:w-[520px] max-md:w-[90px] bg-[#35140F] border-r-[7px] border-t-[7px] border-b-[7px] border-white"></div>
        <h1 className="text-[#35140F] font-Normal lg:text-[40px] max-md:text-[20px] lg:font-outline-2-white max-md:font-outline-1-white">
          throwback
        </h1>
        <div className="h-[25px] lg:w-[520px] max-md:w-[90px] bg-[#35140F] border-l-[7px] border-t-[7px] border-b-[7px] border-white"></div>
      </div>
      <div className="lg:pl-[98px] max-md:pl-[20px] pb-[125px]">
        <ScrollingCarousel>
          <CardThrowback imghover={foto2018hover} img={foto2018} />
          <CardThrowback imghover={foto2019hover} img={foto2019} />
          <CardThrowback imghover={foto2020hover} img={foto2020} />
          <CardThrowback imghover={foto2021hover} img={foto2021} />
          <CardThrowback imghover={foto2022hover} img={foto2022} />
        </ScrollingCarousel>
      </div>
    </div>
  );
}

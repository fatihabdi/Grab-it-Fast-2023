import React from "react";
import clsx from "clsx";

export default function ButtonPrimary(props) {
  return (
    <button
      className={clsx(
        props.buttonClassName,
        "lg:w-[630px] lg:h-[147px] max-md:w-[242px] max-md:h-[61px] max-md:border-[7px] lg:border-[12px] border-[#35140F] hover:border-[#902419] hover:bg-[#D1382A] shadow-2xl font-Normal font-bold lg:text-[64px] max-md:text-[24px] max-md:font-outline-2 lg:font-outline-4 text-white flex items-center justify-center"
      )}
    >
      BUY TICKETS
    </button>
  );
}

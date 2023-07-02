import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import telkom from "../Assets/telkom.png";
import forcy from "../Assets/forcy.png";
import gif from "../Assets/gif.png";
import navmobile from "../Assets/navmobile.png";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="bg-white z-[60] flex justify-between fixed w-full top-0 items-center md:h-[90px] max-md:h-[49px] shadow-lg font-Normal px-[40px] uppercase">
      <div className="gap-[40px] text-[20px] max-md:hidden lg:flex">
        <Link to="/">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            HOME
          </h1>
        </Link>
        <Link to="/aboutus">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/aboutus" ||
              location.pathname === "/praevent" ||
              location.pathname === "/mainevent"
                ? "text-yellow-400 font-outline-2 text-[25px]"
                : ""
            }`}
          >
            About us
          </h1>
        </Link>
        <Link to="/lineup">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/lineup" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            line up
          </h1>
        </Link>
        <Link to="/maps">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/maps" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            maps
          </h1>
        </Link>
        <Link to="/mascot">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/mascot" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            mascot
          </h1>
        </Link>
        <Link to="/theme">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/theme" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            theme
          </h1>
        </Link>
        <Link to="/throwback">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/throwback" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            throwback
          </h1>
        </Link>
        <Link to="/media">
          <h1
            className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
              location.pathname === "/media" &&
              "text-yellow-400 font-outline-2 text-[25px]"
            }`}
          >
            media
          </h1>
        </Link>
      </div>
      <div className="flex">
        <img src={telkom} alt="" className="lg:mr-[20px] w-10 h-10" />
        <img src={forcy} alt="" className="w-10 h-10" />
        <img src={gif} alt="" className="h-10 w-14" />
      </div>
      <button onClick={handleOpen} className="max-md:block lg:hidden">
        <img src={navmobile} alt="" />
      </button>
      {open && (
        <div className="fixed top-0 left-0 z-10 flex flex-col gap-[11px] items-center justify-center w-full h-full bg-[#299CCB] border-[8px] border-[#35140F]">
          <AiOutlineClose
            onClick={handleOpen}
            className="absolute top-0 right-0 m-[20px] text-[25px] cursor-pointer"
          />
          <Link to="/">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                HOME
              </h1>
            </div>
          </Link>
          <Link to="/aboutus">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/aboutus" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                About us
              </h1>
            </div>
          </Link>
          <Link to="/lineup">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/lineup" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                line up
              </h1>
            </div>
          </Link>
          <Link to="/maps">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/maps" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                maps
              </h1>
            </div>
          </Link>
          <Link to="/mascot">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/mascot" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                mascot
              </h1>
            </div>
          </Link>
          <Link to="/theme">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/theme" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                theme
              </h1>
            </div>
          </Link>
          <Link to="/throwback">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/throwback" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                throwback
              </h1>
            </div>
          </Link>
          <Link to="/media">
            <div className="border-[5px] border-[#000000] w-[201px] h-[59px] flex justify-center items-center">
              <h1
                className={`hover:text-[25px] hover:text-yellow-400 hover:font-outline-2 sm:hidden lg:block ${
                  location.pathname === "/media" &&
                  "text-yellow-400 font-outline-2 text-[25px]"
                }`}
              >
                media
              </h1>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

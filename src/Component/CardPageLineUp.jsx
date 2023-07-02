import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CardPageLineUp(props) {
  // const [ishover, sethover] = useState(false);
  let [isOpen, setIsOpen] = useState(false);

  // function MouseOver() {
  //   sethover(true);
  // }
  // function MouseOut() {
  //   sethover(false);
  // }
  return (
    <>
      <div className="">
        <img
          src={props.img}
          onClick={() => setIsOpen(true)}
          className=""
          alt=""
        />
        <Transition
          show={isOpen}
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          as={Fragment}
        >
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="fixed inset-0 z-50 overflow-y-auto"
          >
            <div className="flex items-center justify-center min-h-screen">
              <div
                className="fixed inset-0 w-screen h-full bg-black opacity-30"
                aria-hidden="true"
              />
              <Dialog.Overlay className="fixed inset-0" />
              <div className="z-50">
                <img src={props.imghover} className="max-2xl:w-[1000px] mt-10" alt="" />
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

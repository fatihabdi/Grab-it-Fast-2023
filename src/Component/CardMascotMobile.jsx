import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function CardMascotMobile(props) {
  let [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <img
          src={props.img}
          onClick={() => setIsOpen(true)}
          className="max-[768px]:w-[220px]"
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
                className="fixed inset-0 bg-black opacity-30"
                aria-hidden="true"
              />
              <Dialog.Overlay className="fixed inset-0" />
              <div className="z-50">
                <img src={props.imghover} className="w-[380px]" alt="" />
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
}

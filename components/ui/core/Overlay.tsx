import React from "react";
import { IoIosArrowDown } from "react-icons/io";

interface OverlayProps {
  children: React.ReactNode;
  handleOverlayClose: () => {};
}

const Overlay = ({ children, handleOverlayClose }: OverlayProps) => {
  return (
    <div className=" bg-white drop-shadow-lg rounded-t-lg fixed bottom-0 w-full z-50 left-0 ">
      <div onClick={handleOverlayClose}>
        <IoIosArrowDown className="text-center h-12 mx-auto" size="1.5rem" />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Overlay;

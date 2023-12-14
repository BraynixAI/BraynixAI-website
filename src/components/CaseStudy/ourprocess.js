import React, { useState } from "react";

function OurProcess() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div className="lg:bg-transparent bg-violetPrimery lg:mt-20">
      <div className="flex flex-col justify-center items-center space-y-10">
        <p className="hidden lg:block text-white text-center font-semibold lg:text-5xl text-3xl">
          Our Process
        </p>
        {/* <div className="grid grid-cols-4 lg:gap-20 gap-5 "> */}
        <div className="flex lg:space-x-20 space-x-10 ">
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 1
                  ? "lg:h-44 lg:w-44 h-5 w-5 rounded-full flex justify-center items-center p-5  bg-blue-950 cursor-pointer"
                  : "lg:h-44 lg:w-44 h-5 w-5 rounded-full flex justify-center items-center p-5   bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(1)}
            >
              <img src="images/discovery.svg" className="" />
              {/* <img src="images/d2.svg" className="" /> */}
            </div>
            <p
              className={`${
                tab === 1
                  ? "text-[#188AEC] font-medium lg:text-3xl text-xs"
                  : "text-white font-medium lg:text-3xl text-xs"
              }`}
            >
              Discover
            </p>
          </div>{" "}
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 2
                  ? "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5 bg-blue-950  cursor-pointer"
                  : "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5   bg-white  cursor-pointer"
              }`}
              onClick={() => handelOnClick(2)}
            >
              <img src="images/copywriting.svg" className="" />
            </div>
            <p
              className={`${
                tab === 2
                  ? "text-[#188AEC] font-medium lg:text-3xl text-xs"
                  : "text-white font-medium lg:text-3xl text-xs"
              }`}
            >
              Define
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 3
                  ? "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5 bg-blue-950 cursor-pointer"
                  : "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5  bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(3)}
            >
              <img src="images/caseidea.svg" className="" />
            </div>
            <p
              className={`${
                tab === 3
                  ? "text-[#188AEC] font-medium lg:text-3xl text-xs"
                  : "text-white font-medium lg:text-3xl text-xs"
              }`}
            >
              Ideate
            </p>
          </div>{" "}
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 4
                  ? "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5 bg-blue-950 cursor-pointer"
                  : "lg:h-44 lg:w-44 h-4 w-4 rounded-full flex justify-center items-center p-5  bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(4)}
            >
              <img src="images/design.svg" className="h-[]" />
            </div>
            <p
              className={`${
                tab === 4
                  ? "text-[#188AEC] font-medium lg:text-3xl text-xs"
                  : "text-white font-medium lg:text-3xl text-xs"
              }`}
            >
              Design
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;

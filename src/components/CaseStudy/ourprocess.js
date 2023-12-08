import React, { useState } from "react";

function OurProcess() {
  const [tab, setTab] = useState(1);
  const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div className="lg:bg-transparent bg-violetPrimery mt-20">
      <div className="flex flex-col justify-center items-center space-y-10">
        <p className="text-white text-center font-semibold lg:text-5xl text-3xl">
          Our Process
        </p>
        <div className="grid lg:grid-cols-4 gap-20 ">
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 1
                  ? "h-44 w-44 rounded-full flex justify-center items-center p-5 bg-blue-950 cursor-pointer"
                  : "h-44 w-44 rounded-full flex justify-center items-center p-5  bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(1)}
            >
              <img src="images/discovery.svg" className="" />
            </div>
            <p
              className={`${
                tab === 1
                  ? "text-[#188AEC] font-medium text-3xl"
                  : "text-white font-medium text-3xl"
              }`}
            >
              Discover
            </p>
          </div>{" "}
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 2
                  ? "h-44 w-44 rounded-full flex justify-center items-center p-5 bg-blue-950  cursor-pointer"
                  : "h-44 w-44 rounded-full flex justify-center items-center p-5   bg-white  cursor-pointer"
              }`}
              onClick={() => handelOnClick(2)}
            >
              <img src="images/copywriting.svg" className="" />
            </div>
            <p
              className={`${
                tab === 2
                  ? "text-[#188AEC] font-medium text-3xl"
                  : "text-white font-medium text-3xl"
              }`}
            >
              Define
            </p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 3
                  ? "h-44 w-44 rounded-full flex justify-center items-center p-5 bg-blue-950 cursor-pointer"
                  : "h-44 w-44 rounded-full flex justify-center items-center p-5  bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(3)}
            >
              <img src="images/caseidea.svg" className="" />
            </div>
            <p
              className={`${
                tab === 3
                  ? "text-[#188AEC] font-medium text-3xl"
                  : "text-white font-medium text-3xl"
              }`}
            >
              Ideate
            </p>
          </div>{" "}
          <div className="flex flex-col items-center space-y-5">
            <div
              className={` ${
                tab === 4
                  ? "h-44 w-44 rounded-full flex justify-center items-center p-5 bg-blue-950 cursor-pointer"
                  : "h-44 w-44 rounded-full flex justify-center items-center p-5  bg-white cursor-pointer"
              }`}
              onClick={() => handelOnClick(4)}
            >
              <img src="images/design.svg" className="h-[]" />
            </div>
            <p
              className={`${
                tab === 4
                  ? "text-[#188AEC] font-medium text-3xl"
                  : "text-white font-medium text-3xl"
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

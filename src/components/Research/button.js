import React, { useState } from "react";

function ResearchButton() {
  const [tab, setTab] = useState(1);
  //   const [tab2, setTab2] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const handelOnClick = (number) => {
    setTab(number);
  };
  return (
    <div className="flex justify-center bg-violetPrimery pt-5">
      <div className="flex overflow-x-scroll md:overflow-x-hidden w-full justify-center px-2  lg:w-1/2  lg:ml-10 text-sm text-gray-500 font-medium">
        <button
          className={` ${
            tab === 1
              ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-4  border-blue-400 text-white"
              : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 border-gray-400 text-gray-400 "
          }`}
          onClick={() => handelOnClick(1)}
        >
          Projects
        </button>
        <button
          className={` ${
            tab === 2
              ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-4  border-blue-400 text-white"
              : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 border-gray-400 text-gray-400 "
          }`}
          onClick={() => handelOnClick(2)}
        >
          <p className="flex ">
            Conference{" "}
            <span className="hidden md:block ml-2">publications</span>
          </p>
        </button>
        <button
          className={` ${
            tab === 3
              ? "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-4  border-blue-400 text-white"
              : "w-full flex-1 p-1 md:py-5 md:px-2 font-semibold shadow-md border-b-2 border-gray-400  text-gray-400 "
          }`}
          onClick={() => handelOnClick(3)}
        >
          Patents filed
        </button>

        {/* </div> */}
      </div>
    </div>
  );
}

export default ResearchButton;

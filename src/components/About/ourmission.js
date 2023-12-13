import React from "react";

function OurMission() {
  return (
    <div className="flex items-center w-full  bg-violetPrimery md:py-40 py-5">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-10 md:mx-20 mx-4">
        <div className="md:w-1/2 flex-1 md:space-y-5 flex flex-col items-center md:items-start">
          <p className="text-white font-medium md:text-5xl text-3xl ">
            Our Mission
          </p>
          <p className="font-normal md:text-sm text-xs text-gray-300 md:text-white md:w-5/6 md:leading-8 leading-7 text-center md:text-start mt-2">
            To become the world's largest customer centric AI company with
            products flourishing in myriad of streams by determining the
            business requirements and developing solutions to cater its needs.
          </p>
          <div className="flex items-center md:hidden mt-5">
            <img src="images/bluecircle.svg" className="absolute h-8 " />
            <p className="text-white text-base font-normal z-10 ml-5">
              Explore more
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex  ">
          <div className="hidden md:block">
            <div className=" flex m-2 relative">
              <img
                src="images/rectangle4238.svg"
                className="absolute -top-10 -left-10 z-0"
              />
              <img src="images/rocket.svg" className="z-10 mx-auto" />
              <img
                src="images/rectangle4239.svg"
                className="absolute z-0 -bottom-10 -right-10"
              />
            </div>
          </div>
          <div className="md:hidden">
            <img src="images/group70624.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;

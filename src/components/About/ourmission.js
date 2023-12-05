import React from "react";

function OurMission() {
  return (
    <div className="flex items-center w-full  bg-violetPrimery py-40">
      <div className="flex  justify-between items-center space-x-10 mx-20">
        <div className="w-1/2 flex-1 space-y-5">
          <p className="text-white font-medium text-5xl">Our Mission</p>
          <p className="font-normal text-sm text-white w-3/4 leading-8">
            To become the world's largest customer centric AI company with
            products flourishing in myriad of streams by determining the
            business requirements and developing solutions to cater its needs.
          </p>
          <div className="flex items-center">
            <img src="images/bluecircle.svg" className="absolute" />
            <p className="text-white text-base font-normal z-10 ml-10">
              Explore more
            </p>
          </div>
        </div>
        <div className="w-1/2 flex ">
          <div className="flex m-2 relative">
            <img
              src="images/rectangle4238.svg"
              className="absolute -top-10 -left-10 z-0"
            />
            <img src="images/rocket.svg" className="z-50 mx-auto" />
            <img
              src="images/rectangle4239.svg"
              className="absolute z-0 -bottom-10 -right-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurMission;

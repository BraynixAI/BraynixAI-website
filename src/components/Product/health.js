import React from "react";

function HealthCare() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery py-40">
        <div className="flex  justify-between items-center space-x-10 mx-20">
          <div className="w-1/2 flex-1 space-y-5">
            <p className="text-white font-medium text-5xl">
              Healthcare and Solutions
            </p>
            <p className="font-normal text-sm text-white w-3/4 leading-8">
              Built in collaboration with medical professionals, and trained on
              real-world datasets. Intelligent AI-based diagnosis that examines
              each scan for multiple complications at once.
            </p>
            <div className="flex items-center">
              <img src="images/bluecircle.svg" className="absolute" />
              <p className="text-white text-base font-normal z-10 ml-10">
                More Details
              </p>
            </div>
          </div>
          <div className="w-1/2 flex ">
            <div className="flex m-2 relative">
              <img
                src="images/circle2.svg"
                className="absolute -top-10 -left-10 z-0"
              />
              <img
                src="images/proboto.svg"
                className="z-50 mx-auto rounded-xl"
              />
              <img
                src="images/halfcircle2.svg"
                className="absolute z-0 -bottom-10 -right-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCare;

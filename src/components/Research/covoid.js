import React from "react";

function Covoid19() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery py-40">
        <div className="flex  justify-between items-center space-x-10 mx-20">
          <div className="w-1/2 flex ">
            <div className="flex m-2 relative">
              {/* <img
                src="images/halfcircle3.svg"
                className="absolute -top-12 -left-10 z-0"
              /> */}
              <img
                src="images/proboto.svg"
                className="z-50 mx-auto rounded-xl"
              />
              {/* <img
                src="images/circle2.svg"
                className="absolute z-0 -bottom-12 -right-10"
              /> */}
            </div>
          </div>
          <div className="w-1/2 flex-1 space-y-5 ">
            <p className="text-blue-500 font-medium text-2xl">
              COVID-19 Detection
            </p>
            <p className="font-normal text-sm text-white w-3/4 leading-8">
              An exhaustive, all-in-one solution, built to digitalize the legal
              sector. Intuitive workflow for both lawyers and clients that
              simplifies operational procedures.
            </p>
            <div className="flex items-center">
              <img src="images/bluecircle.svg" className="absolute" />
              <p className="text-white text-base font-normal z-10 ml-10">
                More Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Covoid19;

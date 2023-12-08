import React from "react";

function LogicalSolution() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery lg:py-40">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-y-5   lg:space-x-10 mx-2 lg:mx-20">
          <div className="lg:w-1/2 flex mt-5 lg:mt-0">
            <div className="flex m-2 relative">
              <img
                src="images/halfcircle3.svg"
                className="absolute -top-12 -left-10 z-0  hidden lg:block"
              />
              <img
                src="images/smartphone.svg"
                className="z-50 mx-auto rounded-xl"
              />
              <img
                src="images/circle2.svg"
                className="absolute z-0 -bottom-12 -right-10  hidden lg:block"
              />
            </div>
          </div>
          <div className="lg:w-1/2 flex-1  lg:space-y-5 space-y-3 ">
            <p className="text-white font-medium lg:text-5xl text-3xl">
              Legal Solution
            </p>
            <p className="font-normal text-sm text-white lg:w-3/4 leading-8">
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

export default LogicalSolution;

import React from "react";

function OutDetection() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery md:py-40 py-10">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center md:space-x-10 mx-2 md:mx-20">
          <div className="md:w-1/2 flex-1 space-y-5 mt-5 md:mt-0  px-2">
            <p className="text-blue-500 font-medium text-2xl">
              Component wear out detection
            </p>
            <p className="font-normal text-sm text-white md:w-3/4 leading-8  text-justify md:text-start mt-3 md:mt-0">
              The deformation detection of mechanical components in one of the
              most challenging and crucial issue in the production process. To
              tackle such problem, segmentation methods are applied to focus on
              the area of interest(AOI). Further the total area of original
              product’s segmented AOI and worn out product’s AOI is compared to
              check if it is within tolerance limit.
            </p>
            <div className="flex items-center mt-5 md:mt-0">
              <img
                src="images/bluecircle.svg"
                className="absolute h-8 md:h-auto"
              />
              <p className="text-white text-base font-normal z-10 md:ml-10 ml-5">
                More Details
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex ">
            <div className="flex m-2 relative">
              {/* <img
                src="images/circle2.svg"
                className="absolute -top-10 -left-10 z-0"
              /> */}
              <img
                src="images/smartphone.svg"
                className="z-50 mx-auto rounded-xl"
              />
              {/* <img
                src="images/halfcircle2.svg"
                className="absolute z-0 -bottom-10 -right-10"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutDetection;

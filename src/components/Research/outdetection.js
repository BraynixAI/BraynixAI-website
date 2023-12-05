import React from "react";

function OutDetection() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery py-40">
        <div className="flex  justify-between items-center space-x-10 mx-20">
          <div className="w-1/2 flex-1 space-y-5">
            <p className="text-blue-500 font-medium text-2xl">
              Component wear out detection
            </p>
            <p className="font-normal text-sm text-white w-3/4 leading-8">
              The deformation detection of mechanical components in one of the
              most challenging and crucial issue in the production process. To
              tackle such problem, segmentation methods are applied to focus on
              the area of interest(AOI). Further the total area of original
              product’s segmented AOI and worn out product’s AOI is compared to
              check if it is within tolerance limit.
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

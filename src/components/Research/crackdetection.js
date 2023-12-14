import React from "react";

function CrackDetection() {
  return (
    <div>
      <div className="flex  items-center w-full  bg-violetPrimery md:py-40 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10 mx-2 md:mx-20">
          <div className="md:w-1/2 flex ">
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
          <div className="md:w-1/2 flex-1 md:space-y-5 mt-5 md:mt-0  px-2">
            <p className="text-blue-500 font-medium text-2xl">
              Crack Detection using Deep Learning
            </p>
            <p className="font-normal text-sm text-white md:w-3/4 leading-8  text-justify md:text-start mt-3 md:mt-0">
              Cracks lead to fracture and failure of the mechanical components,
              thus detection of cracks are inseparable part of manufacturing and
              maintenance. To detect the cracks, segmentation and ml techniques
              are applied. The minimum area bounding box is perceived for the
              dimension estimation of the cracks.
            </p>
            <div className="flex items-center  mt-5 md:mt-0 ">
              <img
                src="images/bluecircle.svg"
                className="absolute h-8 md:h-auto"
              />
              <p className="text-white text-base font-normal z-10 md:ml-10 ml-5">
                More Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrackDetection;

import React from "react";

function HealthCare() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery lg:py-40">
        {/* <div className="flex flex-col-reverse lg:flex-row justify-between items-center space-y-5   lg:space-x-10 mx-2 lg:mx-20"> */}
        <div className="flex lg:flex-row flex-col-reverse  justify-between items-center space-y-5 lg:space-x-10 mx-2 lg:mx-20">
          <div className="lg:w-1/2 flex-1 md:space-y-5 flex flex-col md:justify-start md:items-start justify-center items-center">
            <p className="text-white font-medium lg:text-5xl text-3xl md:w-4/6 text-center md:text-start ">
              Healthcare and Solutions
            </p>
            <p className="font-normal text-sm text-white lg:w-3/4 md:leading-8 leading-6 text-center md:text-start">
              Built in collaboration with medical professionals, and trained on
              real-world datasets. Intelligent AI-based diagnosis that examines
              each scan for multiple complications at once.
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
          <div className="lg:w-1/2 flex ">
            <div className="flex m-2 relative">
              <img
                src="images/circle2.svg"
                className="absolute -top-10 -left-10 z-0 hidden lg:block"
              />
              <img
                src="images/proboto.svg"
                className="z-10 mx-auto rounded-xl"
              />
              <img
                src="images/halfcircle2.svg"
                className="absolute z-0 -bottom-10 -right-10  hidden lg:block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthCare;

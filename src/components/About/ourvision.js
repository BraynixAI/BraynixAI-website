import React from "react";

function OurVision() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery md:py-40 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10 md:mx-20 mx-4">
          <div className="md:w-1/2 flex ">
            <div className="hidden md:block">
              <div className="flex m-2 relative">
                <img
                  src="images/rectangle4240.svg"
                  className="absolute -top-12 -left-10 z-0"
                />
                <img
                  src="images/arrow.svg"
                  className="z-50 mx-auto rounded-xl"
                />
                <img
                  src="images/rectangle4238.svg"
                  className="absolute z-0 -bottom-12 -right-10"
                />
              </div>
            </div>
            <div className="md:hidden">
              <img src="images/group70625.svg" />
            </div>
          </div>
          <div className="md:w-1/2 flex-1 md:space-y-5 flex flex-col items-center md:items-start">
            <p className="text-white font-medium md:text-5xl text-3xl ">
              Our Vision
            </p>
            <p className="font-normal md:text-sm text-xs text-gray-300 md:text-white md:w-4/6 md:leading-8 leading-7 text-center md:text-start mt-2">
              Braynix AI envisions a world where AI gives a human touch to
              industries beyond the boundaries of software and hardware
              congruency. We look forward to serve the world with technology
              that enhances the life of users without compromising on data
              privacy and security thereby promoting the ethical and progressive
              use of technology.
            </p>
            <div className="flex items-center md:hidden mt-5">
              <img src="images/bluecircle.svg" className="absolute h-8 " />
              <p className="text-white text-base font-normal z-10 ml-5">
                Explore more
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurVision;

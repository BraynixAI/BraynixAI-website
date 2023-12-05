import React from "react";

function OurVision() {
  return (
    <div>
      <div className="flex items-center w-full  bg-violetPrimery py-40">
        <div className="flex  justify-between items-center space-x-10 mx-20">
          <div className="w-1/2 flex ">
            <div className="flex m-2 relative">
              <img
                src="images/rectangle4240.svg"
                className="absolute -top-12 -left-10 z-0"
              />
              <img src="images/arrow.svg" className="z-50 mx-auto rounded-xl" />
              <img
                src="images/rectangle4238.svg"
                className="absolute z-0 -bottom-12 -right-10"
              />
            </div>
          </div>
          <div className="w-1/2 flex-1 space-y-5 ">
            <p className="text-white font-medium text-5xl">Our Vision</p>
            <p className="font-normal text-sm text-white w-3/4 leading-8">
              Braynix AI envisions a world where AI gives a human touch to
              industries beyond the boundaries of software and hardware
              congruency. We look forward to serve the world with technology
              that enhances the life of users without compromising on data
              privacy and security thereby promoting the ethical and progressive
              use of technology.
            </p>
            <div className="flex items-center">
              <img src="images/bluecircle.svg" className="absolute" />
              <p className="text-white text-base font-normal z-10 ml-10">
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

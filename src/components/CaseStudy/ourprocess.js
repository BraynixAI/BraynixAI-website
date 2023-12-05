import React from "react";

function OurProcess() {
  return (
    <div className="bg-violetPrimery ">
      <div className="flex flex-col justify-center items-center space-y-10">
        <p className="text-white text-center font-semibold text-3xl">
          Our Process
        </p>
        <div className="flex space-x-20 justify-center">
          <div className="flex flex-col items-center space-y-5">
            <div className="h-20 w-20 rounded-full flex justify-center items-center p-5 bg-white ">
              <img src="images/discovery.svg" className="h-[51px]" />
            </div>
            <p className="text-white">Discover</p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="h-20 w-20 rounded-full flex justify-center items-center p-5 bg-white">
              <img src="images/copywriting.svg" className="h-[30px]" />
            </div>
            <p className="text-white">Define</p>
          </div>
          <div className="flex flex-col items-center space-y-5">
            <div className="h-20 w-20 rounded-full flex justify-center items-center p-5 bg-white">
              <img src="images/caseidea.svg" className="h-[51px]" />
            </div>
            <p className="text-white">Ideate</p>
          </div>{" "}
          <div className="flex flex-col items-center space-y-5">
            <div className="h-20 w-20 rounded-full flex justify-center items-center p-5 bg-white">
              <img src="images/design.svg" className="h-[31px]" />
            </div>
            <p className="text-white">Design</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurProcess;

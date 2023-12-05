import React from "react";

function Slider() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/products.svg" className="h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">
              Trust us to build your application
            </p>
            <p className="font-normal text-base text-gray-400 w-4/6 text-center px-5">
              We have worked with various kinds of clients from more than 50
              countries around the world and we continue to strive to provide
              the best service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

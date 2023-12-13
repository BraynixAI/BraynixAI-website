import React from "react";
import Slider from "./slider";
import SliderImages from "./sliderimages";

function ProductSlider() {
  return (
    <div className="py-5 bg-violetPrimery bg-wave3-bg bg-cover bg-center w-full">
      <div className=" w-full justify-center items-center flex flex-col px-2">
        <img src="images/products.svg" className="lg:h-16" />
        <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
          <p className="font-bold lg:text-4xl text-2xl px-2 text-center text-white">
            Trust us to build your application
          </p>
          <p className="font-normal lg:text-base text-sm text-gray-400 lg:w-4/6 text-center px-5">
            We have worked with various kinds of clients from more than 50
            countries around the world and we continue to strive to provide the
            best service
          </p>
        </div>
      </div>
      <Slider />
      {/* <div className=" ">
        {[0, 1, 2].map((item) => (
          <div className="rounded-2xl">
            <img src="images/sl-img.svg" />
            <div className="p-5 bg-gray-800 space-y-3 ">
              <p className="text-white font-medium text-xl">Vitmeds</p>
              <p className="text-gray-300 font-normal text-base">
                Best Medical online service.
              </p>
              <button className="flex items-center space-x-3">
                <img src="images/lbutton.svg" />
                <p className="text-white  font-normal text-base">
                  Explore more
                </p>
              </button>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default ProductSlider;

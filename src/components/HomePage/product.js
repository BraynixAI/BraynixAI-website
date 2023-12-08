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
      <Slider sliders={SliderImages} />
    </div>
  );
}

export default ProductSlider;

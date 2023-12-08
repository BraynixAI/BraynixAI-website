import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Carousel } from "react-responsive-carousel";
import ReactSimplyCarousel from "react-simply-carousel";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import SliderImages from "./sliderimages";

// const data = [
//   {
//     image: "images/sl-img.svg",
//   },
// ];

function Slider() {
  // const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div>
      <div className="py-5 bg-violetPrimery bg-wave3-bg bg-cover bg-center w-full">
        <div className=" w-full justify-center items-center flex flex-col px-2">
          <img src="images/products.svg" className="lg:h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold lg:text-4xl text-2xl px-2 text-center text-white">
              Trust us to build your application
            </p>
            <p className="font-normal lg:text-base text-sm text-gray-400 lg:w-4/6 text-center px-5">
              We have worked with various kinds of clients from more than 50
              countries around the world and we continue to strive to provide
              the best service
            </p>
          </div>
        </div>

        <div className="w-full my-10 hidden md:block">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              {/* <div className="rounded-2xl">
                <img src="images/sl-img.svg" />
                <div className="p-5 bg-gray-800 space-y-3 ">
                  <p className="text-white font-medium text-xl">Vitmeds</p>
                  <p className="text-gray-300 font-normal text-base">
                    Best Medical online service.
                  </p>
                  <button className="flex items-center space-x-3 ">
                    <img src="images/lbutton.svg" />
                    <p className="text-white  font-normal text-base">
                      Explore more
                    </p>
                  </button>
                </div>
              </div> */}
              <SliderImages />
            </SwiperSlide>
            <SwiperSlide>
              <SliderImages />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <SliderImages />
            </SwiperSlide>{" "}
            <SwiperSlide>
              <SliderImages />
            </SwiperSlide>
            {/* <SwiperSlide>
              <img src="images/sl-img.svg" />
            </SwiperSlide> */}
          </Swiper>
        </div>
        <div className=" hidden md:block">
          <div className="flex justify-center space-x-10">
            <button className="text-white ">
              <img src="images/leftbutton.svg" />
            </button>

            <button className="text-white ">
              <img src="images/rightbutton.svg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

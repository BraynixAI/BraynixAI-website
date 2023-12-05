import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeBar from "./marque";

function Welcome() {
  return (
    <div className="bg-violetPrimery bg-wave-bg">
      <div className=" max-w-7xl mx-auto ">
        <div className="justify-center  text-center  space-y-5 py-10">
          <div className="flex justify-center items-center flex-col text-center space-y-5">
            <p className=" font-bold  lg:text-6xl text-xl  text-white  lg:w-[70%] capitalize lg:px-5 px-2 leading-snug">
              Be more <span className=" text-violet-800 ">Effective</span> build{" "}
              <span className="text-violet-800">Software</span> with us
            </p>
            <p className="font-extralight lg:text-lg text-sm text-white lg:w-[40%] px-10">
              We help you realize your business with application programs that
              suit with your business.
            </p>
          </div>

          <button className="px-4 py-2 text-white bg-[#9644FF] rounded-full">
            Know more
          </button>
        </div>
      </div>
      <MarqueeBar />
    </div>
  );
}

export default Welcome;

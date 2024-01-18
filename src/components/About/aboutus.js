import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function AboutUs() {
  return (
    <div className="">
      <div className="py-5 bg-violetPrimery bg-wave2-bg bg-cover">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/about_Us.svg" className="lg:h-auto h-10" />
          <div className=" z-10 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold lg:text-5xl text-3xl  text-white">
              Who are we?
            </p>
            <p className="font-normal md:text-xl text-base text-gray-400  text-center px-5 tracking-wide">
              A team with a different because we have a dream with a difference.
            </p>
            <p className=" hidden md:block font-semibold md:text-xl text-base text-white  text-center px-5">
              “One Team! One Dream!”
            </p>
          </div>
          <div className="mt-5 hidden md:block">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "About", href: "/aboutus" },
                // { name: "Reserve", href: "/research" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

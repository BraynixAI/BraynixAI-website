import React from "react";
import BreadCrum from "../common_component/BreadCrum";
import OurProcess from "./ourprocess";

function CaseStudy() {
  return (
    <div className="">
      <div className="py-5 bg-violetPrimery bg-wave2-bg lg:h-full  lg:bg-center bg-bottom px-2">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/casestudy.svg" className="px-5 md:px-0" />
          <div className=" z-10 flex justify-center items-center flex-col md:-mt-10 -mt-5 space-y-3 ">
            <p className="font-bold text-4xl text-white tracking-wider">
              CaseStudy
            </p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              We will love to here from you.
            </p>
          </div>
          <div className="my-5">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Case Study", href: "/casestudy" },
                // { name: "Reserve", href: "/research" },
              ]}
            />
          </div>
        </div>
        <OurProcess />
      </div>
    </div>
  );
}

export default CaseStudy;

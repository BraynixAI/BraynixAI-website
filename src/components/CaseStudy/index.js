import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function CaseStudy() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/casestudy.svg" className="h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">CaseStudy</p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              We are a team providing some of the best products
            </p>
          </div>
          <div>
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Case Study", href: "/casestudy" },
                // { name: "Reserve", href: "/research" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;

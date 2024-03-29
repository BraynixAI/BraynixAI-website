import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function ResearchPage() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery px-2">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/research.svg" className="px-10 md:px-0" />
          <div className=" z-10 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">Research</p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              We will love to here from you.
            </p>
          </div>
          <div className="mt-5">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Research", href: "/research" },
                // { name: "AI & Data Analysis", href: "/service" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResearchPage;

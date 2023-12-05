import React from "react";
import BreadCrum from "../common_component/BreadCrum";

function ServicePage() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/services.svg" className="h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">Services</p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              A team with a different because we have a dream with a difference.
            </p>
            <p className="font-normal text-base text-gray-400  text-center px-5">
              “One Team! One Dream!”
            </p>
          </div>
          <div className="mt-5">
            <BreadCrum
              data={[
                { name: "Home", href: "/" },
                { name: "Service", href: "/service" },
                { name: "AI & Data Analysis", href: "/service" },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePage;

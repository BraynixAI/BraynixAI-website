import React from "react";

function Testimonial() {
  return (
    <div>
      <div className="py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/testimonials.svg" className="h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-semibold text-4xl text-[#148BDC]">
              Testimonials
            </p>
            <p className="font-normal text-base text-gray-400 w-4/6 text-center px-5">
              Are you one of the thousands of Iphone owners who has no idea.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex  space-x-10 w-3/5 ">
            <div className="flex h-[200px] mt-10">
              <img src="images/group131133.svg" />
            </div>
            <div className="flex flex-1 flex-col ">
              <div className=" ">
                <img src="images/heading3.svg" className="absolute" />
                <p className="font-normal text-sm text-gray-400 pl-4 pt-8">
                  “Are you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elitAre
                  you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elit”
                </p>
              </div>
              <div className="my-5 ml-4">
                <img src="images/google.svg" />
                <p className="text-white font-normal text-base">
                  Mark Smith(CEO & Founder)
                </p>
              </div>
              <div className="flex space-x-3 ml-4">
                <button className="p-0.5 hover:bg-blue-700 rounded-full rounded-tl-none">
                  <img src="images/vector10.svg" />
                </button>
                <button className="p-0.5 hover:bg-blue-700 rounded-full rounded-tr-none">
                  <img src="images/vector9.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

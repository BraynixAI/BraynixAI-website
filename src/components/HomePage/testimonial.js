import React from "react";

function Testimonial() {
  return (
    <div>
      <div className="hidden lg:block py-5 bg-violetPrimery">
        <div className=" w-full justify-center items-center flex flex-col">
          <img src="images/testimonials.svg" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-semibold text-4xl text-white tracking-widest">
              Testimonials
            </p>
            <p className="font-normal text-lg text-[#6D6D6D] w-3/4 text-center px-5 tracking-wider leading-7">
              Are you one of the thousands of Iphone owners who has no idea.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center w-full">
          <div className="flex my-10 space-x-10 w-[65%] ">
            <div className="flex mt-10">
              <img src="images/group131133.svg" />
            </div>
            <div className="flex flex-1 flex-col ">
              <div className=" ">
                <img src="images/heading3.svg" className="absolute" />
                <p className="font-normal text-sm text-[#9A9A9A] pl-4 pt-8">
                  “Are you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elitAre
                  you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elit”
                </p>
              </div>
              <div className="my-8 ml-4">
                <img src="images/google.svg" />
                <p className="text-white font-normal text-base">
                  Mark Smith(CEO & Founder)
                </p>
              </div>
              <div className="flex space-x-3 ml-4">
                <button className="p-1 hover:bg-blue-700 rounded-full rounded-tl-none">
                  <img src="images/vector10.svg" />
                </button>
                <button className="p-1 hover:bg-blue-700 rounded-full rounded-tr-none">
                  <img src="images/vector9.svg" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------for mobile screen-------------------- */}
      <div className="lg:hidden py-5 bg-violetPrimery">
        <div className="px-5 w-full justify-center items-center flex flex-col">
          <img src="images/testimonials.svg" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-2 ">
            <p className="font-semibold text-2xl tracking-wide text-white ">
              Testimonials
            </p>
            <p className="font-normal text-sm text-[#6D6D6D]  text-center px-2 ">
              Are you one of the thousands of Iphone owners who has no idea.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center px-5 pt-5 space-x-2 w-full">
          <img src="images/googleimg2.svg" className="h-32" />
          <div className="my-8 ">
            <div className="  ml-4">
              <img src="images/google2.svg" />
              <p className="text-white font-normal  text-base">Mark Smith</p>
              <p className="text-white font-normal  text-base">
                (CEO & Founder)
              </p>
            </div>
            <div className="flex mt-2 space-x-3 ml-4">
              <button className="p-1 hover:bg-blue-700 rounded-full rounded-tl-none">
                <img src="images/vector10.svg" />
              </button>
              <button className="p-1 hover:bg-blue-700 rounded-full rounded-tr-none">
                <img src="images/vector9.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="px-5 ">
          <img src="images/heading3.svg" className="absolute" />
          <p className="font-normal text-sm text-[#9A9A9A] text-justify pt-10">
            “Are you one of the thousands of Iphone owners who has no idea.Lorem
            ipsum dolor sit amet consectetur adipicising elitLorem ipsum dolor
            sit amet consectetur adipicising elitAre you one of the thousands of
            Iphone owners who has no idea.Lorem ipsum dolor sit amet consectetur
            adipicising elitLorem ipsum dolor sit amet consectetur adipicising
            elit”
          </p>
        </div>

        {/* <div className="flex justify-center items-center w-full">
          <div className="flex my-10 space-x-10 w-[65%] ">
            <div className="flex mt-10">
              <img src="images/group131133.svg" />
            </div>
            <div className="flex flex-1 flex-col ">
              <div className=" ">
                <img src="images/heading3.svg" className="absolute" />
                <p className="font-normal text-sm text-[#9A9A9A] pl-4 pt-8">
                  “Are you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elitAre
                  you one of the thousands of Iphone owners who has no
                  idea.Lorem ipsum dolor sit amet consectetur adipicising
                  elitLorem ipsum dolor sit amet consectetur adipicising elit”
                </p>
              </div>
              <div className="my-8 ml-4">
                <img src="images/google.svg" />
                <p className="text-white font-normal text-base">
                  Mark Smith(CEO & Founder)
                </p>
              </div>
              <div className="flex space-x-3 ml-4">
                <button className="p-1 hover:bg-blue-700 rounded-full rounded-tl-none">
                  <img src="images/vector10.svg" />
                </button>
                <button className="p-1 hover:bg-blue-700 rounded-full rounded-tr-none">
                  <img src="images/vector9.svg" />
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonial;

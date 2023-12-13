import React from "react";

function FoundersNote() {
  return (
    <div className="bg-fndnote-bg bg-violetPrimery py-5">
      <div className="flex md:flex-row flex-col justify-center items-center md:space-x-10 md:mx-20 mx-5 max-w-max py-5 space-y-5 md:space-y-0">
        <div className="flex  flex-col justify-center items-center md:space-y-5 space-y-3">
          <p className="text-white font-semibold md:text-4xl text-3xl">
            Founder’s Note
          </p>
          <img src="images/yellowthem.svg" className="h-[300px] px-4 md:px-0" />
          <div className="text-center space-y-2">
            <p className="text-white font-semibold text-xl">Amitabh Das</p>
            <p className="text-white font-normal text-sm"> (CEO & Founder)</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <img src="images/heading3.svg" className="absolute" />
          <p className="text-white md:text-xl text-base font-normal md:p-5 pt-5 text-justify md:text-start">
            "As the founder of Braynix AI, I am proud to lead a team of talented
            individuals who are dedicated to using cutting-edge artificial
            intelligence technologies to solve real-world problems. Our mission
            is to empower businesses and organizations with the tools they need
            to improve their operations and achieve their goals. Whether you
            need to automate processes, gain new insights, or develop custom
            solutions, Braynix AI is here to help you succeed. I believe that
            the future is AI, and I am confident that our team will continue to
            play a major role in shaping that future for the better."
          </p>
        </div>
      </div>
    </div>
  );
}

export default FoundersNote;

import React from "react";

function FoundersNote() {
  return (
    <div className="bg-fndnote-bg bg-violetPrimery">
      <div className="flex justify-center items-center  space-x-10 mx-20 max-w-max">
        <div className="flex flex-col justify-center items-center space-y-5">
          <p className="text-white font-semibold text-4xl">Founder’s Note</p>
          <img src="images/yellowthem.svg" className="h-[300px]" />
          <div className="text-center space-y-2">
            <p className="text-white font-semibold text-xl">Amitabh Das</p>
            <p className="text-white font-normal text-sm"> (CEO & Founder)</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col ">
          <img src="images/heading3.svg" className="absolute" />
          <p className="text-white text-2xl font-normal p-5">
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

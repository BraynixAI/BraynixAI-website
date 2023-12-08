import React from "react";

function GotProject() {
  return (
    <div className="bg-violetPrimery py-5">
      <div className="flex flex-col justify-center items-center lg:space-y-5 space-y-2 px-5">
        <p className="text-gray-400 text-sm tracking-widest text-center ">
          CREATE A BETTER FUTURE YOUR APP WITH US
        </p>
        <p className="text-white font-bold lg:text-4xl text-2xl  lg:tracking-wide text-center">
          Got a Project ? Just Tell Us!
        </p>
      </div>
      <div className="flex justify-center lg:my-8 my-5">
        <button className="flex justify-between items-center border border-white rounded-full p-2 space-x-4">
          <img src="images/telegram.svg" />
          <p className="text-white text-sm font-normal ">Get In Touch</p>
        </button>
      </div>
    </div>
  );
}

export default GotProject;

import React from "react";

function GotProject() {
  return (
    <div className="bg-violetPrimery py-5">
      <div className="flex flex-col justify-center items-center space-y-5">
        <p className="text-gray-400 text-sm tracking-wider ">
          CREATE A BETTER FUTURE YOUR APP WITH US
        </p>
        <p className="text-white font-bold text-4xl">
          Got a Project ? Just Tell Us!
        </p>
        <div>
          <button className="flex justify-between items-center border border-white rounded-full p-2 space-x-4">
            <img src="images/telegram.svg" />
            <p className="text-white">Get In Touch</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default GotProject;

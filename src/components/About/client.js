import React from "react";

function Client() {
  return (
    <div>
      <div className="bg-wave-bg bg-violetPrimery h-[617px] w-full">
        <div className="h-[276px] w-[278px]  flex justify-center items-center flex-col ">
          <div className="h-[132px] w-[278px]  border-blue-500 border-4 rounded-xl text-white flex justify-center items-center flex-col space-y-5">
            <p className="text-xl font-medium text-violet-500">Client </p>
            <p className="text-4xl font-semibold">30+</p>
          </div>
          <div className="border border-white"></div>
          <div className="h-6 w-6 rounded-full border border-white "></div>
        </div>
      </div>
    </div>
  );
}

export default Client;

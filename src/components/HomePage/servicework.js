import React from "react";

function ServiceWork() {
  return (
    <div>
      <div className="py-5  bg-violetPrimery ">
        <div className=" w-full justify-center items-center flex flex-col ">
          <img src="images/services.svg" className="h-16" />
          <div className=" z-50 flex justify-center items-center flex-col -mt-2 space-y-5 ">
            <p className="font-bold text-4xl text-white">
              What we actually do?
            </p>
            <p className="font-normal text-base text-gray-400 w-4/6 text-center px-5">
              We are a full-service software studio, working with clients to
              define and develop solutions to complex issues
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceWork;

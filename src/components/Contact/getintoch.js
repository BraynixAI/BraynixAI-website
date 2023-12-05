import React from "react";

function GetInToch() {
  return (
    <div className="bg-violetPrimery">
      <div className="bg-violetPrimery bg-getintoch-bg mx-10  p-10">
        <div className="flex  space-x-5 ">
          <div className="w-1/2 flex justify-center items-center ">
            <form className=" space-y-5   ">
              <p className="text-white font-bold text-5xl">
                Get in <span className="text-blue-400  ">Touch</span>
              </p>
              <p className="text-white">
                Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu
                leo molestie vel, ornare non id blandit netus.
              </p>
              <div className="space-y-5">
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name *"
                  class="w-full px-3 py-2 bg-transparent text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Email"
                  class="w-full px-3 py-2 bg-transparent text-white border border-white focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Phone number  *"
                  class="w-full px-3 py-2 bg-transparent text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Message"
                  class="w-full px-3 py-2 bg-transparent text-white border border-white focus:outline-none focus:border-blue-500"
                />

                <button
                  type="submit"
                  class="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="1/2">
            <img src="images/locatonimg.svg" />
          </div>
        </div>
        <div className="flex space-x-5">
          <div className="flex space-x-2">
            <img src="images/cphone.svg" className="self-start" />
            <div className="">
              <p className="text-blue-500 font-semibold text-base">PHONE </p>
              <p className="text-white font-normal text-sm">8249262771</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <img src="images/cmail.svg" className="self-start" />
            <div className="">
              <p className="text-blue-500 font-semibold text-base">EMAIL</p>
              <p className="text-white font-normal text-sm">
                operations@braynixai.com{" "}
              </p>
            </div>
          </div>
          <div className="flex space-x-2 ">
            <img src="images/chome.svg" className="self-start" />
            <div className="">
              <p className="text-blue-500 font-semibold text-base">Address</p>
              <p className="text-white font-normal text-sm w-2/3">
                Plot no-256/1061,Mahadev nagar, Jharpada, BBSR - 751006{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GetInToch;

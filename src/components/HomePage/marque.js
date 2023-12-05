import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeBar() {
  return (
    // <div className="bg-violetPrimery">
    <Marquee>
      <div className="flex space-x-8 bg-transparent bg-opacity-25  ">
        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/flexport.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/Payoneer.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/paypal.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/skrill.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/instacart.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/flexport.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/Payoneer.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/paypal.svg" className="h-5" />
        </div>

        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/skrill.svg" className="h-5" />
        </div>
        <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
          <img src="images/paypal.svg" className="h-5" />
        </div>
      </div>
    </Marquee>
    // </div>
  );
}

export default MarqueeBar;

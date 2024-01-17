import React from "react";
import Marquee from "react-fast-marquee";

const data = [
  {
    image: "images/flexport.svg",
  },
  {
    image: "images/Payoneer.svg",
  },
  {
    image: "images/paypal.svg",
  },
  {
    image: "images/skrill.svg",
  },
  {
    image: "images/instacart.svg",
  },
  {
    image: "images/Payoneer.svg",
  },
  {
    image: "images/Payoneer.svg",
  },
];
function MarqueeBar() {
  return (
    // <div className="bg-violetPrimery">
    <Marquee>
      <div className="flex space-x-8 bg-transparent bg-opacity-25  ">
        {data.map((item) => (
          <div className="h-10 w-40 py-8 flex justify-center items-center border border-gray-600 border-b-0 rounded-2xl">
            <img src={item.image} className="h-5" />
          </div>
        ))}
      </div>
    </Marquee>
    // </div>
  );
}

export default MarqueeBar;

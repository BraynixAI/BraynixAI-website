import React from "react";

function Competitor() {
  return (
    <div className="md:py-20 py-10 bg-violetPrimery ">
      <div className="md:space-y-10">
        <div className="flex md:flex-row flex-col-reverse justify-between w-[80%] mx-auto md:space-y-5">
          <div className="text-white lg:w-1/2 md:space-y-10 space-y-5">
            <p className="font-semibold text-5xl text-white hidden md:block">
              Competitor Analysis
            </p>
            <div className="md:space-y-8 space-y-5">
              <div className="md:space-y-5 space-y-2">
                <p className="font-semibold text-xl text-center md:text-start">
                  Competitor 1
                </p>
                <p className="text-base font-medium text-center md:text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-xl font-medium">Features :</p>
                <div>
                  <img src="images/r-arrow.svg" />
                  <p className="text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div>
                  <img src="images/r-arrow.svg" />
                  <p>
                    Risus mollis dictum dolor, quam. Gravida platea elit amet
                    adipiscing
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end flex-1 lg:w-1/2">
            <img src="images/OlaShare.svg" />
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between w-[80%] mx-auto md:space-y-5">
          <div className="flex mt-10 lg:mt-0 lg:w-1/2">
            <img src="images/BlaBlaCar.svg" />
          </div>
          <div className="text-white  lg:w-1/2 md:space-y-10 space-y-5 mt-5 md:mt-0">
            <div className="md:space-y-8 space-y-5">
              <div className="md:space-y-5 space-y-2">
                <p className="font-semibold text-xl text-center md:text-start">
                  Competitor 2
                </p>
                <p className="text-base font-medium text-center md:text-start">
                  Sed et lorem nulla ipsum egestas dolor, adipiscing. Risus
                  mollis dictum
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-xl font-medium">Features :</p>
                <div>
                  <img src="images/r-arrow.svg" />
                  <p className="text-base font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
                <div>
                  <img src="images/r-arrow.svg" />
                  <p>
                    Risus mollis dictum dolor, quam. Gravida platea elit amet
                    adipiscing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competitor;

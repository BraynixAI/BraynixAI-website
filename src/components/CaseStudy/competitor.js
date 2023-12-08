import React from "react";

function Competitor() {
  return (
    <div className="py-20 bg-violetPrimery ">
      <div className="space-y-10">
        <div className="flex justify-between w-[80%] mx-auto flex-col space-y-5 lg:flex-row">
          <div className="text-white lg:w-1/2 space-y-10">
            <p className="font-semibold text-5xl text-white">
              Competitor Analysis
            </p>
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="font-semibold text-xl">Competitor 1</p>
                <p className="text-base font-medium">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-base font-medium">Features :</p>
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
        <div className="flex justify-between w-[80%] mx-auto flex-col-reverse  lg:flex-row">
          <div className="flex mt-10 lg:mt-0 lg:w-1/2">
            <img src="images/BlaBlaCar.svg" />
          </div>
          <div className="text-white  lg:w-1/2 space-y-10 ">
            <div className="space-y-8">
              <div className="space-y-5">
                <p className="font-semibold text-xl">Competitor 2</p>
                <p className="text-base font-medium">
                  Sed et lorem nulla ipsum egestas dolor, adipiscing. Risus
                  mollis dictum
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-base font-medium">Features :</p>
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

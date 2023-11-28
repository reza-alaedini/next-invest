import React from "react";

// module
import Charts from "./modules/Chart";

// shapes
import ascending from "./../assets/chartShape2.svg";
import chartBg from "./../assets/chartShape.png";
import circle from "./../assets/halfCircle.png";
import dots from "./../assets/dots.png";

function PaidOuts() {
  return (
    <div
      className="w-full  bg-[#ECF4FD]  flex justify-center items-center px-10 relative"
    >
      <img src={circle} className="absolute top-0 right-4 z-0 h-10 md:h-auto" />
      <img src={chartBg} className="absolute bottom-0 left-0 z-0" />
      <img src={dots} className="absolute bottom-44 right-24 invisible lg:visible h-5" />
      <div className="container mx-auto flex justify-between items-center flex-wrap flex-col md:flex-row md:p-20 my-10 z-10">
        <div className="w-full lg:w-1/2">
          <img src={ascending} className="h-10 sm:h-14 mb-10" />
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold my-4 leading-10">
            $7M+ paid out to investors
          </h3>
          <p className="font-normal leading-8 text-lg sm:text-xl lg:text-2xl text-[#999999]">
            Next Invest has already paid out over $7M in cash returns to
            investors. Earn potential cash payments through unique revenue-share
            and debt financing investments.
          </p>
        </div>
        <div className="w-full lg:w-1/2 mt-3">
            <Charts />
        </div>
      </div>
    </div>
  );
}

export default PaidOuts;

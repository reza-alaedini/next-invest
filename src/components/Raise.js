import React from "react";

// shape
import charImg from "./../assets/charImg.png";
import shape from "./../assets/Shape2.png";

function Raise() {
  return (
    <div className="px-10 my-32  w-full relative">
      <img src={shape} className="absolute top-0 right-0 z-0 w-1/2 md:w-auto" />
      <div className="container mx-auto flex flex-wrap justify-center items-center">
        <div className="w-full md:w-1/3 flex flex-col justify-between h-full">
          <p className="text-4xl ms:text-5xl font-bold leading-normal">
            Looking to raise capital for your growing business?
          </p>
          <p className="text-xl md:text-2xl font-normal text-[#999] leading-9 text-justify my-8">
            Whether expanding or opening a brand-new concept, we make it easy to
            raise money from thousands of local investors.
          </p>
          <div className="text-center">
            <button className="uppercase text-white bg-[#7B61FF] py-5 px-10 text-base font-bold transition-colors hover:bg-[#5438dc]">
              Apply Online
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img src={charImg} className="z-10" />
        </div>
      </div>
    </div>
  );
}

export default Raise;

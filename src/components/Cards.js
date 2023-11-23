import React from "react";

// images
import card1 from "./../assets/card1.png";
import card2 from "./../assets/card2.png";

function Cards() {
  return (
    <div className="container mx-auto">
      <h4 className="text-center text-5xl font-bold mt-40">
        Offerings open for investment
      </h4>
      <p className="font-normal text-center text-2xl text-gray-400 mt-5">
        Explore pre-vetted investment opportunities available in a growing
        number of industry categories.
      </p>
      <div className="mt-10 flex justify-center items-center">
        {/* Start of Card */}
        <div className="max-w-sm rounded overflow-hidden shadow-xl mx-5 relative">
            <div className="absolute top-4 left-2">
                <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">house</span>
                <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">Family Business</span>
            </div>
          <img className="w-full" src={card1} alt="Sunset in the mountains" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl">Oxalis</div>
            <span className="font-normal text-gray-400">Brooklyn, NY</span>
            <p className="text-gray-700 text-base mt-4">
              A recognized leader in language immersion & early education,
              opening second school.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <div className="w-full bg-gray-200 h-2.5 dark:bg-gray-700">
              <div
                className="bg-[#7B61FF] h-2.5"
                style={{ width: "45%" }}
              ></div>
            </div>
            <p className="mt-3 text-sm">
              <span className="font-bold text-[#7B61FF] text-base">$574,920 </span> raised of $1,000,000
            </p>
          </div>
        </div>
        {/* End of Card */}
      </div>
    </div>
  );
}

export default Cards;

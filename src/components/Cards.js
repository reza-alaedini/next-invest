import React from "react";
import styles from "./Cards.module.css";

// images
import card1 from "./../assets/card1.png";
import card2 from "./../assets/card2.png";
import card3 from "./../assets/card3.png";
import card4 from "./../assets/card4.png";
import card5 from "./../assets/card5.png";

// shape
import shape2 from "./../assets/Shape2.png";

function Cards() {
  return (
    <div className="container mx-auto relative">
      <img src={shape2} className="absolute mx-0 top-1/3  md:-ml-32 w-52 md:w-60 z-0" />
      <h4 className="text-center text-4xl md:text-5xl font-bold mt-20 md:mt-40 mx-2">
        Offerings open for investment
      </h4>
      <p className="font-normal text-center text-lg md:text-2xl text-gray-400 mt-5 mx-2">
        Explore pre-vetted investment opportunities available in a growing
        number of industry categories.
      </p>
      <div className="mt-10 flex justify-center items-center flex-wrap">
        {/* Start of Card */}
        <div
          className={`z-10 max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card1}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="z-20 uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
        {/* Start of Card */}
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card2}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
        {/* Start of Card */}
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card2}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
        {/* Start of Card */}
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card3}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
        {/* Start of Card */}
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card4}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
        {/* Start of Card */}
        <div
          className={`max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-all mx-5 my-3 relative cursor-pointer ${styles.card}`}
        >
          <div className={`absolute top-4 left-2 ${styles.tags}`}>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2 mx-4">
              house
            </span>
            <span className="bg-tagColor font-bold text-xs uppercase text-black px-3 py-2">
              Family Business
            </span>
          </div>
          <img
            className={`w-full ${styles.cardImg}`}
            src={card5}
            alt="Sunset in the mountains"
          />
          <div className={styles.hoverInfo}>
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
                  style={{ width: "55%" }}
                ></div>
              </div>
              <p className="mt-3 text-sm">
                <span className="font-bold text-[#7B61FF] text-base">
                  $574,920{" "}
                </span>{" "}
                raised of $1,000,000
              </p>
            </div>
          </div>
          <div className={`${styles.footerHover}`}>
            <div
              className={`border border-t-0 border-gray-400 bg-[#ECECEC] mx-3 ${styles.line}`}
            ></div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Security Type</p>
              <p className="text-base font-bold">Revenue Sharing Note</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Investment Multiple</p>
              <p className="text-base font-bold">1.4x</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Maturity</p>
              <p className="text-base font-bold">48 Months</p>
            </div>
            <div className="flex justify-between mt-4 mx-4">
              <p className="text-base font-normal">Min. Investment</p>
              <p className="text-base font-bold">$100</p>
            </div>
            <button className="uppercase mt-10 w-full bg-[#336EE1] hover:bg-[#2054bc] transition-colors- text-white py-5">
              view
            </button>
          </div>
        </div>
        {/* End of Card */}
      </div>

      <div className="w-full text-center mt-10 mb-20">
        <button className="text-[#336EE1] border-2 border-[#336EE1] py-6 px-14 transition-colors text-base font-bold uppercase hover:bg-[#336EE1] hover:text-white">
          View All Projects
        </button>
      </div>
    </div>
  );
}

export default Cards;

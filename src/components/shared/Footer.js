import React from "react";

// icons
import top from "./../../assets/Up.svg";
import right from "./../../assets/Right.svg";
import facebook from "./../../assets/facebook.svg";
import twitter from "./../../assets/twitter.svg";
import instagram from "./../../assets/instagram.svg";

function Footer() {
  return (
    <div className="bg-[#ECECEC] w-full relative">
      <div className="container mx-auto px-10 flex h-full justify-around items-start flex-wrap pt-5 pb-10">
        <div className="text-center sm:text-left w-full sm:w-auto">
          <h3 className="uppercase pt-10 font-bold text-2xl leading-6">
            next invest
          </h3>
          <p className="font-normal text-sm text-[#999] mt-10">
            Copyright © 2020. LogoIpsum. All rights reserved.
          </p>
        </div>

        <div className="text-center md:text-left">
          <h4 className="pt-10 font-bold text-lg leading-6">Services</h4>
          <ul>
            <li className="text-base font-normal mt-3 text-[#999]">
              Email Marketing
            </li>
            <li className="text-base font-normal mt-3 text-[#999]">
              Campaigns
            </li>
            <li className="text-base font-normal mt-3 text-[#999]">Branding</li>
            <li className="text-base font-normal mt-3 text-[#999]">Offline</li>
          </ul>
        </div>

        <div className="text-center md:text-left ml-3">
          <h4 className="pt-10 font-bold text-lg leading-6">About</h4>
          <ul className="">
            <li className="text-base font-normal mt-3 text-[#999]">
              Our Story
            </li>
            <li className="text-base font-normal mt-3 text-[#999]">Benefits</li>
            <li className="text-base font-normal mt-3 text-[#999]">Team</li>
            <li className="text-base font-normal mt-3 text-[#999]">Careers</li>
          </ul>
        </div>

        <div className="absolute lg:static top-0 right-2">
          <div className="bg-[#7b61ff] rounded-full p-3 mt-10">
            <a href="#header" data-te-smooth-scroll-init>
              <img src={top} className="w-6" />
            </a>
          </div>
        </div>
        {/* start of second section of footer */}
        <div className="w-full flex justify-between mt-5 lg:px-28 flex-wrap">
          <div className="w-full md:w-auto flex md:inline flex-col items-center">
            <h3 className="text-2xl font-normal leading-9 text-center md:text-left">
              Subscribe to our newsletter
            </h3>
            <div className="flex items-end mt-2">
              <input
                placeholder="Email address"
                className="bg-[#ECECEC] border-b border-b-gray-400 py-3"
              />
              <span className="bg-[#336EE1] p-1 md:p-2 rounded-t-lg">
                <img src={right} />
              </span>
            </div>
          </div>
          <div className="flex justify-around mt-10 md:mt-0 w-full md:w-auto">
            <img src={facebook} className="ml-3 cursor-pointer" />
            <img src={twitter} className="ml-3 cursor-pointer" />
            <img src={instagram} className="ml-3 cursor-pointer" />
          </div>
        </div>
        {/* end of second section of footer */}
      </div>
    </div>
  );
}

export default Footer;

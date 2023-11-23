import React from "react";
import styles from "./Header.module.css";

// Shapes
import bottomShape from "../assets/Shape.png";

function Header() {
  return (
    <div className={`w-full h-screen ${styles.headerBg}`}>
      {/* Start of Navbar */}
      <nav class="bg-none border-gray-200">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-bold whitespace-nowrap text-white">
              NEXT INVEST
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-multi-level"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto z-20" id="navbar-multi-level">
            <ul class="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border md:bg-transparent bg-white border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar2"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-700 md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  Investment Opportunities{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar2"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown2"
                        data-dropdown-placement="right-start"
                        type="button"
                        class="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100"
                      >
                        Dropdown
                        <svg
                          class="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown2"
                        class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                      >
                        <ul
                          class="py-2 text-sm text-gray-700 "
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 "
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="block px-4 py-2 hover:bg-gray-100 "
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  class="flex items-center justify-between w-full py-2 px-3 text-gray-700 md:text-white hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                >
                  How it works{" "}
                  <svg
                    class="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 "
                    aria-labelledby="dropdownLargeButton"
                  >
                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                      </a>
                    </li>

                    <li>
                      <a href="#" class="block px-4 py-2 hover:bg-gray-100 ">
                        Earnings
                      </a>
                    </li>
                  </ul>
                  <div class="py-1">
                    <a
                      href="#"
                      class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </a>
                  </div>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-3 text-gray-700 md:text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block bg-[#7B61FF] text-white text-base md:py-3 md:px-5 md:mr-0 py-2 px-3"
                >
                  LOGIN
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block bg-white text-[#7B61FF] hover:bg-[#7B61FF] hover:text-white transition-colors text-sm md:py-3 md:px-5 md:ml-0 py-2 px-3 mt-2 md:mt-0"
                >
                  REGISTER
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* End of Navbar */}
      <img src={bottomShape} className="absolute bottom-0 right-0 z-0 h-1/3 sm:h-2/4" />

      {/* Start of header content */}
      <div className={`${styles.circle} z-10`}>
        <p className={`text-4xl xl:text-6xl ml-40 xl:ml-80 font-bold text-white ${styles.titleHeader}`}>
          Meaningful investments in <br />
          Main Street businesses
        </p>
        <br />
        <p className="text-white text-sm sm:text-xl  sm:ml-16 my-10 text-center sm:text-left">
          Browse vetted investment offerings in communities all over the US.
        </p>
        <button className="text-white bg-[#7B61FF] px-10 sm:px-20 py-2 sm:py-4 mb-10">
          GET STARTED
        </button>
      </div>

      {/* End of header content */}
    </div>
  );
}

export default Header;

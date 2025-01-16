import { Droplets, Sun, Shrub, Earth, SunSnow } from 'lucide-react';
import React from 'react';

const HomeCategory = () => {
  return (
    <div className="gap-14 border bg-[#1C3035] p-14">
      <h3 className='pl-6 text-white mb-7 text-2xl'>Sort By Categories</h3>
      <div className='flex flex-wrap gap-12 justify-center sm:justify-start'>

        {/* Sun Sensitivity Dropdown */}
        <div className="dropdown group relative inline-flex mx-5 mb-4 sm:mb-0">
          <button
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle shadow-xs inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold transition-all duration-500"
          >
            <Sun size={24} />
            Sun Sensitivity
            <svg
              className="dropdown-open:rotate-180 h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div
            className="dropdown-menu absolute top-full mt-2 hidden w-48 rounded-xl bg-white shadow-lg group-hover:block"
            aria-labelledby="dropdown-hover"
          >
            <ul className="py-2">
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Saved Files
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Moisture Requirement Dropdown */}
        <div className="dropdown group relative inline-flex mx-5 mb-4 sm:mb-0">
          <button
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle shadow-xs inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold transition-all duration-500"
          >
            <Droplets size={24} />
            Moisture Req
            <svg
              className="dropdown-open:rotate-180 h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div
            className="dropdown-menu absolute top-full mt-2 hidden w-72 rounded-xl bg-white shadow-lg group-hover:block"
            aria-labelledby="dropdown-hover"
          >
            <ul className="py-2">
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Saved Files
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Soil Type Dropdown */}
        <div className="dropdown group relative inline-flex mx-5 mb-4 sm:mb-0">
          <button
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle shadow-xs inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold transition-all duration-500"
          >
            <Earth size={24} />
            Soil Type
            <svg
              className="dropdown-open:rotate-180 h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div
            className="dropdown-menu absolute top-full mt-2 hidden w-72 rounded-xl bg-white shadow-lg group-hover:block"
            aria-labelledby="dropdown-hover"
          >
            <ul className="py-2">
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Saved Files
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Season Dropdown */}
        <div className="dropdown group relative inline-flex mx-5 mb-4 sm:mb-0">
          <button
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle shadow-xs inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold transition-all duration-500"
          >
            <SunSnow size={24} />
            Season
            <svg
              className="dropdown-open:rotate-180 h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div
            className="dropdown-menu absolute top-full mt-2 hidden w-72 rounded-xl bg-white shadow-lg group-hover:block"
            aria-labelledby="dropdown-hover"
          >
            <ul className="py-2">
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Saved Files
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Growth Rate Dropdown */}
        <div className="dropdown group relative inline-flex mx-5 mb-4 sm:mb-0">
          <button
            id="dropdown-hover"
            type="button"
            className="dropdown-toggle shadow-xs inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-center text-sm font-semibold transition-all duration-500"
          >
            <Shrub size={24} />
            Growth Rate
            <svg
              className="dropdown-open:rotate-180 h-2.5 w-2.5"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              ></path>
            </svg>
          </button>
          <div
            className="dropdown-menu absolute top-full mt-2 hidden w-48 rounded-xl bg-white shadow-lg group-hover:block"
            aria-labelledby="dropdown-hover"
          >
            <ul className="py-2">
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Downloads
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Saved Files
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-gray-900 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Notifications
                </a>
              </li>
              <li>
                <a
                  className="block px-6 py-2 font-medium text-red-500 hover:bg-gray-100"
                  href="javascript:;"
                >
                  Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCategory;

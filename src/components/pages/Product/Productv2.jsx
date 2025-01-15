import React from 'react';

const Productv2 = () => {
  return (
    <div>
      {' '}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope mb-8 text-3xl font-bold text-black max-lg:text-center min-[400px]:text-4xl">
            Available Products
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <a href="javascript:;" className="mx-auto max-w-[384px]">
              <div className="aspect-square w-full max-w-sm">
                <img
                  src="https://pagedone.io/asset/uploads/1701157806.png"
                  alt="cream image"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="mb-2 text-xl font-medium leading-8 text-black">Skin care cream</h6>
                  <h6 className="text-xl font-semibold leading-8 text-indigo-600">$74.99</h6>
                </div>
                <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>

            <a href="javascript:;" className="mx-auto max-w-[384px]">
              <div className="aspect-square w-full max-w-sm">
                <img
                  src="https://pagedone.io/asset/uploads/1701157826.png"
                  alt="cream image"
                  className="h-full w-full rounded-xl object-cover"
                />
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="mb-2 text-xl font-medium leading-8 text-black">Men’s Facial</h6>
                  <h6 className="text-xl font-semibold leading-8 text-indigo-600">$25</h6>
                </div>
                <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>

            <a href="javascript:;" className="mx-auto max-w-[384px]">
              <div className="relative aspect-square w-full max-w-sm">
                <img
                  src="https://pagedone.io/asset/uploads/1701157844.png"
                  alt="serum bottle image"
                  className="h-full w-full rounded-xl object-cover"
                />
                <span className="absolute right-3 top-3 z-10 cursor-pointer rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 px-2 py-1 text-base font-medium leading-7 text-white min-[400px]:px-4 min-[400px]:py-2">
                  20% Off
                </span>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div className="">
                  <h6 className="mb-2 text-xl font-medium leading-8 text-black">
                    Dark circles serum
                  </h6>
                  <h6 className="text-xl font-semibold leading-8 text-indigo-600">$199.99</h6>
                </div>
                <button className="group flex items-center justify-center rounded-full border border-gray-300 bg-white p-2 shadow-sm shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200 min-[400px]:p-4">
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                  >
                    <path
                      d="M12.6892 21.125C12.6892 22.0225 11.9409 22.75 11.0177 22.75C10.0946 22.75 9.34632 22.0225 9.34632 21.125M19.3749 21.125C19.3749 22.0225 18.6266 22.75 17.7035 22.75C16.7804 22.75 16.032 22.0225 16.032 21.125M4.88917 6.5L6.4566 14.88C6.77298 16.5715 6.93117 17.4173 7.53301 17.917C8.13484 18.4167 8.99525 18.4167 10.7161 18.4167H18.0056C19.7266 18.4167 20.587 18.4167 21.1889 17.9169C21.7907 17.4172 21.9489 16.5714 22.2652 14.8798L22.8728 11.6298C23.3172 9.25332 23.5394 8.06508 22.8896 7.28254C22.2398 6.5 21.031 6.5 18.6133 6.5H4.88917ZM4.88917 6.5L4.33203 3.25"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Productv2;

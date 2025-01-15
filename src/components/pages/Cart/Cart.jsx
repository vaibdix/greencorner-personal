import React from 'react';

const Cart = () => {
  return (
    <div>
      <section className="after:contents-[''] relative z-10 after:absolute after:right-0 after:top-0 after:z-0 after:h-full after:bg-gray-50 xl:after:w-1/3">
        <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="grid grid-cols-12">
            <div className="col-span-12 w-full pb-8 pt-14 max-xl:mx-auto max-xl:max-w-3xl lg:py-24 lg:pr-8 xl:col-span-8">
              <div className="flex items-center justify-between border-b border-gray-300 pb-8">
                <h2 className="font-manrope text-3xl font-bold leading-10 text-black">Shopping Cart</h2>
                <h2 className="font-manrope text-xl font-bold leading-8 text-gray-600">3 Items</h2>
              </div>
              <div className="mt-8 grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden">
                <div className="col-span-12 md:col-span-7">
                  <p className="text-lg font-normal leading-8 text-gray-400">Product Details</p>
                </div>
                <div className="col-span-12 md:col-span-5">
                  <div className="grid grid-cols-5">
                    <div className="col-span-3">
                      <p className="text-center text-lg font-normal leading-8 text-gray-400">
                        Quantity
                      </p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-center text-lg font-normal leading-8 text-gray-400">Total</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center">
                <div className="w-full md:max-w-[126px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162850.png"
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl object-cover"
                  />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-3 max-[500px]:items-center">
                      <h6 className="text-base font-semibold leading-7 text-black">
                        Rose Petals Divine
                      </h6>
                      <h6 className="text-base font-normal leading-7 text-gray-500">Perfumes</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        $120.00
                      </h6>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center">
                    <div className="flex h-full items-center">
                      <button className="group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900"
                        placeholder="1"
                      />
                      <button className="group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end">
                    <p className="text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center">
                <div className="w-full md:max-w-[126px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162866.png"
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl object-cover"
                  />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-3 max-[500px]:items-center">
                      <h6 className="text-base font-semibold leading-7 text-black">Musk Rose Cooper</h6>
                      <h6 className="text-base font-normal leading-7 text-gray-500">Perfumes</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        $120.00
                      </h6>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center">
                    <div className="flex h-full items-center">
                      <button className="group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900"
                        placeholder="2"
                      />
                      <button className="group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end">
                    <p className="text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $240.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center">
                <div className="w-full md:max-w-[126px]">
                  <img
                    src="https://pagedone.io/asset/uploads/1701162880.png"
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl object-cover"
                  />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-3 max-[500px]:items-center">
                      <h6 className="text-base font-semibold leading-7 text-black">Dusk Dark Hue</h6>
                      <h6 className="text-base font-normal leading-7 text-gray-500">Perfumes</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        $120.00
                      </h6>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center">
                    <div className="flex h-full items-center">
                      <button className="group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                      <input
                        type="text"
                        className="w-full min-w-[60px] max-w-[73px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold text-gray-900 outline-none placeholder:text-gray-900"
                        placeholder="1"
                      />
                      <button className="group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px] shadow-sm shadow-transparent transition-all duration-500 focus-within:outline-gray-300 hover:border-gray-300 hover:bg-gray-50 hover:shadow-gray-300">
                        <svg
                          className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          viewBox="0 0 22 22"
                          fill="none"
                        >
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                          <path
                            d="M11 5.5V16.5M16.5 11H5.5"
                            stroke=""
                            stroke-opacity="0.2"
                            stroke-width="1.6"
                            stroke-linecap="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex h-full items-center max-md:mt-3 max-[500px]:justify-center md:justify-end">
                    <p className="text-center text-lg font-bold leading-8 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                      $120.00
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex items-center justify-end">
                <button className="group flex items-center gap-2 rounded-full border-none px-5 py-3 text-lg font-semibold leading-8 text-indigo-600 shadow-sm shadow-transparent outline-0 transition-all duration-500 hover:text-indigo-700">
                  Add Coupon Code
                  <svg
                    className="transition-all duration-500 group-hover:translate-x-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M12.7757 5.5L18.3319 11.0562M18.3319 11.0562L12.7757 16.6125M18.3319 11.0562L1.83203 11.0562"
                      stroke="#4F46E5"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-24 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg">
              <h2 className="font-manrope border-b border-gray-300 pb-8 text-3xl font-bold leading-10 text-black">
                Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="text-lg font-normal leading-8 text-black">3 Items</p>
                  <p className="text-lg font-medium leading-8 text-black">$480.00</p>
                </div>
                <form>
                  <label className="mb-1.5 flex items-center text-sm font-medium text-gray-600">
                    Shipping
                  </label>
                  <div className="flex pb-6">
                    <div className="relative w-full">
                      <div className="absolute left-0 top-0 px-4 py-3">
                        <span className="text-base font-normal text-gray-300">Second Delivery</span>
                      </div>
                      <input
                        type="text"
                        className="shadow-xs block h-11 w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-36 pr-10 text-base font-normal text-gray-900 placeholder-gray-400 focus:outline-gray-400 min-[500px]:pl-52"
                        placeholder="$5.00"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown-delivery"
                        className="dropdown-toggle absolute right-0 top-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 pl-2 text-center text-base font-medium text-gray-900"
                        type="button"
                      >
                        <svg
                          className="my-auto ml-2"
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                            stroke="#6B7280"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dropdown-delivery"
                        aria-labelledby="dropdown-delivery"
                        className="absolute right-0 top-10 z-20 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Images
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              News
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Finance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <label className="mb-1.5 flex items-center text-sm font-medium text-gray-400">
                    Promo Code
                  </label>
                  <div className="flex w-full pb-4">
                    <div className="relative w-full">
                      <div className="absolute left-0 top-0 px-4 py-2.5 text-gray-300"></div>
                      <input
                        type="text"
                        className="shadow-xs block h-11 w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-5 pr-11 text-base font-normal text-gray-900 placeholder-gray-500 focus:outline-gray-400"
                        placeholder="xxxx xxxx xxxx"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown"
                        className="dropdown-toggle absolute right-0 top-0 z-10 inline-flex flex-shrink-0 items-center bg-transparent px-4 py-4 pl-2 text-center text-base font-medium text-gray-900"
                        type="button"
                      >
                        <svg
                          className="my-auto ml-2"
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                            stroke="#6B7280"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dropdown"
                        className="absolute right-0 top-10 z-10 hidden w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Images
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              News
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Finance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200">
                    <button className="mb-8 w-full rounded-lg bg-black px-4 py-2.5 text-center text-sm font-semibold text-white transition-all duration-500 hover:bg-black/80">
                      Apply
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-8">
                    <p className="text-xl font-medium leading-8 text-black">3 Items</p>
                    <p className="text-xl font-semibold leading-8 text-indigo-600">$485.00</p>
                  </div>
                  <button className="w-full rounded-xl bg-indigo-600 px-6 py-3 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cart;

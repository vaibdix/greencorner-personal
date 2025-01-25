import { ArrowBigUpIcon } from 'lucide-react';
import { ArrowUpRight } from 'lucide-react';
import { MoveUpRight } from 'lucide-react';
import { Plus } from 'lucide-react';
import React from 'react';

const Cart = () => {
  return (
    <div>
      <section className="after:contents-[''] relative z-10 after:absolute after:right-0 after:top-0 after:z-0 after:h-full after:bg-gray-50 xl:after:w-1/3">
        <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="grid grid-cols-12">
            <div className="col-span-12 w-full pb-8 pt-14 max-xl:mx-auto max-xl:max-w-3xl lg:py-24 lg:pr-8 xl:col-span-8">
              <div className="flex items-center justify-between border-b border-gray-300 pb-8">
                <h2 className="font-manrope text-3xl font-bold leading-10 text-black">
                  Shopping Cart
                </h2>
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
                      <p className="text-center text-lg font-normal leading-8 text-gray-400">
                        Total
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center">
                <div className="w-full md:max-w-[126px]">
                  <img
                    src="https://nurserylive.com/cdn/shop/products/nurserylive-g-aloe-juvenna-succulent-plant_600x600.jpg?v=1634213142"
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
                      <h6 className="text-base font-normal leading-7 text-gray-500">Category</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        ₹120.00
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
                      ₹120.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center">
                <div className="w-full md:max-w-[126px]">
                  <img
                    src="https://nurserylive.com/cdn/shop/products/nurserylive-peace-lily-spathiphyllum-plant-in-4-inch-10-cm-black-pot-230563_600x600.jpg?v=1685021926"
                    alt="perfume bottle image"
                    className="mx-auto rounded-xl object-cover"
                  />
                </div>
                <div className="grid w-full grid-cols-1 md:grid-cols-4">
                  <div className="md:col-span-2">
                    <div className="flex flex-col gap-3 max-[500px]:items-center">
                      <h6 className="text-base font-semibold leading-7 text-black">
                        Musk Rose Cooper
                      </h6>
                      <h6 className="text-base font-normal leading-7 text-gray-500">Category</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        ₹120.00
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
                      ₹240.00
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
                      <h6 className="text-base font-semibold leading-7 text-black">
                        Dusk Dark Hue
                      </h6>
                      <h6 className="text-base font-normal leading-7 text-gray-500">Category</h6>
                      <h6 className="text-base font-medium leading-7 text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                        ₹120.00
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
                      ₹120.00
                    </p>
                  </div>
                </div>
              </div>

              
            </div>
            <div className="col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-24 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg">
              <h2 className="font-manrope border-b border-gray-300 pb-8 text-3xl font-bold leading-10 text-black">
                Order Summary
              </h2>
              <div className="mt-8">
                <form>
                  <div className="flex items-center justify-between py-2">
                    <p className="text-md font-medium leading-8 text-black">Subtotal</p>
                    <p className="text-md font-semibold leading-8 text-[#1c3035]">₹485.00</p>
                  </div>
                  <div className="mb-2 flex items-center justify-between py-2">
                    <p className="text-md font-medium leading-8 text-black">Shipping</p>
                    <p className="text-md font-semibold leading-8 text-[#1c3035]">
                      Calculated at checkout
                    </p>
                  </div>
                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 100% 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                  </svg>
                  <div className="flex items-center justify-between py-5">
                    <p className="text-md font-medium leading-8 text-black">Total</p>
                    <p className="text-md font-semibold leading-8 text-[#1c3035]">₹485.00</p>
                  </div>

                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 100% 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                  </svg>

                  <div className="flex items-center justify-between py-5">
                    <p className="text-md font-medium leading-8 text-black">Have a Promo Code</p>
                    <p className="text-md font-semibold leading-8 text-[#1c3035]">
                      {' '}
                      <Plus />{' '}
                    </p>
                  </div>

                  <svg
                    width="100%"
                    height="2"
                    viewBox="0 0 100% 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="0" y1="1" x2="100%" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                  </svg>

                  <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#1c3035] px-6 py-3 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                    <span className='bg-white p-1 rounded-full ml-5'>
                      <ArrowUpRight color='black' />
                    </span>
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

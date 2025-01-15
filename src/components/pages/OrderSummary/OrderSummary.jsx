import React from 'react';

const OrderSummary = () => {
  return (
    <div>
      <section className="relative py-24">
        <div className="lg-6 mx-auto w-full max-w-7xl px-4 md:px-5">
          <h2 className="font-manrope text-center text-4xl font-bold leading-10 text-black">
            Payment Successful
          </h2>
          <p className="mb-11 mt-4 text-center text-lg font-normal leading-8 text-gray-500">
            Thanks for making a purchase you can check our order summary frm below
          </p>
          <div className="main-box max-w-xl rounded-xl border border-gray-200 pt-6 max-lg:mx-auto lg:max-w-full">
            <div className="flex flex-col justify-between border-b border-gray-200 px-6 pb-6 lg:flex-row lg:items-center">
              <div className="data">
                <p className="text-base font-semibold leading-7 text-black">
                  Order Id: <span className="font-medium text-indigo-600">#10234987</span>
                </p>
                <p className="mt-4 text-base font-semibold leading-7 text-black">
                  Order Payment : <span className="font-medium text-gray-400"> 18th march 2021</span>
                </p>
              </div>
              <button className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold leading-7 text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400 max-lg:mt-5">
                Track Your Order
              </button>
            </div>
            <div className="w-full px-3 min-[400px]:px-6">
              <div className="flex w-full flex-col items-center gap-6 border-b border-gray-200 py-6 lg:flex-row">
                <div className="img-box max-lg:w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167607.png"
                    alt="Premium Watch image"
                    className="aspect-square w-full rounded-xl object-cover lg:max-w-[140px]"
                  />
                </div>
                <div className="flex w-full flex-row items-center">
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="mb-3 text-xl font-semibold leading-8 text-black">
                          Premium Quality Dust Watch
                        </h2>
                        <p className="mb-3 text-lg font-normal leading-8 text-gray-500">
                          By: Dust Studios
                        </p>
                        <div className="flex items-center">
                          <p className="mr-4 border-r border-gray-200 pr-4 text-base font-medium leading-7 text-black">
                            Size: <span className="text-gray-500">100 ml</span>
                          </p>
                          <p className="text-base font-medium leading-7 text-black">
                            Qty: <span className="text-gray-500">2</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-1">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">price</p>
                          <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">$100</p>
                        </div>
                      </div>
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">Status</p>
                          <p className="whitespace-nowrap rounded-full bg-emerald-50 px-3 py-0.5 text-sm font-medium leading-6 text-emerald-600 lg:mt-3">
                            Ready for Delivery
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
                        <div className="flex gap-3 lg:block">
                          <p className="whitespace-nowrap text-sm font-medium leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p className="whitespace-nowrap text-base font-medium leading-7 text-emerald-500 lg:mt-3">
                            23rd March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-6 py-6 lg:flex-row">
                <div className="img-box max-lg:w-full">
                  <img
                    src="https://pagedone.io/asset/uploads/1701167621.png"
                    alt="Diamond Watch image"
                    className="aspect-square w-full rounded-xl object-cover lg:max-w-[140px]"
                  />
                </div>
                <div className="flex w-full flex-row items-center">
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2">
                    <div className="flex items-center">
                      <div className="">
                        <h2 className="mb-3 text-xl font-semibold leading-8 text-black">
                          Diamond Platinum Watch
                        </h2>
                        <p className="mb-3 text-lg font-normal leading-8 text-gray-500">
                          Diamond Dials
                        </p>
                        <div className="flex items-center">
                          <p className="mr-4 border-r border-gray-200 pr-4 text-base font-medium leading-7 text-black">
                            Size: <span className="text-gray-500">Regular</span>
                          </p>
                          <p className="text-base font-medium leading-7 text-black">
                            Qty: <span className="text-gray-500">1</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-5">
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-1">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">price</p>
                          <p className="text-sm font-medium leading-7 text-indigo-600 lg:mt-4">$100</p>
                        </div>
                      </div>
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
                        <div className="flex gap-3 lg:block">
                          <p className="text-sm font-medium leading-7 text-black">Status</p>
                          <p className="whitespace-nowrap rounded-full bg-indigo-50 px-3 py-0.5 text-sm font-medium leading-6 text-indigo-600 lg:mt-3">
                            Dispatched
                          </p>
                        </div>
                      </div>
                      <div className="col-span-5 flex items-center max-lg:mt-3 lg:col-span-2">
                        <div className="flex gap-3 lg:block">
                          <p className="whitespace-nowrap text-sm font-medium leading-6 text-black">
                            Expected Delivery Time
                          </p>
                          <p className="whitespace-nowrap text-base font-medium leading-7 text-emerald-500 lg:mt-3">
                            23rd March 2021
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-between border-t border-gray-200 px-6 lg:flex-row">
              <div className="flex flex-col items-center border-gray-200 max-lg:border-b sm:flex-row">
                <button className="group flex items-center justify-center gap-2 whitespace-nowrap border-gray-200 bg-white py-6 text-lg font-semibold text-black outline-0 transition-all duration-500 hover:text-indigo-600 sm:border-r sm:pr-6">
                  <svg
                    className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                  Cancel Order
                </button>
                <p className="py-3 pl-6 text-lg font-medium text-gray-900 max-lg:text-center">
                  Paid using Credit Card <span className="text-gray-500">ending with 8822</span>
                </p>
              </div>
              <p className="py-6 text-lg font-semibold text-black">
                Total Price: <span className="text-indigo-600"> $200.00</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSummary;

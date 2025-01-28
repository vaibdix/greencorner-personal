import React from 'react';

const OrderHistory = () => {
  return (
    <div>
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
          <h2 className="font-manrope lead-10 mb-9 text-3xl font-extrabold text-black">
            Order History
          </h2>

          <div className="flex justify-between sm:flex-col sm:items-center lg:flex-row">
            <ul className="flex gap-x-14 gap-y-3 max-sm:flex-col sm:items-center">
              <li className="cursor-pointer text-lg leading-8 font-medium text-indigo-600 transition-all duration-500 hover:text-indigo-600">
                All Order
              </li>
              <li className="cursor-pointer text-lg leading-8 font-medium text-black transition-all duration-500 hover:text-indigo-600">
                Summary
              </li>
              <li className="cursor-pointer text-lg leading-8 font-medium text-black transition-all duration-500 hover:text-indigo-600">
                Completed
              </li>
              <li className="cursor-pointer text-lg leading-8 font-medium text-black transition-all duration-500 hover:text-indigo-600">
                Cancelled
              </li>
            </ul>
            <div className="flex items-center justify-end gap-2 max-lg:mt-5 max-sm:flex-col">
              <div className="relative flex rounded-full border border-gray-300 px-4 py-3">
                <svg
                  className="relative"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                    stroke="#111827"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  name="from-dt"
                  id="from-dt"
                  className="flex w-28 cursor-pointer appearance-none flex-row-reverse px-2 text-sm font-semibold text-gray-900 placeholder-gray-900 outline-0"
                  placeholder="11-01-2023"
                />
              </div>
              <p className="text-lg leading-8 font-medium text-black">To</p>
              <div className="relative flex rounded-full border border-gray-300 px-4 py-3">
                <svg
                  className="relative"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.5 7.75H16.5M11.9213 11.875H11.928M11.9212 14.125H11.9279M9.14676 11.875H9.1535M9.14676 14.125H9.1535M6.37088 11.875H6.37762M6.37088 14.125H6.37762M5.25 4.75V1.75M12.75 4.75V1.75M7.5 18.25H10.5C13.3284 18.25 14.7426 18.25 15.6213 17.3713C16.5 16.4926 16.5 15.0784 16.5 12.25V9.25C16.5 6.42157 16.5 5.00736 15.6213 4.12868C14.7426 3.25 13.3284 3.25 10.5 3.25H7.5C4.67157 3.25 3.25736 3.25 2.37868 4.12868C1.5 5.00736 1.5 6.42157 1.5 9.25V12.25C1.5 15.0784 1.5 16.4926 2.37868 17.3713C3.25736 18.25 4.67157 18.25 7.5 18.25Z"
                    stroke="#111827"
                    stroke-width="1.8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  name="to-dt"
                  id="to-dt"
                  className="flex w-28 cursor-pointer appearance-none flex-row-reverse px-2 text-sm font-semibold text-gray-900 placeholder-gray-900 outline-0"
                  placeholder="11-01-2023"
                />
              </div>
            </div>
          </div>
          <div className="mt-7 border border-gray-300 pt-9">
            <div className="flex items-center justify-between px-3 max-md:flex-col md:px-11">
              <div className="data">
                <p className="text-lg leading-8 font-medium whitespace-nowrap text-black">
                  Order : #10234987
                </p>
                <p className="mt-3 text-lg leading-8 font-medium whitespace-nowrap text-black">
                  Order Payment : 18th march 2021
                </p>
              </div>
              <div className="flex items-center gap-3 max-md:mt-5">
                <button className="rounded-full border border-gray-300 bg-white px-7 py-3 text-sm font-semibold text-gray-900 shadow-xs shadow-transparent transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 hover:shadow-gray-200">
                  Show Invoice
                </button>
                <button className="rounded-full bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
                  Buy Now
                </button>
              </div>
            </div>
            <svg
              className="my-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div className="flex items-center gap-8 px-3 max-lg:flex-col md:px-11 lg:gap-24">
              <div className="grid w-full grid-cols-4">
                <div className="col-span-4 sm:col-span-1">
                  <img
                    src="https://pagedone.io/asset/uploads/1705474774.png"
                    alt=""
                    className="object-cover max-sm:mx-auto"
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-center max-sm:mt-4 max-sm:items-center sm:col-span-3 sm:pl-8">
                  <h6 className="font-manrope mb-3 text-2xl leading-9 font-semibold whitespace-nowrap text-black">
                    Decoration Flower port
                  </h6>
                  <p className="mb-8 text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    By: Dust Studios
                  </p>
                  <div className="flex items-center gap-x-10 gap-y-3 max-sm:flex-col">
                    <span className="text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                      Size: s
                    </span>
                    <span className="text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                      Qty: 1
                    </span>
                    <p className="text-xl leading-8 font-semibold whitespace-nowrap text-black">
                      Price $80.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-around sm:pl-28 lg:pl-0">
                <div className="flex flex-col items-start justify-center max-sm:items-center">
                  <p className="mb-2 text-left text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    Status
                  </p>
                  <p className="text-left text-lg leading-8 font-semibold whitespace-nowrap text-green-500">
                    Delivered
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center max-sm:items-center">
                  <p className="mb-2 text-left text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    Delivery Expected by
                  </p>
                  <p className="text-left text-lg leading-8 font-semibold whitespace-nowrap text-black">
                    23rd March 2021
                  </p>
                </div>
              </div>
            </div>

            <svg
              className="my-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div className="flex items-center gap-8 px-3 max-lg:flex-col md:px-11 lg:gap-24">
              <div className="grid w-full grid-cols-4">
                <div className="col-span-4 sm:col-span-1">
                  <img
                    src="https://pagedone.io/asset/uploads/1705474672.png"
                    alt=""
                    className="object-cover max-sm:mx-auto"
                  />
                </div>
                <div className="col-span-4 flex flex-col justify-center max-sm:mt-4 max-sm:items-center sm:col-span-3 sm:pl-8">
                  <h6 className="font-manrope mb-3 text-2xl leading-9 font-semibold whitespace-nowrap text-black">
                    Decoration’s Item
                  </h6>
                  <p className="mb-8 text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    By: Dust Studios
                  </p>
                  <div className="flex items-center gap-x-10 gap-y-3 max-sm:flex-col">
                    <span className="text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                      Size: s
                    </span>
                    <span className="text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                      Qty: 1
                    </span>
                    <p className="text-xl leading-8 font-semibold whitespace-nowrap text-black">
                      Price $80.00
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex w-full items-center justify-around sm:pl-28 lg:pl-0">
                <div className="flex flex-col items-start justify-center max-sm:items-center">
                  <p className="mb-2 text-left text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    Status
                  </p>
                  <p className="text-left text-lg leading-8 font-semibold whitespace-nowrap text-red-500">
                    Cancelled
                  </p>
                </div>
                <div className="flex flex-col items-start justify-center max-sm:items-center">
                  <p className="mb-2 text-left text-lg leading-8 font-normal whitespace-nowrap text-gray-500">
                    Delivery Expected by
                  </p>
                  <p className="text-left text-lg leading-8 font-semibold whitespace-nowrap text-black">
                    23rd March 2021
                  </p>
                </div>
              </div>
            </div>
            <svg
              className="mt-9 w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="1216"
              height="2"
              viewBox="0 0 1216 2"
              fill="none"
            >
              <path d="M0 1H1216" stroke="#D1D5DB" />
            </svg>

            <div className="flex items-center justify-between px-3 max-sm:flex-col-reverse md:px-11">
              <div className="flex items-center max-sm:flex-col-reverse">
                <button className="group flex items-center gap-3 border-gray-300 py-10 pr-8 text-xl leading-8 font-normal text-gray-500 transition-all duration-500 hover:text-indigo-600 sm:border-r">
                  <svg
                    width="40"
                    height="41"
                    viewBox="0 0 40 41"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="stroke-gray-600 transition-all duration-500 group-hover:stroke-indigo-600"
                      d="M14.0261 14.7259L25.5755 26.2753M14.0261 26.2753L25.5755 14.7259"
                      stroke=""
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  cancel order
                </button>
                <p className="text-xl leading-8 font-normal text-gray-500 sm:pl-8">
                  Payment Is Succesfull
                </p>
              </div>
              <p className="text-xl leading-8 font-medium text-black max-sm:py-4">
                {' '}
                <span className="text-gray-500">Total Price: </span> &nbsp;$200.00
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderHistory;

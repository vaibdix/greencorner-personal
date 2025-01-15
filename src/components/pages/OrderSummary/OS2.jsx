import React from 'react';

const OS2 = () => {
  return (
    <div>
      <section className="relative py-24">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-5 lg:px-5">
          <div className="inline-flex w-full flex-col items-start justify-start gap-8">
            <div className="flex w-full flex-col items-start justify-start gap-8 lg:gap-14">
              <div className="font-manrope w-full text-center text-3xl font-bold leading-normal text-black">
                Order Confirmation
              </div>
              <div className="flex flex-col items-start justify-start gap-3">
                <h4 className="text-xl font-medium leading-8 text-black">Hello, John smith</h4>
                <h5 className="text-lg font-normal leading-8 text-gray-500">
                  Thank you for shopping
                </h5>
                <h5 className="text-lg font-normal leading-8 text-gray-500">
                  Your order has been confirmed and will be shipped within two days.
                </h5>
              </div>
            </div>
            <div className="w-full items-start justify-center">
              <div className="hidden w-full grid-cols-2 bg-gray-50 p-4 md:grid">
                <span className="text-base font-normal leading-relaxed text-gray-500">Product</span>
                <p className="flex items-center justify-between">
                  <span className="w-full max-w-[200px] px-8 text-center text-base font-normal leading-relaxed text-gray-500">
                    Size
                  </span>
                  <span className="w-full max-w-[260px] px-8 text-center text-base font-normal leading-relaxed text-gray-500">
                    Quantity
                  </span>
                  <span className="w-full max-w-[200px] px-8 text-center text-base font-normal leading-relaxed text-gray-500">
                    Price
                  </span>
                  <span className="w-full max-w-[200px] text-center"></span>
                </p>
              </div>
              <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                    <img
                      src="https://pagedone.io/asset/uploads/1713334568.png"
                      alt="Denim Shirt image"
                      className="object-cover xl:w-[75px]"
                    />
                  </div>
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg font-medium leading-8 text-black max-[550px]:text-center">
                      Top for Women
                    </h4>
                    <h5 className="my-2 w-full text-base font-normal leading-relaxed text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 4553458120
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h5 className="w-full max-w-[142px] text-center text-lg font-medium leading-relaxed text-black">
                    L
                  </h5>
                  <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 12H6"
                        stroke="#111827"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg font-medium leading-relaxed text-gray-900 placeholder-gray-900 focus:outline-none"
                      placeholder="02"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 6V18M18 12H6"
                        stroke="#111827"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h5 className="w-full max-w-[142px] pl-5 text-center text-lg font-medium leading-relaxed text-black">
                    $50.00
                  </h5>
                  <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out">
                    <svg
                      className="mx-auto text-gray-500 transition-all duration-700 ease-in-out group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_484_1442)">
                        <path
                          d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_484_1442"
                          x="-2"
                          y="-1"
                          width="44"
                          height="44"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_484_1442"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_484_1442"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 border-b border-gray-200 py-3 max-xl:mx-auto max-sm:max-w-xl min-[550px]:gap-6 md:grid-cols-2">
                <div className="flex w-full flex-col items-center gap-3 max-xl:mx-auto max-sm:max-w-xl max-sm:justify-center min-[550px]:flex-row min-[550px]:gap-4">
                  <div className="img-box inline-flex h-[120px] w-[120px] items-center justify-center rounded-xl bg-gray-50">
                    <img
                      src="https://pagedone.io/asset/uploads/1713334581.png"
                      alt="Blue T-shirt for Men image"
                      className="object-cover xl:w-[75px]"
                    />
                  </div>
                  <div className="pro-data inline-flex w-full max-w-sm flex-col items-start justify-start gap-2">
                    <h4 className="w-full text-lg font-medium leading-8 text-black max-[550px]:text-center">
                      Blue T-shirt for Men
                    </h4>
                    <h5 className="my-2 w-full text-base font-normal leading-relaxed text-gray-500 max-[550px]:text-center min-[550px]:my-0">
                      Product ID: 8953458747
                    </h5>
                  </div>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 max-xl:mx-auto max-sm:max-w-xl min-[550px]:flex-row">
                  <h5 className="w-full max-w-[142px] text-center text-lg font-medium leading-relaxed text-black">
                    M
                  </h5>
                  <button className="mx-0 flex w-full max-w-[160px] items-center justify-center gap-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 12H6"
                        stroke="#111827"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    <input
                      type="text"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white px-2.5 text-lg font-medium leading-relaxed text-gray-900 placeholder-gray-900 focus:outline-none"
                      placeholder="02"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M12 6V18M18 12H6"
                        stroke="#111827"
                        stroke-width="1.6"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                  </button>
                  <h5 className="w-full max-w-[142px] pl-5 text-center text-lg font-medium leading-relaxed text-black">
                    $50.00
                  </h5>
                  <button className="group flex w-full max-w-[176px] items-center justify-center text-center transition-all duration-700 ease-in-out">
                    <svg
                      className="mx-auto text-gray-500 transition-all duration-700 ease-in-out group-hover:text-gray-900"
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_484_1442)">
                        <path
                          d="M13.5 13.5L26.5 26.5M26.5 13.5L13.5 26.5"
                          stroke="currentColor"
                          stroke-width="1.6"
                          stroke-linecap="round"
                        ></path>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_484_1442"
                          x="-2"
                          y="-1"
                          width="44"
                          height="44"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          ></feColorMatrix>
                          <feOffset dy="1"></feOffset>
                          <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                          <feComposite in2="hardAlpha" operator="out"></feComposite>
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0"
                          ></feColorMatrix>
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_484_1442"
                          ></feBlend>
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_484_1442"
                            result="shape"
                          ></feBlend>
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-start gap-4 rounded-xl border border-gray-200 p-5">
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h5 className="text-lg font-normal leading-8 text-gray-600">Subtotal:</h5>
                <h5 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  $ 100.00
                </h5>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h5 className="text-lg font-normal leading-8 text-gray-600">Delivery:</h5>
                <h5 className="text-right text-lg font-semibold leading-8 text-gray-900">Free</h5>
              </div>
              <div className="inline-flex w-full items-center justify-between gap-6">
                <h5 className="text-lg font-normal leading-8 text-gray-600">Total:</h5>
                <h5 className="text-right text-lg font-semibold leading-8 text-gray-900">
                  ₹100.00
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OS2;

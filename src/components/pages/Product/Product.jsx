// import React from 'react';

// const Product = () => {
//   return (
//     <div>
//       <div>
//         <section>
//           <div className="container mx-auto mt-10 px-6 py-12">
//             <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//               <div className="grid grid-cols-1 gap-12">
//                 <img
//                   src="https://i.pinimg.com/736x/99/b0/d5/99b0d51b23d5f05728358a65bba3843d.jpg"
//                   alt=""
//                   className="aspect-square rounded-lg object-cover"
//                 />
//               </div>

//               <div className="rounded-lg py-5 md:p-8 lg:p-16">
//                 <div className="mb-2 text-gray-400">WELCOME BACK 👋🏻</div>
//                 <div className="mb-8 text-3xl">Continue to Your Account</div>

//                 <form>
//                   <button
//                     id="googleSignInBtn"
//                     className="flex h-12 w-full items-center justify-center rounded-full border-gray-300 bg-[#E3F3FB] p-3"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 326667 333333"
//                       shapeRendering="geometricPrecision"
//                       textRendering="geometricPrecision"
//                       imageRendering="optimizeQuality"
//                       fillRule="evenodd"
//                       clipRule="evenodd"
//                       className="mr-3 h-6 w-6"
//                     >
//                       <path
//                         d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z"
//                         fill="#4285f4"
//                       />
//                       <path
//                         d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z"
//                         fill="#34a853"
//                       />
//                       <path
//                         d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z"
//                         fill="#fbbc04"
//                       />
//                       <path
//                         d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z"
//                         fill="#ea4335"
//                       />
//                     </svg>
//                     <span className="text-gray-700">Sign in with Google</span>
//                   </button>

//                   <div className="relative m-6 flex items-center justify-center">
//                     <div className="flex-grow border-t border-gray-300"></div>
//                     <span className="mx-4 text-gray-400">Or use Email</span>
//                     <div className="flex-grow border-t border-gray-300"></div>
//                   </div>

//                   <div className="mt-4">
//                     <input
//                       type="email"
//                       placeholder="EMAIL"


//                       className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                     />
//                   </div>

//                   <div className="relative mt-4">
//                     <input
//                      type='password'
//                       placeholder="PASSWORD"

//                       className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
//                     />
//                     <button
//                       type="button"

//                       className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-400"
//                     >

//                     </button>
//                   </div>



//                   <button className="mt-4 h-12 w-full rounded-md bg-[#1C3035] px-6 text-sm text-white">
//                     CONTINUE
//                   </button>
//                   <div className="mt-2 text-[12px] text-gray-400">
//                     By Signing In to Green Corner, you agree to our Privacy Policy and Terms of
//                     Service
//                   </div>
//                 </form>
//                 <div className="mt-8 text-center text-sm text-gray-400">
//                   Already a Member ?{' '}
//                   <span className="font-bold text-gray-800">GET STARTED - IT'S FREE</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Product;









import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Product = () => {
  return (
    <section className="py-10 lg:py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Product Details */}
          <div className="pro-detail w-full flex flex-col justify-center order-last lg:order-none max-lg:max-w-[608px] max-lg:mx-auto">
            <p className="font-medium text-lg text-indigo-600 mb-4">
              Travel &nbsp; / &nbsp; Menswear
            </p>
            <h2 className="mb-2 font-manrope font-bold text-3xl leading-10 text-gray-900">
              Yellow Summer Travel Bag
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
              <h6 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 pr-5 sm:border-r border-gray-200 mr-5">
                $220
              </h6>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {['#FBBF24', '#FBBF24', '#FBBF24', '#FBBF24', '#F3F4F6'].map((color, index) => (
                    <svg
                      key={index}
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0)">
                        <path
                          d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
                          fill={color}
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  ))}
                </div>
                <span className="pl-2 font-normal leading-7 text-gray-500 text-sm">1624 reviews</span>
              </div>
            </div>
            <p className="text-gray-500 text-base font-normal mb-8">
              The perfect companion for your next adventure! Embrace the spirit of sunny escapades with this vibrant and versatile bag designed to cater to your travel needs while adding a pop of color to your journey.
            </p>
            {/* Bag Color Options */}
            <div className="block w-full">
              <p className="font-medium text-lg leading-8 text-gray-900 mb-4">Bag Color</p>
              <div className="flex items-center justify-start gap-3 md:gap-6 relative mb-6">
                {['#10B981', '#FBBF24', '#F43F5E', '#2563EB'].map((color, index) => (
                  <button
                    key={index}
                    className="p-2.5 border border-gray-200 rounded-full transition-all duration-300 hover:border-emerald-500"
                    style={{ borderColor: color }}
                  >
                    <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="20" cy="20" r="20" fill={color} />
                    </svg>
                  </button>
                ))}
              </div>
              {/* Bag Size Options */}
              <div className="block w-full mb-6">
                <p className="font-medium text-lg leading-8 text-gray-900 mb-4">Bag Size</p>
                <div className="grid grid-cols-2 min-[400px]:grid-cols-3 gap-3">
                  {['56 cm (S)', '67 cm (M)', '77 cm (L)'].map((size, index) => (
                    <button
                      key={index}
                      className="border border-gray-200 text-gray-900 text-lg py-2 rounded-full px-1.5 sm:px-6 w-full font-semibold whitespace-nowrap shadow-sm shadow-transparent transition-all duration-300 hover:shadow-gray-300 hover:bg-gray-50 hover:border-gray-300"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              {/* Add to Cart */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="flex items-center justify-center w-full">
                  <button className="group py-4 px-6 border border-gray-400 rounded-l-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                    <svg
                      className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="font-semibold text-gray-900 text-lg py-[13px] px-6 w-full lg:max-w-[118px] border-y border-gray-400 bg-transparent placeholder:text-gray-900 text-center hover:bg-gray-50 focus-within:bg-gray-50 outline-0"
                    placeholder="1"
                  />
                  <button className="group py-4 px-6 border border-gray-400 rounded-r-full shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-300 hover:bg-gray-50">
                    <svg
                      className="stroke-gray-700 transition-all duration-500 group-hover:stroke-black"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                    </svg>
                  </button>
                </div>
                <button
                  className="group py-4 px-5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"
                >
                  <svg
                    className="stroke-indigo-600 transition-all duration-500"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9822 19.25C14.2011 19.25 13.5679 18.6344 13.5679 17.875M3.24987 2.5L3.97487 13.75C3.99987 14.249 4.24987 14.75 4.74987 14.75H15.2499C15.7499 14.75 15.9999 14.249 15.9749 13.75L15.2499 2.5C15.2249 1.99999 14.9749 1.5 14.4749 1.5H7.47487C6.97487 1.5 6.72487 1.99999 6.74987 2.5H3.24987Z" strokeWidth="1.5" />
                  </svg>
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>

          {/* Product Image */}
          <div className="order-first lg:order-last w-full flex justify-center">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              navigation
              loop
              className="max-w-lg mx-auto"
            >
              <SwiperSlide>
                <img
                  className="rounded-xl object-cover w-full"
                  src="https://via.placeholder.com/500x500"
                  alt="Yellow Summer Travel Bag"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="rounded-xl object-cover w-full"
                  src="https://via.placeholder.com/500x500"
                  alt="Yellow Summer Travel Bag"
                />
              </SwiperSlide>
              {/* Add more SwiperSlides as necessary */}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;

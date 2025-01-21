// import React from 'react';
// import React, { useState } from 'react';

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
import { CarTaxiFront } from 'lucide-react';
import { DollarSign } from 'lucide-react';
import { Lightbulb } from 'lucide-react';

const plants = [
  {
    name: 'Peace Lily',
    type: 'Indoor plant',
    price: '₹ 1500',
    rating: 4.5, // Add the rating for the plant
    imageUrl:
      'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
    bgColor: 'bg-[#F7F7F7]', // Background color for the image container
    basket: '#000',
  },
  {
    name: 'Peace Lily',
    type: 'Indoor plant',
    price: '₹ 1500',
    rating: 4.5, // Add the rating for the plant
    imageUrl:
      'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
    bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
    basket: '#000',
  },
  {
    name: 'Peace Lily',
    type: 'Indoor plant',
    price: '₹ 1500',
    rating: 4.5, // Add the rating for the plant
    imageUrl:
      'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
    bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
  },
  {
    name: 'Peace Lily',
    type: 'Indoor plant',
    price: '₹ 1500',
    rating: 4.5, // Add the rating for the plant
    imageUrl:
      'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
    bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
  },
  {
    name: 'Peace Lily',
    type: 'Indoor plant',
    price: '₹ 1500',
    rating: 4.5, // Add the rating for the plant
    imageUrl:
      'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
    bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
  },
];

const PlantCard = ({ name, type, price, imageUrl, bgColor, rating }) => {
  const renderStars = (rating) => {
    return <span className="text-yellow-500">★</span>;
  };

  return (
    <div className="w-auto rounded-lg">
      <div className={`${bgColor} relative`}>
        {/* 50% Off Pill */}
        <div className="absolute left-3 top-3 rounded-full bg-[#1c3035] px-3 py-[6px] text-xs text-white">
          50% OFF
        </div>

        {/* Circle div */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1c3035]">
          <span className="text-xs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          </span>
        </div>

        <div className="flex items-center justify-center">
          <img className="rounded-xl" src={imageUrl} alt={`${name} plant`} />
        </div>
      </div>

      <div className="mt-2">
        <span className="flex w-full flex-col text-sm opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-end">{type}</span>

          <div className="mt-1 flex items-center sm:ml-auto sm:mt-0">
            <span className="text-sm">{renderStars(rating)}</span>
            <span className="ml-2 text-sm">{rating}</span>
          </div>
        </span>

        {/* Tailwind Grid Layout */}
        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="name col-span-1 row-span-1 text-lg">{name}</div>

          {/* Basket Icon */}
          <div className="basket col-span-1 row-span-2 mt-2 flex justify-end sm:ml-auto">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3035] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22" // Adjust the size of the SVG
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shopping-bag"
              >
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
            </div>
          </div>

          <div className="price col-span-1 row-span-1 text-sm">{price}</div>

          {/* Extra Basket Column for Responsive Spacing */}
          <div className="col-span-1 row-span-1"></div>
        </div>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="mt-5 grid grid-cols-1 gap-7 pl-5 pr-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {plants.map((plant, index) => (
        <PlantCard
          key={index}
          name={plant.name}
          type={plant.type}
          price={plant.price}
          imageUrl={plant.imageUrl}
          bgColor={plant.bgColor} // Pass bgColor as a prop
          rating={plant.rating} // Pass rating as a prop
        />
      ))}
    </div>
  );
};

// const CateFilter = () => {
//   return (
//     <div>
//       <Header />
//       <section className="relative py-24">
//         <div className="mx-auto w-full max-w-7xl px-4 md:px-8">
//           <div className="flex w-full flex-col justify-between max-lg:gap-4 lg:flex-row lg:items-center">
//             <ul className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-12">
//               <li className="group flex cursor-pointer items-center outline-none">
//                 <DollarSign />
//                 <span className="ml-2 mr-3 text-lg font-normal leading-8 text-indigo-600 transition-all duration-500 group-hover:text-indigo-600">
//                   Finance
//                 </span>
//                 <button className="font-manrope flex aspect-square h-6 items-center justify-center rounded-full border border-indigo-600 text-base font-medium text-indigo-600 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
//                   8
//                 </button>
//               </li>

//               <li className="group flex cursor-pointer items-center outline-none">
//                 <CarTaxiFront />
//                 <span className="pl-2 pr-3 text-lg font-normal leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
//                   Management
//                 </span>
//                 <span className="font-manrope flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-base font-medium text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
//                   3
//                 </span>
//               </li>

//               <li className="group flex cursor-pointer items-center outline-none">
//                 <Lightbulb />
//                 <span className="pl-2 pr-3 text-lg font-normal leading-8 text-black transition-all duration-500 group-hover:text-indigo-600">
//                   Today’s deal
//                 </span>
//                 <span className="font-manrope flex h-6 w-6 items-center justify-center rounded-full border border-gray-900 text-base font-medium text-gray-900 transition-all duration-500 group-hover:border-indigo-600 group-hover:text-indigo-600">
//                   1
//                 </span>
//               </li>
//             </ul>
//             <div className="relative w-full max-w-sm">
//               <svg
//                 className="absolute left-4 top-1/2 z-50 -translate-y-1/2"
//                 width="20"
//                 height="20"
//                 viewBox="0 0 20 20"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
//                   stroke="black"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                 />
//               </svg>
//               <select
//                 id="Offer"
//                 className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 pl-11 text-base font-normal leading-7 text-gray-900 transition-all duration-500 focus-within:bg-gray-50 hover:border-gray-400 hover:bg-gray-50 focus:outline-none"
//               >
//                 <option selected>Sort by time(high to low)</option>
//                 <option value="option 1">option 1</option>
//                 <option value="option 2">option 2</option>
//                 <option value="option 3">option 3</option>
//                 <option value="option 4">option 4</option>
//               </select>
//               <svg
//                 className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
//                 width="16"
//                 height="16"
//                 viewBox="0 0 16 16"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
//                   stroke="#111827"
//                   stroke-width="1.6"
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                 />
//               </svg>
//             </div>
//           </div>
//           <svg
//             className="my-7 w-full"
//             xmlns="http://www.w3.org/2000/svg"
//             width="1216"
//             height="2"
//             viewBox="0 0 1216 2"
//             fill="none"
//           >
//             <path d="M0 1H1216" stroke="#E5E7EB" />
//           </svg>
//           <div className="grid grid-cols-12">
//             <div className="col-span-12 w-full max-md:mx-auto max-md:max-w-md md:col-span-3">
//               <div className="box w-full rounded-xl border border-gray-300 bg-white p-6 md:max-w-sm">
//                 <h6 className="mb-5 text-base font-medium leading-7 text-black">Your Workspace</h6>
//                 <div className="mb-5 flex items-center gap-1">
//                   <div className="relative w-full">
//                     <select
//                       id="FROM"
//                       className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
//                     >
//                       <option selected>Min</option>
//                       <option value="option 1">option 1</option>
//                       <option value="option 2">option 2</option>
//                       <option value="option 3">option 3</option>
//                       <option value="option 4">option 4</option>
//                     </select>
//                     <svg
//                       className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
//                         stroke="#111827"
//                         stroke-width="1.6"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </div>
//                   <p className="px-1 text-sm font-normal leading-6 text-gray-600">to</p>
//                   <div className="relative w-full">
//                     <select
//                       id="FROM"
//                       className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
//                     >
//                       <option selected>Max</option>
//                       <option value="option 1">option 1</option>
//                       <option value="option 2">option 2</option>
//                       <option value="option 3">option 3</option>
//                       <option value="option 4">option 4</option>
//                     </select>
//                     <svg
//                       className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 16 16"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
//                         stroke="#111827"
//                         stroke-width="1.6"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>

//                 <label
//                   for="countries"
//                   className="mb-2 block w-full text-sm font-medium text-gray-600"
//                 >
//                   Zip Code
//                 </label>
//                 <div className="relative mb-8 w-full">
//                   <select
//                     id="FROM"
//                     className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
//                   >
//                     <option selected>Write code</option>
//                     <option value="option 1">option 1</option>
//                     <option value="option 2">option 2</option>
//                     <option value="option 3">option 3</option>
//                     <option value="option 4">option 4</option>
//                   </select>
//                   <svg
//                     className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
//                       stroke="#111827"
//                       stroke-width="1.6"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <button className="flex w-full items-center justify-center gap-2 rounded-full bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-200">
//                   <svg
//                     width="17"
//                     height="16"
//                     viewBox="0 0 17 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
//                       stroke="white"
//                       stroke-width="1.6"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                   Search
//                 </button>
//               </div>

//               <div className="box mt-7 w-full rounded-xl border border-gray-300 bg-white p-6 md:max-w-sm">
//                 <div className="mb-7 flex w-full items-center justify-between border-b border-gray-200 pb-3">
//                   <p className="text-base font-medium leading-7 text-black">Filter Plans</p>
//                   <p className="cursor-pointer text-xs font-medium text-gray-500 transition-all duration-500 hover:text-indigo-600">
//                     RESET
//                   </p>
//                 </div>

//                 <div className="mb-7 w-full">
//                   <div
//                     className="accordion-group grid grid-cols-1 gap-5 sm:gap-9"
//                     data-accordion="default-accordion"
//                   >
//                     <div className="accordion" id="category-heading-one">
//                       <button
//                         className="accordion-toggle accordion-active:text-indigo-600 group inline-flex w-full items-center justify-between leading-8 text-gray-600 transition duration-500 hover:text-indigo-600 active:text-indigo-600"
//                         aria-controls="category-collapse-one"
//                       >
//                         <h5 className="text-sm font-medium text-gray-900">Availability</h5>
//                         <svg
//                           className="accordion-active:text-indigo-600 accordion-active:rotate-180 text-gray-900 transition duration-500 group-hover:text-indigo-600"
//                           width="22"
//                           height="22"
//                           viewBox="0 0 22 22"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                         >
//                           <path
//                             d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
//                             stroke="currentColor"
//                             stroke-width="1.6"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                           ></path>
//                         </svg>
//                       </button>
//                       <div
//                         id="category-collapse-one"
//                         className="accordion-content max-h-0 w-full overflow-hidden px-0 pr-4"
//                         aria-labelledby="category-heading-one"
//                       >
//                         <div className="box mt-5 flex flex-col gap-2">
//                           <div className="mb-2 flex items-center">
//                             <input
//                               id="checkbox-option-1"
//                               type="checkbox"
//                               value=""
//                               className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-100 checked:bg-indigo-600 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
//                             />
//                             <label
//                               for="checkbox-option-1"
//                               className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
//                             >
//                               option-1
//                             </label>
//                           </div>
//                           <div className="mb-2 flex items-center">
//                             <input
//                               id="checkbox-option-2"
//                               type="checkbox"
//                               value=""
//                               className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-100 hover:bg-indigo-600"
//                             />
//                             <label
//                               for="checkbox-option-2"
//                               className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
//                             >
//                               option-2
//                             </label>
//                           </div>
//                           <div className="mb-2 flex items-center">
//                             <input
//                               id="checkbox-option-3"
//                               type="checkbox"
//                               value=""
//                               className="checkbox-white mr-1 h-5 w-5 appearance-none rounded border border-gray-500 checked:border-indigo-600 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-600 hover:bg-indigo-600"
//                             />
//                             <label
//                               for="checkbox-option-3"
//                               className="ml-1 cursor-pointer text-xs font-normal text-gray-600"
//                             >
//                               option-3
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <label for="Offer" className="mb-1 text-sm font-medium leading-6 text-gray-600">
//                   Offer
//                 </label>
//                 <div className="relative mb-7 w-full">
//                   <select
//                     id="Offer"
//                     className="relative block h-12 w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-2.5 text-xs font-medium text-gray-900 focus:outline-none"
//                   >
//                     <option selected>5% off upi discount</option>
//                     <option value="option 1">option 1</option>
//                     <option value="option 2">option 2</option>
//                     <option value="option 3">option 3</option>
//                     <option value="option 4">option 4</option>
//                   </select>
//                   <svg
//                     className="absolute right-4 top-1/2 z-50 -translate-y-1/2"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 16 16"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
//                       stroke="#111827"
//                       stroke-width="1.6"
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <p className="mb-3 text-sm font-medium leading-6 text-black">Discount</p>
//                 <div className="box flex flex-col gap-2">
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-default-1"
//                       type="checkbox"
//                       value=""
//                       className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
//                     />
//                     <label
//                       for="checkbox-default-1"
//                       className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
//                     >
//                       20% or more
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-default-2"
//                       type="checkbox"
//                       value=""
//                       className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
//                     />
//                     <label
//                       for="checkbox-default-2"
//                       className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
//                     >
//                       30% or more
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="checkbox-default-3"
//                       type="checkbox"
//                       value=""
//                       className="mr-2 h-5 w-5 appearance-none rounded-md border border-gray-300 checked:border-indigo-500 checked:bg-indigo-100 checked:bg-[url('https://pagedone.io/asset/uploads/1689406942.svg')] checked:bg-center checked:bg-no-repeat hover:border-indigo-500 hover:bg-indigo-100"
//                     />
//                     <label
//                       for="checkbox-default-3"
//                       className="cursor-pointer text-xs font-normal leading-4 text-gray-600"
//                     >
//                       50% or more
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-span-12 md:col-span-9">
//               {/* Add the Card component here */}
//               <Card />
//             </div>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </div>
//   );
// };

// export default CateFilter;

// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// import { Star } from 'lucide-react';
// import { ChevronRight } from 'lucide-react';
// import { ChevronLeft } from 'lucide-react';
// import { ChevronDown } from 'lucide-react';

// const CateFilter = () => {
//   return (
//     <div>
//       <Header />
//       <Section />
//       <Footer />
//     </div>
//   );
// };

// const Section = () => {
//   return (
//     <>
//       <div className="grid grid-cols-[20%,1fr]">
//         <div className="border">
//           <div className="border-b p-5 text-xl font-semibold">Filter</div>
//           <div className="mt-4">
//             <h3 className="pl-5 text-lg font-medium">Category</h3>
//             <div className="space-y-2 pl-1 pr-1">
//               <details className="overflow-hidden rounded [&_summary::-webkit-details-marker]:hidden">
//                 <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
//                   <span className="text-sm font-medium"> Availability </span>
//                   <ChevronDown />
//                 </summary>
//                 <div className="border-t border-gray-200 bg-white">
//                   <header className="flex items-center justify-between p-4">
//                     <span className="text-sm text-gray-700"> 0 Selected </span>
//                     <button
//                       type="button"
//                       className="text-sm text-gray-900 underline underline-offset-4"
//                     >
//                       Reset
//                     </button>
//                   </header>
//                   <ul className="space-y-1 border-t border-gray-200 p-4">
//                     <li>
//                       <label htmlFor="FilterInStock" className="inline-flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id="FilterInStock"
//                           className="size-5 rounded border-gray-300"
//                         />

//                         <span className="text-sm font-medium text-gray-700"> In Stock (5+) </span>
//                       </label>
//                     </li>

//                     <li>
//                       <label htmlFor="FilterPreOrder" className="inline-flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id="FilterPreOrder"
//                           className="size-5 rounded border-gray-300"
//                         />
//                         <span className="text-sm font-medium text-gray-700"> Pre Order (3+) </span>
//                       </label>
//                     </li>
//                     <li>
//                       <label htmlFor="FilterOutOfStock" className="inline-flex items-center gap-2">
//                         <input
//                           type="checkbox"
//                           id="FilterOutOfStock"
//                           className="size-5 rounded border-gray-300"
//                         />
//                         <span className="text-sm font-medium text-gray-700">
//                           Out of Stock (10+)
//                         </span>
//                       </label>
//                     </li>
//                   </ul>
//                 </div>
//               </details>

//               <details className="overflow-hidden [&_summary::-webkit-details-marker]:hidden">
//                 <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
//                   <span className="text-sm font-medium"> Price </span>
//                   <ChevronDown />
//                 </summary>

//                 <div className="border-t border-gray-200 bg-white">
//                   <header className="flex items-center justify-between p-4">
//                     <span className="text-sm text-gray-700"> The highest price is $600 </span>
//                     <button
//                       type="button"
//                       className="text-sm text-gray-900 underline underline-offset-4"
//                     >
//                       Reset
//                     </button>
//                   </header>

//                   <div className="border-t border-gray-200 p-4">
//                     <div className="flex justify-between gap-4">
//                       <label htmlFor="FilterPriceFrom" className="flex items-center gap-2">
//                         <span className="text-sm text-gray-600">$</span>
//                         <input
//                           type="number"
//                           id="FilterPriceFrom"
//                           placeholder="From"
//                           className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                         />
//                       </label>

//                       <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
//                         <span className="text-sm text-gray-600">$</span>
//                         <input
//                           type="number"
//                           id="FilterPriceTo"
//                           placeholder="To"
//                           className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
//                         />
//                       </label>
//                     </div>
//                   </div>
//                 </div>
//               </details>
//             </div>
//           </div>

//           <RatingComponent />
//         </div>

//         {/* <Sort /> */}
//         <Card />
//         {/* <div className="col-span-4 bg-green-500">text</div>
//         <div className="bg-yellow-400">text</div>
//         <div className="bg-blue-400">text</div>
//         <div className="bg-red-400">text</div> */}
//       </div>

//       <nav aria-label="Page navigation" class="mb-10 mt-5 flex justify-end pr-10">
//         <ul class="flex h-8 -space-x-px text-sm">
//           <li>
//             <a
//               href="#"
//               class="ms-0 flex h-8 items-center justify-center rounded-s-lg border-gray-300 px-3 leading-tight text-gray-500"
//             >
//               <span class="sr-only">Previous</span>
//               <ChevronLeft />
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex h-8 items-center justify-center px-3 leading-tight text-gray-500 hover:bg-gray-100"
//             >
//               1
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex h-8 items-center justify-center px-3 leading-tight text-gray-500 hover:bg-gray-100"
//             >
//               2
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               aria-current="page"
//               class="z-10 flex h-8 items-center justify-center rounded-full border border-[#1C3035] bg-[#1C3035] px-3 leading-tight text-[#fff] opacity-90 hover:bg-[#1C3035] hover:text-[#1C3035]"
//             >
//               3
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex h-8 items-center justify-center px-3 leading-tight text-gray-500 hover:bg-gray-100"
//             >
//               4
//             </a>
//           </li>
//           <li>
//             <a
//               href="#"
//               class="flex h-8 items-center justify-center rounded-e-lg px-3 leading-tight text-gray-500 hover:bg-gray-100"
//             >
//               <span class="sr-only">Next</span>
//               <ChevronRight />
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default CateFilter;

import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Star } from 'lucide-react';
import CardTen from '../CardFive'; // Assuming CardFive contains the PlantCard component

const CateFilter = () => {
  return (
    <div>
      <Header />
      <Section />
      <Footer />
      <ToastContainer />
    </div>
  );
};

const Section = () => {
  const [plants, setPlants] = useState([]);
  const [filteredPlants, setFilteredPlants] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 600 });
  const [availability, setAvailability] = useState({
    inStock: false,
    preOrder: false,
    outOfStock: false,
  });
  const [rating, setRating] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((response) => response.json())
      .then((data) => {
        setPlants(data);
        setFilteredPlants(data);
      })
      .catch((error) => console.error('Error fetching plants:', error));
  }, []);

  const handlePriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (e) => {
    setAvailability({
      ...availability,
      [e.target.name]: e.target.checked,
    });
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const applyFilters = () => {
    let filtered = [...plants];

    if (availability.inStock) {
      filtered = filtered.filter((plant) => plant.stock > 0);
    }
    if (availability.preOrder) {
      filtered = filtered.filter((plant) => plant.stock === 0);
    }
    if (availability.outOfStock) {
      filtered = filtered.filter((plant) => plant.stock === 0);
    }

    if (priceRange.min && priceRange.max) {
      filtered = filtered.filter(
        (plant) => plant.price >= priceRange.min && plant.price <= priceRange.max
      );
    }

    if (rating > 0) {
      filtered = filtered.filter((plant) => plant.rating >= rating);
    }

    setFilteredPlants(filtered);
  };

  // Get the plants for the current page
  const indexOfLastPlant = currentPage * productsPerPage;
  const indexOfFirstPlant = indexOfLastPlant - productsPerPage;
  const currentPlants = filteredPlants.slice(indexOfFirstPlant, indexOfLastPlant);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredPlants.length / productsPerPage);

  return (
    <div className="grid grid-cols-[20%,1fr] gap-4">
      <div className="border p-4">
        <div className="border-b p-5 text-xl font-semibold">Filter</div>

        {/* Category */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Availability</h3>
        <div className="space-y-2 pl-1 pr-1">
          <details>
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
              Availability <ChevronDown />
            </summary>
            <div className="p-4">
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={availability.inStock}
                  onChange={handleAvailabilityChange}
                  className="border-gray-300"
                />
                <span className="text-sm font-medium">In Stock (5+)</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="preOrder"
                  checked={availability.preOrder}
                  onChange={handleAvailabilityChange}
                  className="border-gray-300"
                />
                <span className="text-sm font-medium">Pre Order (3+)</span>
              </label>
              <br />
              <label className="inline-flex items-center gap-2">
                <input
                  type="checkbox"
                  name="outOfStock"
                  checked={availability.outOfStock}
                  onChange={handleAvailabilityChange}
                  className="border-gray-300"
                />
                <span className="text-sm font-medium">Out of Stock (10+)</span>
              </label>
            </div>
          </details>
        </div>

        {/* Price Range */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Price</h3>
        <div className="space-y-2 pl-1 pr-1">
          <details>
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
              Price <ChevronDown />
            </summary>
            <div className="p-4">
              <div className="flex gap-4">
                <label htmlFor="minPrice" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    id="minPrice"
                    name="min"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
                <label htmlFor="maxPrice" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">$</span>
                  <input
                    type="number"
                    id="maxPrice"
                    name="max"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
              </div>
            </div>
          </details>
        </div>

        {/* Rating */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Rating</h3>
        <div className="space-y-2 pl-1 pr-1">
          <details>
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
              Rating <ChevronDown />
            </summary>
            <div className="p-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-gray-400'}`}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Apply Filters Button */}
        <button onClick={applyFilters} className="mt-4 rounded bg-[#1c3035] px-4 py-2 text-white">
          Apply Filters
        </button>
      </div>

      {/* Filtered Plant Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            type={plant.categories[0]} // Assuming first category as the type
            price={plant.price}
            imageUrl={plant.primaryImage}
            rating={plant.rating}
            sunlight={plant.sunlightRequirement}
            bgColor={plant.bgColor}
          />
        ))}
      </div>

      {/* Pagination */}
      <nav aria-label="Page navigation" className="mb-10 mt-5 grid justify-self-end">
        <ul className="flex text-sm">
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
              className="ms-0 flex h-8 items-center justify-center rounded-s-lg border-gray-300 px-3 leading-tight text-gray-500"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeft />
            </a>
          </li>
          {[...Array(totalPages)].map((_, index) => (
            <li key={index}>
              <a
                href="#"
                onClick={() => paginate(index + 1)}
                className={`flex h-8 items-center justify-center px-3 leading-tight text-gray-500 ${
                  currentPage === index + 1 ? 'bg-[#1C3035] text-white' : 'hover:bg-gray-100'
                }`}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#"
              onClick={() => paginate(currentPage < totalPages ? currentPage + 1 : totalPages)}
              className="flex h-8 items-center justify-center rounded-e-lg border-gray-300 px-3 leading-tight text-gray-500"
            >
              <span className="sr-only">Next</span>
              <ChevronRight />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CateFilter;

export const RatingComponent = () => {
  const [rating, setRating] = useState(0); // state to track the rating
  const [hovered, setHovered] = useState(0); // state to track hover effect

  // Handle star hover
  const handleMouseEnter = (index) => {
    setHovered(index + 1);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHovered(rating); // Reset hover state to current rating
  };

  // Handle star click (set rating)
  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  const Star = ({ filled, onClick, onMouseEnter, onMouseLeave }) => (
    <div
      className={`h-4 w-4 cursor-pointer ${filled ? 'text-yellow-500' : 'text-gray-400'}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      ★
    </div>
  );

  return (
    <div className="p-5">
      <p className="hover:text-amber-400">Rating</p>
      <div className="mt-3 flex gap-2">
        {Array(5)
          .fill()
          .map((_, index) => (
            <Star
              key={index}
              filled={index + 1 <= (hovered || rating)} // Show filled stars based on hover or rating
              onClick={() => handleStarClick(index)} // Set the rating on click
              onMouseEnter={() => handleMouseEnter(index)} // Handle hover enter
              onMouseLeave={handleMouseLeave} // Handle hover leave
            />
          ))}
      </div>
    </div>
  );
};

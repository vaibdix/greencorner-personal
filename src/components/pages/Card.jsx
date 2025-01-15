// import React from 'react';

// const plants = [
//   {
//     name: 'Peace Lily',
//     type: 'Indoor plant',
//     price: '₹ 1500',
//     rating: 4.5, // Add the rating for the plant
//     imageUrl:
//       'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
//     bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
//     basket: '#000',
//   },
//   {
//     name: 'Peace Lily',
//     type: 'Indoor plant',
//     price: '₹ 1500',
//     rating: 4.5, // Add the rating for the plant
//     imageUrl:
//       'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
//     bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
//     basket: '#000',
//   },
//   {
//     name: 'Peace Lily',
//     type: 'Indoor plant',
//     price: '₹ 1500',
//     rating: 4.5, // Add the rating for the plant
//     imageUrl:
//       'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
//     bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
//   },
//   {
//     name: 'Peace Lily',
//     type: 'Indoor plant',
//     price: '₹ 1500',
//     rating: 4.5, // Add the rating for the plant
//     imageUrl:
//       'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
//     bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
//   },
//   {
//     name: 'Peace Lily',
//     type: 'Indoor plant',
//     price: '₹ 1500',
//     rating: 4.5, // Add the rating for the plant
//     imageUrl:
//       'https://user-images.githubusercontent.com/2805249/64069899-8bdaa180-cc97-11e9-9b19-1a9e1a254c18.png',
//     bgColor: 'bg-[#F7F7F7] rounded-xl', // Background color for the image container
//   },

//   // Add more plants if needed
// ];

// const PlantCard = ({ name, type, price, imageUrl, bgColor, rating }) => {
//   // Render a single star and the rating
//   const renderStars = (rating) => {
//     return <span className="text-yellow-500">★</span>;
//   };

//   return (
//     <div className="relative overflow-hidden rounded-lg">
//       <div className={`${bgColor}`}>
//         <div className="pt-10 pb-5 px-10 flex items-center justify-center">
//           <img className="relative" src={imageUrl} alt={`${name} plant`} />
//         </div>
//       </div>
//       <div className="relative mt-2">
//         <span className="text-sm opacity-50 -mb-0.5 flex items-end">
//           {type}
//           <span className="text-sm pl-32">{renderStars(rating)}</span>
//           <span className="text-xs ml-2">{rating}</span>
//         </span>

//         {/* Tailwind Grid Layout */}
//         <div className="grid grid-cols-2 grid-rows-2 gap-0 grid-flow-row">
//           <div className="name col-span-1 row-span-1 font-semibold text-xl">{name}</div>

//           {/* Basket Icon */}
//           <div className="basket flex pl-[90px] col-span-1 row-span-2 mt-2">
//             <div className="bg-[#1c3035] text-white w-9 h-9 flex items-center justify-center rounded-full">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22" // Adjust the size of the SVG
//                 height="22"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-shopping-bag"
//               >
//                 <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
//                 <path d="M3 6h18" />
//                 <path d="M16 10a4 4 0 0 1-8 0" />
//               </svg>
//             </div>
//           </div>

//           <div className="price col-span-1 row-span-1 text-sm">{price}</div>

//           <div className="basket col-span-1 row-span-1"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Card = () => {
//   return (
//     <div className="p-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
//       {plants.map((plant, index) => (
//         <PlantCard
//           key={index}
//           name={plant.name}
//           type={plant.type}
//           price={plant.price}
//           imageUrl={plant.imageUrl}
//           bgColor={plant.bgColor} // Pass bgColor as a prop
//           rating={plant.rating} // Pass rating as a prop
//         />
//       ))}
//     </div>
//   );
// };

// export default Card;

import React from 'react';

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

  // Add more plants if needed
];

const PlantCard = ({ name, type, price, imageUrl, bgColor, rating }) => {
  // Render a single star and the rating
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

        <div className="flex items-center justify-center pb-7 pl-14 pr-14 pt-14">
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
    <div className="grid grid-cols-1 gap-7 p-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
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

export default Card;

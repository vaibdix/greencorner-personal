// import { useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { context } from '../../../context/AppContext';
// import { toast } from 'react-hot-toast';
// import { Heart } from 'lucide-react';

// const PlantCard = ({ id, name, type, price, imageUrl, bgColor, rating, primaryImage }) => {
//   const navigate = useNavigate();
//   const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(context);

//   const displayImage = imageUrl || primaryImage;

//   const handleAddToFav = (e) => {
//     e.stopPropagation();
//     const productData = { id, name, type, price, imageUrl: displayImage };

//     if (isInWishlist(id)) {
//       removeFromWishlist(id);
//       toast.success('Removed from wishlist!');
//     } else {
//       addToWishlist(productData);
//       toast.success('Added to wishlist!');
//     }
//   };

//     console.log('Plant Card Props:', { id, name, type, price, imageUrl, primaryImage, bgColor, rating });

//   const handleClick = () => {
//     navigate(`/product/${id}`);
//   };

//   const handleImageError = (e) => {
//     // console.error('Image failed to load:', displayImage);
//     e.target.src = 'src/assets/plantLogin.png'; // Add a fallback image
//   };

//   const renderStars = (rating) => {
//     return <span className="text-yellow-500">★</span>;
//   };

//   const handleAddToCart = (e) => {
//     e.stopPropagation(); // Prevent navigation when clicking the cart button
//     addToCart({ id, name, price, imageUrl: displayImage, quantity: 1 });
//     toast.success('Added to cart!');
//   };

//   return (
//     <div className="w-auto rounded-lg" onClick={handleClick}>
//       <div className={`${bgColor} relative`}>
//         {/* 50% Off Pill */}
//         <div className="absolute left-3 top-3 rounded-full bg-[#1c3035] px-3 py-[6px] text-xs text-white">
//           50% OFF
//         </div>

//         {/* Circle div */}
//         <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1c3035]">
//           <span className="text-xs">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-sun"
//             >
//               <circle cx="12" cy="12" r="4" />
//               <path d="M12 2v2" />
//               <path d="M12 20v2" />
//               <path d="m4.93 4.93 1.41 1.41" />
//               <path d="m17.66 17.66 1.41 1.41" />
//               <path d="M2 12h2" />
//               <path d="M20 12h2" />
//               <path d="m6.34 17.66-1.41 1.41" />
//               <path d="m19.07 4.93-1.41 1.41" />
//             </svg>
//           </span>
//         </div>

//         <div className="flex items-center justify-center">
//     <img
//       className="rounded-xl w-full h-auto object-cover"
//       src={displayImage}
//       alt={`${name} plant`}
//       onError={handleImageError}
//       loading="lazy"
//     />
//   </div>
//       </div>

//       <div className="mt-2">
//         <span className="flex w-full flex-col text-sm opacity-50 sm:flex-row sm:items-center sm:justify-between">
//           <span className="flex items-end">{type}</span>

//           <div className="mt-1 flex items-center sm:ml-auto sm:mt-0">
//             <span className="text-sm">{renderStars(rating)}</span>
//             <span className="ml-2 text-sm">{rating}</span>
//           </div>
//         </span>

//         {/* Tailwind Grid Layout */}
//         <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
//           <div className="name text-md col-span-1 row-span-1">{name}</div>

//           <div className="basket col-span-1 row-span-2 mt-2 flex justify-end gap-2 sm:ml-auto">
//             <Heart
//               width={18}
//               className={`cursor-pointer ${isInWishlist(id) ? 'fill-red-400 text-red-400' : 'text-red-400'}`}
//               onClick={handleAddToFav}
//             />
//             <div
//               className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c3035] text-white transition-all hover:bg-[#2a454d] active:scale-95"
//               onClick={handleAddToCart}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="22"
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

//           <div className="price col-span-1 row-span-1 text-sm">₹ {price}</div>
//           <div className="col-span-1 row-span-1"></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlantCard;

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { context } from '../../../context/AppContext';
import { toast } from 'react-hot-toast';
import { Heart, SunDim, CloudAlert, CloudSun, Sun } from 'lucide-react';

const sunlightRequirement = {
  'Full Sun': <Sun />,
  'Partial Shade': <SunDim />,
  'Indirect Light': <CloudSun />,
  'Bright Indirect Light': <CloudAlert />,
};

const PlantCard = ({
  id,
  name,
  type,
  price,
  imageUrl,
  bgColor,
  rating,
  primaryImage,
  sunlight,
}) => {
  const navigate = useNavigate();
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(context);

  const displayImage = imageUrl || primaryImage;

  const handleAddToFav = (e) => {
    e.stopPropagation();
    const productData = { id, name, type, price, imageUrl: displayImage };

    if (isInWishlist(id)) {
      removeFromWishlist(id);
      toast.success('Removed from wishlist!');
    } else {
      addToWishlist(productData);
      toast.success('Added to wishlist!');
    }
  };

  const handleClick = () => {
    navigate(`/product/${id}`);
  };

  const handleImageError = (e) => {
    e.target.src = 'src/assets/plantLogin.png';
  };

  const getSunlightIcon = (sunlight) => {
    return sunlightRequirement[sunlight] || <Sun />;
  };

  const renderStars = (rating) => {
    return <span className="text-yellow-500">★</span>;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, name, price, imageUrl: displayImage, quantity: 1 });
    toast.success('Added to cart!');
  };

  return (
    <div className="w-auto rounded-lg" onClick={handleClick}>
      <div className={`${bgColor} relative`}>
        <div className="absolute left-3 top-3 rounded-full bg-[#1c3035] px-3 py-[6px] text-xs text-white">
          50% OFF
        </div>

        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1c3035]">
          <span className="text-xs">{getSunlightIcon(sunlight)}</span>
        </div>

        <div className="flex items-center justify-center">
          <img
            className="h-auto w-full rounded-xl object-cover"
            src={displayImage}
            alt={`${name} plant`}
            onError={handleImageError}
            loading="lazy"
          />
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

        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="name text-md col-span-1 row-span-1">{name}</div>

          <div className="basket col-span-1 row-span-2 mt-2 flex justify-end gap-2 sm:ml-auto">
            <Heart
              width={18}
              className={`cursor-pointer ${isInWishlist(id) ? 'fill-red-400 text-red-400' : 'text-red-400'}`}
              onClick={handleAddToFav}
            />
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1c3035] text-white transition-all hover:bg-[#2a454d] active:scale-95"
              onClick={handleAddToCart}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
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

          <div className="price col-span-1 row-span-1 text-sm">₹ {price}</div>
          <div className="col-span-1 row-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
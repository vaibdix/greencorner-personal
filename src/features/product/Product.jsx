//----------------- State management fails navigations --------------------------
// import React, { useContext, useState, useEffect } from 'react';
// import { ShoppingBag, Wallet, PlusIcon } from 'lucide-react';
// import Review from '../Review/Review';
// import { useParams } from 'react-router-dom';
// import { context } from '../../store/AppContext';

// const Product = () => {
//   const { id } = useParams();
//   const { state, fetchPlants, setCurrentPlant } = useContext(context);
//   const [mainImage, setMainImage] = useState('');

//   useEffect(() => {
//     if (state.plants.length === 0) {
//       fetchPlants();
//     } else {
//       setCurrentPlant(id);
//     }
//   }, [id, state.plants, fetchPlants, setCurrentPlant]);

//   useEffect(() => {
//     if (state.currentPlant) {
//       setMainImage(state.currentPlant.primaryImage);
//     }
//   }, [state.currentPlant]);

//   if (state.error) return <div className="text-center p-4 text-red-500">Error: {state.error}</div>;
//   if (!state.currentPlant) return <div className="text-center p-4">Loading...</div>;

//   return (
//     <>
//       <section className="relative py-10 lg:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//             {/* Product Image */}
//             <div className="justify-center lg:justify-start">
//               <div className="">
//                 <img
//                   className="h-[500px] w-full rounded-xl object-cover"
//                   src={mainImage}
//                   alt="Main Product"
//                 />
//               </div>
//               {/* Image Thumbnails below the main image */}
//               <div className="ml-7 mt-6 flex justify-start gap-4 p-2">
//                 {state.currentPlant.secondaryImages.map((image, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setMainImage(image)}
//                     className="cursor-pointer"
//                   >
//                     <img
//                       className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover transition-all hover:border-indigo-600"
//                       src={image}
//                       alt={`Thumbnail ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="flex w-full flex-col justify-center max-lg:mx-auto max-lg:max-w-[608px]">
//               <p className="mb-4 text-lg font-medium">{state.currentPlant.categories.join(' / ')}</p>
//               <h2 className="font-manrope mb-2 text-3xl font-bold leading-10 text-gray-900">
//                 {state.currentPlant.name}
//               </h2>
//               <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
//                 <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl font-semibold leading-9 text-gray-900 sm:border-r">
//                   ₹ {state.currentPlant.price}
//                 </h6>
//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }, (_, index) => (
//                       <svg
//                         key={index}
//                         width="20"
//                         height="20"
//                         viewBox="0 0 20 20"
//                         fill="none"
//                         xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <path
//                           d="M9.10326 2.31699C9.47008 1.57374 10.5299 1.57374 10.8967 2.31699L12.7063 5.98347C12.8519 6.27862 13.1335 6.48319 13.4592 6.53051L17.5054 7.11846C18.3256 7.23765 18.6531 8.24562 18.0596 8.82416L15.1318 11.6781C14.8961 11.9079 14.7885 12.2389 14.8442 12.5632L15.5353 16.5931C15.6754 17.41 14.818 18.033 14.0844 17.6473L10.4653 15.7446C10.174 15.5915 9.82598 15.5915 9.53466 15.7446L5.91562 17.6473C5.18199 18.033 4.32456 17.41 4.46467 16.5931L5.15585 12.5632C5.21148 12.2389 5.10393 11.9079 4.86825 11.6781L1.94038 8.82416C1.34687 8.24562 1.67438 7.23765 2.4946 7.11846L6.54081 6.53051C6.86652 6.48319 7.14808 6.27862 7.29374 5.98347L9.10326 2.31699Z"
//                           fill={index < Math.round(state.currentPlant.rating) ? '#FBBF24' : '#F3F4F6'}
//                         />
//                       </svg>
//                     ))}
//                   </div>
//                   <span className="pl-2 text-sm font-normal leading-7 text-gray-500">
//                     {state.currentPlant.reviews.length} reviews
//                   </span>
//                 </div>
//               </div>

//               <div className="mb-5 flex gap-7">
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {state.currentPlant.availability}
//                 </div>
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {state.currentPlant.sunlightRequirement}
//                 </div>
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {state.currentPlant.season}
//                 </div>
//               </div>

//               <div className="mb-2 mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <img
//                     src="https://www.ikea.com/in/en/images/products/gradvis-plant-pot-pink__0614220_pe686849_s5.jpg?f=xl"
//                     width={40}
//                     alt="Plant Pot"
//                   />
//                   <span>Add Bucket</span>
//                 </button>
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <Wallet />
//                   <span>+ 300</span>
//                 </button>
//               </div>

//               {/* Add to Cart and other options */}
//               <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <ShoppingBag />
//                   <span>Add to Cart</span>
//                 </button>
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <Wallet />
//                   <span>Buy Now</span>
//                 </button>
//               </div>

//             </div>
//           </div>

//           {/* Reviews */}
//           <Review reviews={state.currentPlant.reviews} />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Product;
//----------------------------------------------------------
// TO BE FIXED ABOVE
//----------------------------------------------------------

// Fetch based
//----------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { ShoppingBag, Star, Wallet, Plus, Minus, PlusIcon } from 'lucide-react';
// import Review from '../review/Review';
// import { useParams } from 'react-router-dom';
// import { StarIcon } from 'lucide-react';

// const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [mainImage, setMainImage] = useState('');
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:3000/plants')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to fetch plants');
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const selectedProduct = data.find((item) => item.id === parseInt(id));
//         if (!selectedProduct) {
//           throw new Error('Plant not found');
//         }
//         setProduct(selectedProduct);
//         setMainImage(selectedProduct.primaryImage);
//         setError(null);
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setError(error.message || 'Failed to load product');
//       });
//   }, [id]);

//   if (error) return <div className="p-4 text-center text-red-500">Error: {error}</div>;
//   if (!product) return <div className="p-4 text-center">Loading...</div>;

//   return (
//     <>
//       <section className="relative py-5 lg:py-14">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
//           <nav aria-label="Breadcrumb" className="mb-5">
//             <ol className="flex items-center gap-1 text-lg font-semibold text-gray-600">
//               <li>
//                 <a href="/" className="hover:text-gray-700">
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <span className="mx-2">/</span>
//               </li>
//               <li>
//                 <a href="/products" className="hover:text-gray-700">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <span className="mx-2">/</span>
//               </li>
//               <li>
//                 <span className="text-gray-900">{product?.name || 'Loading...'}</span>
//               </li>
//             </ol>
//           </nav>

//           <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
//             {/* Product Image */}
//             <div className="justify-center lg:justify-start">
//               <div className="">
//                 <img
//                   className="h-[600px] w-full rounded-xl object-contain"
//                   // className="w-full rounded-xl object-cover"
//                   src={mainImage}
//                   alt="Main Product"
//                 />
//               </div>
//               {/* Image Thumbnails below the main image */}
//               <div className="mt-6 ml-7 flex justify-start gap-4 p-2">
//                 {product.secondaryImages.map((image, index) => (
//                   <div
//                     key={index}
//                     onClick={() => setMainImage(image)} // Set main image on click
//                     className="cursor-pointer"
//                   >
//                     <img
//                       className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover transition-all hover:border-indigo-600"
//                       src={image}
//                       alt={`Thumbnail ${index + 1}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Product Details */}
//             <div className="flex w-full flex-col justify-center max-lg:mx-auto max-lg:max-w-[608px]">
//               <h2 className="font-manrope mb-2 text-4xl leading-10 font-semibold text-gray-900">
//                 {product.name}
//               </h2>

//               <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
//                 <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl leading-9 font-semibold text-gray-900 sm:border-r">
//                   ₹ {product.price}
//                 </h6>

//                 <div className="flex items-center gap-2">
//                   <div className="flex items-center gap-1">
//                     {Array.from({ length: 5 }, (_, index) => (
//                       <StarIcon
//                         key={index}
//                         size={20}
//                         className={
//                           index < Math.round(product.rating) ? 'text-amber-400' : 'text-gray-200'
//                         }
//                       />
//                     ))}
//                   </div>
//                   <span className="pl-2 text-sm leading-7 font-normal text-gray-500">
//                     {product.reviews.length} reviews
//                   </span>
//                 </div>
//               </div>
//               {/* <p className="mb-4 text-lg py-2 font-medium">
//                 Category : {product.categories.join(' / ')}
//               </p> */}
//               <div className="mb-5 flex gap-7">
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {product.availability}
//                 </div>
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {product.sunlightRequirement}
//                 </div>
//                 <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
//                   {product.season}
//                 </div>
//               </div>

//               <div className="mt-5 mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <img
//                     src="https://www.ikea.com/in/en/images/products/gradvis-plant-pot-pink__0614220_pe686849_s5.jpg?f=xl"
//                     width={40}
//                     alt="Plant Pot"
//                   />
//                   <span>Add Bucket</span>
//                 </button>
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <Wallet />
//                   <span>+ 300</span>
//                 </button>
//               </div>

//               {/* Add to Cart and other options */}
//               <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <ShoppingBag />
//                   <span>Add to Cart</span>
//                 </button>
//                 <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs shadow-transparent transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
//                   <Wallet />
//                   <span>Buy Now</span>
//                 </button>
//               </div>

//               <div className="mb-8">
//                 <div className="mb-4 rounded-lg border p-4">
//                   <h3 className="mb-2 font-medium">Shipping Information</h3>
//                   <p className="text-gray-600">{product.shoppingPolicy}</p>
//                 </div>

//                 <div className="rounded-lg border p-4">
//                   <h3 className="mb-2 font-medium">Return & Refund Policy</h3>
//                   <p className="text-gray-600">{product.refundPolicy}</p>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
//                   <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
//                     <h2 className="font-medium">Description</h2>
//                     <span className="transition group-open:rotate-180">
//                       <PlusIcon />
//                     </span>
//                   </summary>
//                   <div className="px-4 pb-4">
//                     <p className="text-gray-600">{product.description}</p>
//                   </div>
//                 </details>

//                 <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
//                   <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
//                     <h2 className="font-medium">Seller Information</h2>
//                     <PlusIcon />
//                   </summary>
//                   <div className="mt-4 px-4 leading-relaxed text-gray-700">
//                     {product?.sellerAddress?.street && (
//                       <p>
//                         <strong>Street Address:</strong> {product.sellerAddress.street}
//                       </p>
//                     )}
//                     {product?.sellerAddress?.city && (
//                       <p>
//                         <strong>City:</strong> {product.sellerAddress.city}
//                       </p>
//                     )}
//                     {product?.sellerAddress?.state && (
//                       <p>
//                         <strong>State:</strong> {product.sellerAddress.state}
//                       </p>
//                     )}
//                     {product?.sellerAddress?.pincode && (
//                       <p>
//                         <strong>Zip Code:</strong> {product.sellerAddress.pincode}
//                       </p>
//                     )}
//                     {product?.sellerAddress?.country && (
//                       <p>
//                         <strong>Country:</strong> {product.sellerAddress.country}
//                       </p>
//                     )}
//                   </div>
//                 </details>

//                 <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
//                   <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
//                     <h2 className="font-medium">Plant Care Information</h2>
//                     <PlusIcon />
//                   </summary>
//                   <div className="mt-4 px-4 leading-relaxed text-gray-700">
//                     {product.sunlightRequirement && (
//                       <p>
//                         <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
//                       </p>
//                     )}
//                     {product.moistureRequirement && (
//                       <p>
//                         <strong>Moisture Requirement:</strong> {product.moistureRequirement}
//                       </p>
//                     )}
//                     {product.soilType && (
//                       <p>
//                         <strong>Soil Type:</strong> {product.soilType}
//                       </p>
//                     )}
//                     {product.growthRate && (
//                       <p>
//                         <strong>Growth Rate:</strong> {product.growthRate}
//                       </p>
//                     )}
//                     {product.season && (
//                       <p>
//                         <strong>Season:</strong> {product.season}
//                       </p>
//                     )}
//                     {product.potSizeRequired && (
//                       <p>
//                         <strong>Pot Size Required:</strong> {product.potSizeRequired}
//                       </p>
//                     )}
//                     {product.genus && (
//                       <p>
//                         <strong>Genus:</strong> {product.genus}
//                       </p>
//                     )}
//                     {product.localName && (
//                       <p>
//                         <strong>Local Name:</strong> {product.localName}
//                       </p>
//                     )}
//                     {product.regionalName && (
//                       <p>
//                         <strong>Regional Name:</strong> {product.regionalName}
//                       </p>
//                     )}
//                     {product.biologicalName && (
//                       <p>
//                         <strong>Biological Name:</strong> {product.biologicalName}
//                       </p>
//                     )}
//                     {product.botanicalName && (
//                       <p>
//                         <strong>Botanical Name:</strong> {product.botanicalName}
//                       </p>
//                     )}
//                     {product.tags && product.tags.length > 0 && (
//                       <p>
//                         <strong>Tags:</strong> {product.tags.join(', ')}
//                       </p>
//                     )}
//                   </div>
//                 </details>
//               </div>
//             </div>
//           </div>
//           {/* Reviews */}
//           <Review reviews={product.reviews} />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Product;

import React, { useState, useEffect, useContext } from 'react';
import { ShoppingBag, Star, Wallet, Plus, Minus, PlusIcon } from 'lucide-react';
import { StarIcon } from 'lucide-react';
import Review from '../review/Review';
import { useParams } from 'react-router-dom';
import { context } from '../../store/AppContext'; // adjust the import path as needed

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [error, setError] = useState(null);

  // Extract addToCart function from context
  const { addToCart } = useContext(context);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch plants');
        }
        return response.json();
      })
      .then((data) => {
        const selectedProduct = data.find((item) => item.id === parseInt(id));
        if (!selectedProduct) {
          throw new Error('Plant not found');
        }
        setProduct(selectedProduct);
        setMainImage(selectedProduct.primaryImage);
        setError(null);
      })
      .catch((error) => {
        console.error('Error:', error);
        setError(error.message || 'Failed to load product');
      });
  }, [id]);

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }
  if (!product) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <>
      <section className="relative py-5 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4">
          <nav aria-label="Breadcrumb" className="mb-5">
            <ol className="flex items-center gap-1 text-lg font-semibold text-gray-600">
              <li>
                <a href="/" className="hover:text-gray-700">
                  Home
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <a href="/products" className="hover:text-gray-700">
                  Products
                </a>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li>
                <span className="text-gray-900">{product?.name || 'Loading...'}</span>
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Product Image */}
            <div className="justify-center lg:justify-start">
              <div>
                <img
                  className="h-[600px] w-full rounded-xl object-contain"
                  src={mainImage}
                  alt="Main Product"
                />
              </div>
              {/* Image Thumbnails below the main image */}
              <div className="mt-6 ml-7 flex justify-start gap-4 p-2">
                {product.secondaryImages.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(image)} // Set main image on click
                    className="cursor-pointer"
                  >
                    <img
                      className="h-16 w-16 rounded-lg border-2 border-gray-200 object-cover transition-all hover:border-indigo-600"
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="flex w-full flex-col justify-center max-lg:mx-auto max-lg:max-w-[608px]">
              <h2 className="font-manrope mb-2 text-4xl leading-10 font-semibold text-gray-900">
                {product.name}
              </h2>

              <div className="mb-6 flex flex-col sm:flex-row sm:items-center">
                <h6 className="font-manrope mr-5 border-gray-200 pr-5 text-2xl leading-9 font-semibold text-gray-900 sm:border-r">
                  ₹ {product.price}
                </h6>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        size={20}
                        className={
                          index < Math.round(product.rating) ? 'text-amber-400' : 'text-gray-200'
                        }
                      />
                    ))}
                  </div>
                  <span className="pl-2 text-sm leading-7 font-normal text-gray-500">
                    {product.reviews.length} reviews
                  </span>
                </div>
              </div>

              <div className="mb-5 flex gap-7">
                <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
                  {product.availability}
                </div>
                <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
                  {product.sunlightRequirement}
                </div>
                <div className="rounded-full bg-[#1C3035] px-7 py-2 text-white">
                  {product.season}
                </div>
              </div>

              <div className="mt-5 mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <button
                  className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"
                  // Here you can attach other handlers if needed
                >
                  <img
                    src="https://www.ikea.com/in/en/images/products/gradvis-plant-pot-pink__0614220_pe686849_s5.jpg?f=xl"
                    width={40}
                    alt="Plant Pot"
                  />
                  <span>Add Bucket</span>
                </button>
                <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                  <Wallet />
                  <span>+ 300</span>
                </button>
              </div>

              {/* Add to Cart and Buy Now buttons */}
              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {/* <button
                  className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingBag />
                  <span>Add to Cart</span>
                </button> */}

                <button
                  className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200"
                  onClick={() => addToCart({ ...product, imageUrl: product.primaryImage })}
                >
                  <ShoppingBag />
                  <span>Add to Cart</span>
                </button>

                <button className="group flex w-full justify-around gap-2 border px-5 py-4 shadow-xs transition-all duration-500 hover:bg-indigo-100 hover:shadow-indigo-200">
                  <Wallet />
                  <span>Buy Now</span>
                </button>
              </div>

              <div className="mb-8">
                <div className="mb-4 rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Shipping Information</h3>
                  <p className="text-gray-600">{product.shoppingPolicy}</p>
                </div>

                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Return & Refund Policy</h3>
                  <p className="text-gray-600">{product.refundPolicy}</p>
                </div>
              </div>

              <div className="space-y-4">
                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Description</h2>
                    <span className="transition group-open:rotate-180">
                      <PlusIcon />
                    </span>
                  </summary>
                  <div className="px-4 pb-4">
                    <p className="text-gray-600">{product.description}</p>
                  </div>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Seller Information</h2>
                    <PlusIcon />
                  </summary>
                  <div className="mt-4 px-4 leading-relaxed text-gray-700">
                    {product?.sellerAddress?.street && (
                      <p>
                        <strong>Street Address:</strong> {product.sellerAddress.street}
                      </p>
                    )}
                    {product?.sellerAddress?.city && (
                      <p>
                        <strong>City:</strong> {product.sellerAddress.city}
                      </p>
                    )}
                    {product?.sellerAddress?.state && (
                      <p>
                        <strong>State:</strong> {product.sellerAddress.state}
                      </p>
                    )}
                    {product?.sellerAddress?.pincode && (
                      <p>
                        <strong>Zip Code:</strong> {product.sellerAddress.pincode}
                      </p>
                    )}
                    {product?.sellerAddress?.country && (
                      <p>
                        <strong>Country:</strong> {product.sellerAddress.country}
                      </p>
                    )}
                  </div>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden" close="true">
                  <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900">
                    <h2 className="font-medium">Plant Care Information</h2>
                    <PlusIcon />
                  </summary>
                  <div className="mt-4 px-4 leading-relaxed text-gray-700">
                    {product.sunlightRequirement && (
                      <p>
                        <strong>Sunlight Requirement:</strong> {product.sunlightRequirement}
                      </p>
                    )}
                    {product.moistureRequirement && (
                      <p>
                        <strong>Moisture Requirement:</strong> {product.moistureRequirement}
                      </p>
                    )}
                    {product.soilType && (
                      <p>
                        <strong>Soil Type:</strong> {product.soilType}
                      </p>
                    )}
                    {product.growthRate && (
                      <p>
                        <strong>Growth Rate:</strong> {product.growthRate}
                      </p>
                    )}
                    {product.season && (
                      <p>
                        <strong>Season:</strong> {product.season}
                      </p>
                    )}
                    {product.potSizeRequired && (
                      <p>
                        <strong>Pot Size Required:</strong> {product.potSizeRequired}
                      </p>
                    )}
                    {product.genus && (
                      <p>
                        <strong>Genus:</strong> {product.genus}
                      </p>
                    )}
                    {product.localName && (
                      <p>
                        <strong>Local Name:</strong> {product.localName}
                      </p>
                    )}
                    {product.regionalName && (
                      <p>
                        <strong>Regional Name:</strong> {product.regionalName}
                      </p>
                    )}
                    {product.biologicalName && (
                      <p>
                        <strong>Biological Name:</strong> {product.biologicalName}
                      </p>
                    )}
                    {product.botanicalName && (
                      <p>
                        <strong>Botanical Name:</strong> {product.botanicalName}
                      </p>
                    )}
                    {product.tags && product.tags.length > 0 && (
                      <p>
                        <strong>Tags:</strong> {product.tags.join(', ')}
                      </p>
                    )}
                  </div>
                </details>
              </div>
            </div>
          </div>
          {/* Reviews */}
          <Review reviews={product.reviews} />
        </div>
      </section>
    </>
  );
};

export default Product;

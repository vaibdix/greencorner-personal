import React, { useContext, useEffect } from 'react';
import { SunDim, CloudAlert, CloudSun, Sun, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import gsap from 'gsap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { context } from '../../../../store/AppContext';
import { useRef } from 'react';

const sunlightRequirement = {
  'Full Sun': {
    icon: <Sun />,
    animation: (ref) => ({
      rotate: 15,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    }),
  },
  'Partial Shade': {
    icon: <SunDim />,
    animation: (ref) => ({
      x: 5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    }),
  },
  'Indirect Light': {
    icon: <CloudSun />,
    animation: (ref) => ({
      y: 3,
      x: 3,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    }),
  },
  'Bright Indirect Light': {
    icon: <CloudAlert />,
    animation: (ref) => ({
      scale: 1.2,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'back.inOut(1.7)',
    }),
  },
};

const PlantCard = ({ id, name, type, price, imageUrl, bgColor, rating, sunlight }) => {
  const navigate = useNavigate();
  const sunlightIconRef = useRef(null);
  const { addToCart, addToWishlist, removeFromWishlist, isInWishlist } = useContext(context);

  const handleAddToFav = (e) => {
    e.stopPropagation();
    const productData = { id, name, type, price, imageUrl };

    if (isInWishlist(id)) {
      removeFromWishlist(id);
      toast.success('Removed from wishlist!');
    } else {
      addToWishlist(productData);
      toast.success('Added to wishlist!');
    }
  };

  const handleCardClick = () => {
    navigate(`/product/${id}`);
  };

  useEffect(() => {
    const animation =
      sunlightRequirement[sunlight]?.animation || sunlightRequirement['Full Sun'].animation;
    gsap.to(sunlightIconRef.current, animation());

    return () => gsap.killTweensOf(sunlightIconRef.current);
  }, [sunlight]);

  const getSunlightIcon = (sunlight) => {
    return sunlightRequirement[sunlight]?.icon || sunlightRequirement['Full Sun'].icon;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevent navigation
    addToCart({ id, name, price, imageUrl, quantity: 1 });
    toast.success('Added to cart!');
  };

  return (
    <div className="w-auto rounded-lg" onClick={handleCardClick}>
      <div className={bgColor + ' relative'}>
        <div className="absolute top-3 left-3 rounded-full bg-[#1c3035] px-3 py-[6px] text-xs text-white">
          50% OFF
        </div>

        {/* Circle div */}
        <div className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1c3035]">
          <span className="text-xs" ref={sunlightIconRef}>
            {getSunlightIcon(sunlight)}
          </span>
        </div>

        <div className="flex items-center justify-center">
          <img className="rounded-xl" src={imageUrl} alt={name} />
        </div>
      </div>

      <div className="mt-2">
        <span className="flex w-full flex-col text-sm opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <span className="flex items-end">{type}</span>

          <div className="mt-1 flex items-center sm:mt-0 sm:ml-auto">
            <span className="text-sm text-amber-500">★</span>
            <span className="ml-2 text-sm">{rating}</span>
          </div>
        </span>

        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="name col-span-1 row-span-1 text-lg">{name}</div>

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

          <div className="price col-span-1 row-span-1 text-sm"> ₹ {price}</div>

          <div className="col-span-1 row-span-1"></div>
        </div>
      </div>
    </div>
  );
};

const CardFive = () => {
  const { state, fetchPlants } = useContext(context);
  const { plants, loading, error } = state;

  useEffect(() => {
    // Fetch plants if not already loaded
    if (plants.length === 0) {
      fetchPlants();
    }
  }, []);

  // Get first 5 best-selling plants (you might want to add a best-seller flag in your data)
  const bestSellerPlants = plants.slice(0, 5);

  if (loading) return <div>Loading best sellers...</div>;
  if (error) return <div>Error loading best sellers: {error}</div>;

  // In the CardFive component's return, remove ToastContainer
  return (
    <>
      <h3 className="mt-12 -mb-5 pl-4 text-2xl sm:pl-14 sm:text-3xl">BestSellers</h3>
      <div className="grid grid-cols-2 gap-3 p-4 sm:grid-cols-2 sm:gap-7 sm:p-14 md:grid-cols-3 lg:grid-cols-5">
        {bestSellerPlants.map((plant) => (
          <PlantCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            type={plant.categories[0]}
            price={plant.price}
            imageUrl={plant.primaryImage}
            bgColor={plant.bgColor}
            rating={plant.rating}
            sunlight={plant.sunlightRequirement}
          />
        ))}
      </div>
    </>
  );
};

export default CardFive;

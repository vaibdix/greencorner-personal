import { SunDim, CloudAlert, CloudSun, Sun, Heart } from 'lucide-react';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sunlightRequirement = {
  'Full Sun': <Sun />,
  'Partial Shade': <SunDim />,
  'Indirect Light': <CloudSun />,
  'Bright Indirect Light': <CloudAlert />,
};

const PlantCard = ({ name, type, price, imageUrl, bgColor, rating, sunlight }) => {
  const sunlightIconRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      sunlightIconRef.current,
      { y: -10 },
      {
        y: 0,
        duration: 1,
        ease: 'bounce.out',
        repeat: -1,
        yoyo: true,
      }
    );

    return () => gsap.killTweensOf(sunlightIconRef.current);
  }, []);

  const getSunlightIcon = (sunlight) => {
    return sunlightRequirement[sunlight] || <Sun />;
  };

  // Handle adding to cart (show toast)
  const handleAddToCart = () => {
    toast.success('Added to Cart!');
  };

  // Handle adding to cart (show toast)
  const handleAddToFav = () => {
    toast.success('Added to Favourites!');
  };

  return (
    <div className="w-auto rounded-lg">
      <div className={bgColor + ' relative'}>
        {/* 50% Off Pill */}
        <div className="absolute left-3 top-3 rounded-full bg-[#1c3035] px-3 py-[6px] text-xs text-white">
          50% OFF
        </div>

        {/* Circle div */}
        <div className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full text-[#1c3035]">
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

          <div className="mt-1 flex items-center sm:ml-auto sm:mt-0">
            <span className="text-sm text-amber-500">★</span>
            <span className="ml-2 text-sm">{rating}</span>
          </div>
        </span>

        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="name col-span-1 row-span-1 text-lg">{name}</div>

          <div className="basket col-span-1 row-span-2 mt-2 flex justify-end gap-2 sm:ml-auto">
            <Heart width={18} className="text-red-400" onClick={handleAddToFav} />
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1c3035] text-white"
              onClick={handleAddToCart} // Add onClick to trigger toast
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
  const [plants, setPlants] = React.useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((response) => response.json())
      .then((data) => setPlants(data.slice(5, 15))) // Display only the first 5 plants
      .catch((error) => console.error('Error fetching plants:', error));
  }, []);

  return (
    <>
      <h3 className="-mb-5 mt-12 pl-14 text-3xl">BestSellers</h3>
      <div className="grid grid-cols-1 gap-7 p-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {plants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            type={plant.categories[0]}
            price={plant.price}
            imageUrl={plant.primaryImage}
            bgColor={plant.bgColor} // Pass bgColor as a prop
            rating={plant.rating} // Pass rating as a prop
            sunlight={plant.sunlightRequirement}
          />
        ))}
      </div>
      <ToastContainer /> {/* Place ToastContainer in your app */}
    </>
  );
};

export default CardFive;

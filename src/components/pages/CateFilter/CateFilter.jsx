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
          <div className="name text-md col-span-1 row-span-1">{name}</div>

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

          <div className="price col-span-1 row-span-1 text-sm">₹ {price}</div>

          {/* Extra Basket Column for Responsive Spacing */}
          <div className="col-span-1 row-span-1"></div>
        </div>
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';

import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Star } from 'lucide-react';
import axios from 'axios';

const CateFilter = () => {
  return (
    <div>
      <Section />
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
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 20;

  // Hardcoded list of categories
  const predefinedCategories = [
    'Indoor Plants',
    'Outdoor Plants',
    'Low Maintenance',
    'Patio',
    'Living Room',
    'Office',
    'Bonsai',
    'Air Purifying',
    'Flowering Plants',
    'Office Plants',
    'Medicinal Plants',
  ];

  useEffect(() => {
    axios
      .get('http://localhost:3000/plants')
      .then((response) => {
        const data = response.data;
        setPlants(data);
        setFilteredPlants(data);

        // Extract unique categories from plants data (if needed for internal use)
        const uniqueCategories = Array.from(new Set(data.flatMap((plant) => plant.categories)));
        // You could log or use this data if you need for any other functionality
      })
      .catch((error) => {
        console.error('Error fetching plants:', error);
      });
  }, []);

  const handlePriceChange = (e) => {
    setPriceRange({
      ...priceRange,
      [e.target.name]: e.target.value,
    });
  };

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target;
    setAvailability((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    if (e.target.checked) {
      setCategories((prev) => [...prev, selectedCategory]);
    } else {
      setCategories((prev) => prev.filter((category) => category !== selectedCategory));
    }
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const applyFilters = () => {
    let filtered = [...plants];

    // Filter by availability (checking the string values from the API)
    if (availability.inStock) {
      filtered = filtered.filter((plant) => plant.availability === 'In Stock');
    }
    if (availability.outOfStock) {
      filtered = filtered.filter((plant) => plant.availability === 'Out of Stock');
    }

    // Filter by price range
    if (priceRange.min && priceRange.max) {
      filtered = filtered.filter(
        (plant) => plant.price >= priceRange.min && plant.price <= priceRange.max
      );
    }

    // Filter by rating
    if (rating > 0) {
      filtered = filtered.filter((plant) => plant.rating >= rating);
    }

    // Filter by selected categories
    if (categories.length > 0) {
      filtered = filtered.filter((plant) =>
        plant.categories.some((category) => categories.includes(category))
      );
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
    <div className="grid grid-cols-[1.5fr,5fr] gap-4">
      {/* Filter Section (Left Sidebar) */}
      <aside className="border p-4">
        <div className="border-b p-5 text-xl font-semibold">Filter</div>

        {/* Availability */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Availability</h3>
        <div className="space-y-2 pl-1 pr-1">
          <details>
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
              Availability <ChevronDown />
            </summary>
            <div className="p-4">
              <label className="inline-flex items-center gap-5">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={availability.inStock}
                  onChange={handleAvailabilityChange}
                  className="border-gray-300"
                />
                <span className="text-sm font-medium">In Stock</span>
              </label>
              <br />
              <label className="mt-2 inline-flex items-center gap-5">
                <input
                  type="checkbox"
                  name="outOfStock"
                  checked={availability.outOfStock}
                  onChange={handleAvailabilityChange}
                  className="border-gray-300"
                />
                <span className="text-sm font-medium">Out of Stock</span>
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
                  <span className="text-sm text-gray-600">₹</span>
                  <input
                    type="number"
                    id="minPrice"
                    name="min"
                    value={priceRange.min}
                    onChange={handlePriceChange}
                    min={0}
                    className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </label>
                <label htmlFor="maxPrice" className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">₹</span>
                  <input
                    type="number"
                    id="maxPrice"
                    name="max"
                    value={priceRange.max}
                    onChange={handlePriceChange}
                    min={0}
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

        {/* Categories */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Categories</h3>
        <div className="space-y-2 pl-1 pr-1">
          {predefinedCategories.map((category) => (
            <label key={category} className="mt-5 block">
              <input
                type="checkbox"
                value={category}
                onChange={handleCategoryChange}
                className="ml-5 border-gray-300"
              />
              <span className="gap-10 p-5 text-sm font-medium">{category}</span>
            </label>
          ))}
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={applyFilters}
          className="ml-5 mt-5 rounded bg-[#1c3035] px-4 py-2 text-white"
        >
          Apply Filters
        </button>
      </aside>

      {/* Product Cards */}
      <div className="grid grid-cols-1 gap-6 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
                  className={`flex h-8 items-center justify-center px-3 leading-tight text-gray-500 ${currentPage === index + 1 ? 'bg-[#1C3035] text-white' : 'hover:bg-gray-100'}`}
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

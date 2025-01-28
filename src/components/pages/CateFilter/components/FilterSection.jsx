import { useState } from 'react';
import { ChevronDown, Star } from 'lucide-react';

const FilterSection = ({ 
  availability, 
  priceRange, 
  rating, 
  categories,
  handleAvailabilityChange,
  handlePriceChange,
  handleCategoryChange,
  handleRatingChange,
  applyFilters,
  predefinedCategories 
}) => {
  return (
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
                    className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
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
                    className="w-full rounded-md border-gray-200 shadow-xs sm:text-sm"
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
          className="ml-5 mt-5 rounded-sm bg-[#1c3035] px-4 py-2 text-white"
        >
          Apply Filters
        </button>
      </aside>
  );
};

export default FilterSection;
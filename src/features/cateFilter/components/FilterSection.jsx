import { useState } from 'react';
import { ChevronDown, Star, X } from 'lucide-react';

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
  predefinedCategories,
  isMobileFilterOpen,
  setIsMobileFilterOpen,
}) => {
  const handleApplyAndClose = () => {
    applyFilters();
    setIsMobileFilterOpen(false);
  };

  return (
    <>
      {/* Desktop Filter */}
      <aside className="hidden border p-4 lg:block">
        <div className="border-b -mt-3 p-5 text-xl font-semibold">Filter</div>

        {/* Availability */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Availability</h3>
        <div className="space-y-2 pr-1 pl-1">
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
        <div className="space-y-2 pr-1 pl-1">
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
        <div className="space-y-2 pr-1 pl-1">
          <details>
            <summary className="flex cursor-pointer items-center justify-between p-4 text-sm font-medium">
              Rating <ChevronDown />
            </summary>
            <div className="p-4">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`cursor-pointer ${
                      rating >= star ? 'text-yellow-500' : 'text-gray-400'
                    }`}
                    onClick={() => handleRatingChange(star)}
                  />
                ))}
              </div>
            </div>
          </details>
        </div>

        {/* Categories */}
        <h3 className="mt-4 pl-5 text-lg font-medium">Categories</h3>
        <div className="space-y-1 pr-1 pl-1">
          {predefinedCategories.map((category) => (
            <label key={category} className="mt-3 block">
              <input
                type="checkbox"
                value={category}
                onChange={handleCategoryChange}
                className="ml-5 border-gray-300"
              />
              <span className="gap-5 p-5 text-sm font-medium">{category}</span>
            </label>
          ))}
        </div>

        {/* Apply Filters Button */}
        <button
          onClick={applyFilters}
          className="mt-5 ml-5 rounded-sm bg-[#1c3035] px-4 py-2 text-white"
        >
          Apply Filters
        </button>
      </aside>

      {/* Mobile Filter Drawer */}
      <div
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileFilterOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setIsMobileFilterOpen(false)}
        />

        {/* Drawer Content */}
        <div className="absolute inset-y-0 left-0 w-full max-w-xs bg-white">
          <div className="flex items-center justify-between border-b p-4">
            <h2 className="text-lg font-semibold">Filters</h2>
            <button
              onClick={() => setIsMobileFilterOpen(false)}
              className="rounded-full p-2 hover:bg-gray-100"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-[calc(100vh-10rem)] overflow-y-auto p-4">
            {/* Availability */}
            <h3 className="text-lg font-medium">Availability</h3>
            <div className="mt-2 space-y-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="inStock"
                  checked={availability.inStock}
                  onChange={handleAvailabilityChange}
                />
                <span>In Stock</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="outOfStock"
                  checked={availability.outOfStock}
                  onChange={handleAvailabilityChange}
                />
                <span>Out of Stock</span>
              </label>
            </div>

            {/* Price Range */}
            <h3 className="mt-6 text-lg font-medium">Price Range</h3>
            <div className="mt-2 flex gap-4">
              <input
                type="number"
                name="min"
                value={priceRange.min}
                onChange={handlePriceChange}
                placeholder="Min"
                className="w-full rounded border p-2"
              />
              <input
                type="number"
                name="max"
                value={priceRange.max}
                onChange={handlePriceChange}
                placeholder="Max"
                className="w-full rounded border p-2"
              />
            </div>

            {/* Rating */}
            <h3 className="mt-6 text-lg font-medium">Rating</h3>
            <div className="mt-2 flex gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer ${
                    rating >= star ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>

            {/* Categories */}
            <h3 className="mt-6 text-lg font-medium">Categories</h3>
            <div className="mt-2 space-y-2">
              {predefinedCategories.map((category) => (
                <label key={category} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={category}
                    onChange={handleCategoryChange}
                    checked={categories.includes(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Apply Button */}
          <div className="absolute right-0 bottom-0 left-0 border-t bg-white p-4">
            <button
              onClick={handleApplyAndClose}
              className="w-full rounded bg-[#1c3035] py-2 text-white"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;

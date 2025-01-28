import React, { useState } from 'react';
import axios from 'axios';

const AddPlant = () => {
  const [plantData, setPlantData] = useState({
    name: '',
    description: '',
    price: '',
    rating: '',
    quantityAvailable: '',
    sunlightRequirement: '',
    moistureRequirement: '',
    soilType: '',
    season: '',
    growthRate: '',
    potSizeRequired: '',
    genus: '',
    localName: '',
    biologicalName: '',
    botanicalName: '',
    shippingStates: [],
    tags: [],
    primaryImage: '',
    secondaryImages: [],
    shoppingPolicy: '',
    refundPolicy: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPlantData({
      ...plantData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://116.75.62.44:8000/plants', plantData)
      .then((response) => {
        console.log('Plant added successfully:', response.data);
      })
      .catch((error) => {
        console.error('Error adding plant:', error);
      });
  };

  return (
    <div>
      <h3>Add a New Plant</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={plantData.name}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={plantData.description}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={plantData.price}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={plantData.rating}
            onChange={handleInputChange}
            required
            min="0"
            max="5"
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Quantity Available:</label>
          <input
            type="number"
            name="quantityAvailable"
            value={plantData.quantityAvailable}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Sunlight Requirement:</label>
          <input
            type="text"
            name="sunlightRequirement"
            value={plantData.sunlightRequirement}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Moisture Requirement:</label>
          <input
            type="text"
            name="moistureRequirement"
            value={plantData.moistureRequirement}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Soil Type:</label>
          <input
            type="text"
            name="soilType"
            value={plantData.soilType}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Season:</label>
          <input
            type="text"
            name="season"
            value={plantData.season}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Growth Rate:</label>
          <input
            type="text"
            name="growthRate"
            value={plantData.growthRate}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Pot Size Required:</label>
          <input
            type="text"
            name="potSizeRequired"
            value={plantData.potSizeRequired}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Genus:</label>
          <input
            type="text"
            name="genus"
            value={plantData.genus}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Local Name:</label>
          <input
            type="text"
            name="localName"
            value={plantData.localName}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Biological Name:</label>
          <input
            type="text"
            name="biologicalName"
            value={plantData.biologicalName}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Botanical Name:</label>
          <input
            type="text"
            name="botanicalName"
            value={plantData.botanicalName}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Shipping States (comma separated):</label>
          <input
            type="text"
            name="shippingStates"
            value={plantData.shippingStates}
            onChange={handleInputChange}
            placeholder="Maharashtra, Goa, Karnataka"
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Tags (comma separated):</label>
          <input
            type="text"
            name="tags"
            value={plantData.tags}
            onChange={handleInputChange}
            placeholder="Gift Ideas, Flowering Plants, Indoor Decor"
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Primary Image URL:</label>
          <input
            type="text"
            name="primaryImage"
            value={plantData.primaryImage}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Secondary Image URLs (comma separated):</label>
          <input
            type="text"
            name="secondaryImages"
            value={plantData.secondaryImages}
            onChange={handleInputChange}
            placeholder="URL1, URL2, ..."
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Shopping Policy:</label>
          <input
            type="text"
            name="shoppingPolicy"
            value={plantData.shoppingPolicy}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <div>
          <label>Refund Policy:</label>
          <input
            type="text"
            name="refundPolicy"
            value={plantData.refundPolicy}
            onChange={handleInputChange}
            required
            className="bg-grey-300 mt-2 block h-16 w-full rounded-md bg-[#F5F5F5] p-2 px-5 py-4 text-sm text-gray-700 placeholder-gray-400"
          />
        </div>

        <button type="submit" className="ml-5 rounded-md border bg-orange-400 px-5">
          Add Plant
        </button>
      </form>
    </div>
  );
};

export default AddPlant;

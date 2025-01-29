import axios from 'axios';
import { useState } from 'react';

const AddPlantDemo = () => {
  const [newReview, setNewReview] = useState({
    username: '',
    rating: '',
    comment: '',
    productDelivered: '',
    dateTime: Date.now(),
  });

  const [categories, setCategories] = useState([
    'Outdoor Plants',
    'Indoor Plants',
    'Low Maintenance',
  ]);

  const [plantData, setPlantData] = useState({
    name: '',
    id: '',
    description: '',
    price: '',
    rating: 4,
    reviews: [newReview], // Initialize as an array
    totalSalesLastMonth: 0,
    sellerName: 'Pune Plant Co.',
    sellerAddress: {
      street: 'Bhosale Nagar',
      city: 'Pune',
      state: 'Maharashtra',
      country: 'India',
      pincode: '411007',
    },
    availability: 'In Stock',
    quantityAvailable: '',
    categories: categories,
    sunlightRequirement: '',
    moistureRequirement: '',
    soilType: '',
    season: '',
    growthRate: '',
    potSizeRequired: '',
    genus: '',
    localName: '',
    regionalName: '',
    biologicalName: '',
    botanicalName: '',
    tags: [],
    shippingStates: [],
    primaryImage: '',
    secondaryImages: [],
    shoppingPolicy: '',
    refundPolicy: '',
  });

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   if (name.startsWith('seller_')) {
  //     // Handle seller address fields
  //     const addressField = name.replace('seller_', '');
  //     setPlantData((prev) => ({
  //       ...prev,
  //       sellerAddress: {
  //         ...prev.sellerAddress,
  //         [addressField]: value,
  //       },
  //     }));
  //   } else {
  //     // Handle all other fields
  //     setPlantData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   }
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Convert string to number for numeric fields
    const numericFields = ['id', 'price', 'rating', 'totalSalesLastMonth', 'quantityAvailable'];
    const processedValue = numericFields.includes(name) ? Number(value) : value;

    if (name.startsWith('seller_')) {
      const addressField = name.replace('seller_', '');
      setPlantData((prev) => ({
        ...prev,
        sellerAddress: {
          ...prev.sellerAddress,
          [addressField]: value,
        },
      }));
    } else {
      setPlantData((prev) => ({
        ...prev,
        [name]: processedValue,
      }));
    }
  };

  
  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setPlantData((prev) => ({
      ...prev,
      categories: checked
        ? [...prev.categories, value]
        : prev.categories.filter((category) => category !== value),
    }));
  };

  // Fix the review handling logic
  const handleAddReview = () => {
    if (newReview.username && newReview.comment) {
      // Changed from reviewerName and reviewText
      setPlantData((prev) => ({
        ...prev,
        reviews: [...prev.reviews, { ...newReview }],
      }));
      // Reset the review form with correct field names
      setNewReview({
        username: '',
        rating: '',
        comment: '',
        productDelivered: '',
        dateTime: Date.now(),
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/plants', plantData);
      if (response.status === 200 || response.status === 201) {
        alert('Plant added successfully!');
        // Reset form or redirect as needed
      }
    } catch (error) {
      console.error('Error adding plant:', error);
      alert('Error adding plant. Please try again.');
    }
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    const processedValue = name === 'rating' ? Number(value) : value;
    setNewReview({
      ...newReview,
      [name]: processedValue,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
        <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">Add a New Plant</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Basic Information</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  value={plantData.name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">ID</label>
                <input
                  type="number"
                  name="id"
                  value={plantData.id}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={plantData.description}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  name="price"
                  value={plantData.price}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <input
                  type="number"
                  name="rating"
                  value={plantData.rating}
                  min={1}
                  max={5}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* reviews */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Reviews</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="text"
                  name="username"
                  value={newReview.username}
                  onChange={handleReviewChange}
                  placeholder="Reviewer Name"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleReviewChange}
                  placeholder="Rating (1-5)"
                  min="1"
                  max="5"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
              <div className="flex items-center">
                <textarea
                  name="comment"
                  value={newReview.comment}
                  onChange={handleReviewChange}
                  placeholder="Write a review"
                  rows="4"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  name="productDelivered"
                  value={newReview.productDelivered}
                  onChange={handleReviewChange}
                  placeholder="Product Delivered Status"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
              <div className="flex items-center space-x-4">
                <button
                  type="button"
                  onClick={handleAddReview}
                  className="rounded-md bg-[#1c3035] px-4 py-2 text-sm font-medium text-white shadow-xs hover:bg-[#1c3035] focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden"
                >
                  Add Review
                </button>
              </div>
            </div>

            {/* Displaying the Reviews */}
            <div className="mt-6 space-y-4">
              {plantData.reviews.map((review, index) => (
                <div key={index} className="border-t pt-4">
                  <h5 className="font-semibold text-gray-800">{review.username}</h5>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Rating: {review.rating}/5</span>
                    <span className="text-sm text-gray-600">•</span>
                    <span className="text-sm text-gray-600">{review.productDelivered}</span>
                  </div>
                  <p className="text-sm text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Seller Information Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Seller Information</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Seller Name</label>
                <input
                  type="text"
                  name="sellerName"
                  value={plantData.sellerName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Street</label>
                <input
                  type="text"
                  name="seller_street"
                  value={plantData.sellerAddress.street}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="seller_city"
                  value={plantData.sellerAddress.city}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input
                  type="text"
                  name="seller_state"
                  value={plantData.sellerAddress.state}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  name="seller_country"
                  value={plantData.sellerAddress.country}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <input
                  type="text"
                  name="seller_pincode"
                  value={plantData.sellerAddress.pincode}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Sales and Inventory Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Sales and Inventory</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Total Sales Last Month
                </label>
                <input
                  type="number"
                  name="totalSalesLastMonth"
                  value={plantData.totalSalesLastMonth}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Availability</label>
                <select
                  name="availability"
                  value={plantData.availability}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                >
                  <option value="">Select availability</option>
                  <option value="In Stock">In Stock</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Pre-order">Pre-order</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity Available
                </label>
                <input
                  type="number"
                  name="quantityAvailable"
                  value={plantData.quantityAvailable}
                  onChange={handleInputChange}
                  required
                  min="0"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Plant Categories</label>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Outdoor Plants"
                      checked={plantData.categories.includes('Outdoor Plants')}
                      onChange={handleCategoryChange}
                      className="h-4 w-4 rounded-sm border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">Outdoor Plants</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Indoor Plants"
                      checked={plantData.categories.includes('Indoor Plants')}
                      onChange={handleCategoryChange}
                      className="h-4 w-4 rounded-sm border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">Indoor Plants</label>
                  </div>

                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      name="categories"
                      value="Flowering Plants"
                      checked={plantData.categories.includes('Flowering Plants')}
                      onChange={handleCategoryChange}
                      className="h-4 w-4 rounded-sm border-gray-300 text-green-600 focus:ring-green-500"
                    />
                    <label className="ml-2 text-sm text-gray-700">Flowering Plants</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Plant Details Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Plant Details</h4>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Sunlight Requirement
                </label>
                <select
                  name="sunlightRequirement"
                  value={plantData.sunlightRequirement}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                >
                  <option value="">Select requirement</option>
                  <option value="Full Sun">Full Sun</option>
                  <option value="Partial Shade">Partial Shade</option>
                  <option value="Indirect Light">Indirect Light</option>
                  <option value="Bright Indirect Light">Bright Indirect Light</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Moisture Requirement
                </label>
                <select
                  name="moistureRequirement"
                  value={plantData.moistureRequirement}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                >
                  <option value="">Select requirement</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Growth Rate</label>
                <select
                  name="growthRate"
                  value={plantData.growthRate}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                >
                  <option value="">Select rate</option>
                  <option value="Fast">Fast</option>
                  <option value="Medium">Medium</option>
                  <option value="Slow">Slow</option>
                </select>
              </div>
            </div>
          </div>

          {/* Plant Details Section - Continued */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Additional Details</h4>
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">Soil Type</label>
                <input
                  type="text"
                  name="soilType"
                  value={plantData.soilType}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Season</label>
                <select
                  name="season"
                  value={plantData.season}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                >
                  <option value="">Select season</option>
                  <option value="Spring">Spring</option>
                  <option value="Summer">Summer</option>
                  <option value="Fall">Fall</option>
                  <option value="Winter">Winter</option>
                  <option value="All Season">All Season</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pot Size Required</label>
                <input
                  type="text"
                  name="potSizeRequired"
                  value={plantData.potSizeRequired}
                  onChange={handleInputChange}
                  required
                  placeholder="e.g., 6 inch"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Botanical Information */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Botanical Information</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Genus</label>
                <input
                  type="text"
                  name="genus"
                  value={plantData.genus}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Regional Name</label>
                <input
                  type="text"
                  name="regionalName"
                  value={plantData.regionalName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Local Name</label>
                <input
                  type="text"
                  name="localName"
                  value={plantData.localName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Biological Name</label>
                <input
                  type="text"
                  name="biologicalName"
                  value={plantData.biologicalName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Botanical Name</label>
                <input
                  type="text"
                  name="botanicalName"
                  value={plantData.botanicalName}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Additional Information</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Shipping States</label>
                <input
                  type="text"
                  name="shippingStates"
                  value={plantData.shippingStates.join(', ')}
                  onChange={(e) => {
                    const states = e.target.value.split(',').map((state) => state.trim());
                    setPlantData((prev) => ({ ...prev, shippingStates: states }));
                  }}
                  placeholder="Maharashtra, Goa, Karnataka"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Tags</label>
                <input
                  type="text"
                  name="tags"
                  value={plantData.tags.join(', ')}
                  onChange={(e) => {
                    const tags = e.target.value.split(',').map((tag) => tag.trim());
                    setPlantData((prev) => ({ ...prev, tags: tags }));
                  }}
                  placeholder="Indoor, Flowering, Easy Care"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Shopping Policy</label>
                <textarea
                  name="shoppingPolicy"
                  value={plantData.shoppingPolicy}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Refund Policy</label>
                <textarea
                  name="refundPolicy"
                  value={plantData.refundPolicy}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className="rounded-md bg-gray-50 p-6">
            <h4 className="mb-4 text-lg font-semibold text-gray-700">Images</h4>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">Primary Image URL</label>
                <input
                  type="text"
                  name="primaryImage"
                  value={plantData.primaryImage}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Secondary Images</label>
                <input
                  type="text"
                  name="secondaryImages"
                  value={plantData.secondaryImages.join(', ')}
                  onChange={(e) => {
                    const images = e.target.value.split(',').map((url) => url.trim());
                    setPlantData((prev) => ({ ...prev, secondaryImages: images }));
                  }}
                  placeholder="URL1, URL2, ..."
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-xs"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-xs hover:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-hidden"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-md bg-[#1c3035] px-4 py-2 text-sm font-medium text-white shadow-xs"
            >
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPlantDemo;
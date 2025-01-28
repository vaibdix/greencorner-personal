import React, { useState } from 'react';
import axios from 'axios';

const AddPlant = () => {
  const [review, setReview] = useState({
    username: '',
    rating: '',
    comment: '',
    productDelivered: '',
    dateTime: Date.now(),
  });

  const [plant, setPlant] = useState({
    name: '',
    id: '',
    description: '',
    price: '',
    rating: '',
    reviews: [],
    totalSalesLastMonth: '',
    sellerName: '',
    sellerAddress: {
      street: '',
      city: '',
      state: '',
      country: '',
      pincode: '',
    },
    availability: '',
    quantityAvailable: '',
    categories: [],
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlant({
      ...plant,
      [name]: value,
    });
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview({
      ...review,
      [name]: value,
    });
    setPlant((prevPlant) => ({
      ...prevPlant,
      reviews: [review],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Plant data being sent to server:', plant);
    try {
      const response = await axios.post('https://your-api-endpoint.com/plants', plant);
      console.log('Plant added successfully:', response.data);
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={plant.name}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>ID:</label>
        <input
          type="number"
          name="id"
          value={plant.id}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={plant.description}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={plant.price}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <h3>Review</h3>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={review.username}
            onChange={handleReviewChange}
            className="border"
          />
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="number"
            name="rating"
            value={review.rating}
            onChange={handleReviewChange}
            className="border"
          />
        </div>
        <div>
          <label>Comment:</label>
          <input
            type="text"
            name="comment"
            value={review.comment}
            onChange={handleReviewChange}
            className="border"
          />
        </div>
        <div>
          <label>Product Delivered:</label>
          <input
            type="text"
            name="productDelivered"
            value={review.productDelivered}
            onChange={handleReviewChange}
            className="border"
          />
        </div>
      </div>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          name="rating"
          value={plant.rating}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Total Sales Last Month:</label>
        <input
          type="number"
          name="totalSalesLastMonth"
          value={plant.totalSalesLastMonth}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Seller Name:</label>
        <input
          type="text"
          name="sellerName"
          value={plant.sellerName}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Seller Address Street:</label>
        <input
          type="text"
          name="street"
          value={plant.sellerAddress.street}
          onChange={(e) =>
            setPlant({
              ...plant,
              sellerAddress: { ...plant.sellerAddress, street: e.target.value },
            })
          }
          className="border"
        />
      </div>
      <div>
        <label>Seller Address City:</label>
        <input
          type="text"
          name="city"
          value={plant.sellerAddress.city}
          onChange={(e) =>
            setPlant({ ...plant, sellerAddress: { ...plant.sellerAddress, city: e.target.value } })
          }
          className="border"
        />
      </div>
      <div>
        <label>Seller Address State:</label>
        <input
          type="text"
          name="state"
          value={plant.sellerAddress.state}
          onChange={(e) =>
            setPlant({ ...plant, sellerAddress: { ...plant.sellerAddress, state: e.target.value } })
          }
          className="border"
        />
      </div>
      <div>
        <label>Seller Address Country:</label>
        <input
          type="text"
          name="country"
          value={plant.sellerAddress.country}
          onChange={(e) =>
            setPlant({
              ...plant,
              sellerAddress: { ...plant.sellerAddress, country: e.target.value },
            })
          }
          className="border"
        />
      </div>
      <div>
        <label>Seller Address Pincode:</label>
        <input
          type="text"
          name="pincode"
          value={plant.sellerAddress.pincode}
          onChange={(e) =>
            setPlant({
              ...plant,
              sellerAddress: { ...plant.sellerAddress, pincode: e.target.value },
            })
          }
          className="border"
        />
      </div>
      <div>
        <label>Availability:</label>
        <input
          type="text"
          name="availability"
          value={plant.availability}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Quantity Available:</label>
        <input
          type="number"
          name="quantityAvailable"
          value={plant.quantityAvailable}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Sunlight Requirement:</label>
        <input
          type="text"
          name="sunlightRequirement"
          value={plant.sunlightRequirement}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Moisture Requirement:</label>
        <input
          type="text"
          name="moistureRequirement"
          value={plant.moistureRequirement}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Soil Type:</label>
        <input
          type="text"
          name="soilType"
          value={plant.soilType}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Season:</label>
        <input
          type="text"
          name="season"
          value={plant.season}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Growth Rate:</label>
        <input
          type="text"
          name="growthRate"
          value={plant.growthRate}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Pot Size Required:</label>
        <input
          type="text"
          name="potSizeRequired"
          value={plant.potSizeRequired}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Genus:</label>
        <input
          type="text"
          name="genus"
          value={plant.genus}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Local Name:</label>
        <input
          type="text"
          name="localName"
          value={plant.localName}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Regional Name:</label>
        <input
          type="text"
          name="regionalName"
          value={plant.regionalName}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Biological Name:</label>
        <input
          type="text"
          name="biologicalName"
          value={plant.biologicalName}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Botanical Name:</label>
        <input
          type="text"
          name="botanicalName"
          value={plant.botanicalName}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Primary Image:</label>
        <input
          type="text"
          name="primaryImage"
          value={plant.primaryImage}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Secondary Images:</label>
        <input
          type="text"
          name="secondaryImages"
          value={plant.secondaryImages.join(', ')}
          onChange={(e) =>
            setPlant({
              ...plant,
              secondaryImages: e.target.value.split(',').map((img) => img.trim()),
            })
          }
          className="border"
        />
      </div>
      <div>
        <label>Shopping Policy:</label>
        <input
          type="text"
          name="shoppingPolicy"
          value={plant.shoppingPolicy}
          onChange={handleChange}
          className="border"
        />
      </div>
      <div>
        <label>Refund Policy:</label>
        <input
          type="text"
          name="refundPolicy"
          value={plant.refundPolicy}
          onChange={handleChange}
          className="border"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPlant;

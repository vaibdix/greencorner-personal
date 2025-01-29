import { useState } from 'react';
import axios from 'axios';

const AddPlant = () => {
  const [review, setReview] = useState({
    username: '',
    rating: '',
    comment: '',
    productDelivered: '',
    dateTime: Date.now(),
    likes: 0, // New field for likes
    dislikes: 0, // New field for dislikes
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
    const updatedReview = { ...review, [name]: value };
    setReview(updatedReview);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    // Add the review to the plant object
    setPlant((prevPlant) => ({
      ...prevPlant,
      reviews: [...prevPlant.reviews, review],
    }));

    // Reset review fields
    setReview({
      username: '',
      rating: '',
      comment: '',
      productDelivered: '',
      dateTime: Date.now(),
      likes: 0,
      dislikes: 0,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation: check if required fields are filled
    if (!plant.name || !plant.price || !plant.sellerName) {
      console.error('Required fields are missing');
      return;
    }

    console.log('Plant data being sent to server:', plant);

    try {
      const response = await axios.post('http://116.75.62.44:8000/plants', plant, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      console.log('Plant added successfully:', response.data);
    } catch (error) {
      console.error('Error adding plant:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Plant Details */}
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={plant.name} onChange={handleChange} />
      </div>
      <div>
        <label>ID:</label>
        <input type="number" name="id" value={plant.id} onChange={handleChange} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" name="description" value={plant.description} onChange={handleChange} />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={plant.price} onChange={handleChange} />
      </div>

      {/* Review Section */}
      <h3>Review</h3>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={review.username} onChange={handleReviewChange} />
      </div>
      <div>
        <label>Rating:</label>
        <input type="number" name="rating" value={review.rating} onChange={handleReviewChange} />
      </div>
      <div>
        <label>Comment:</label>
        <input type="text" name="comment" value={review.comment} onChange={handleReviewChange} />
      </div>
      <div>
        <label>Product Delivered:</label>
        <input
          type="text"
          name="productDelivered"
          value={review.productDelivered}
          onChange={handleReviewChange}
        />
      </div>
      <div>
        <label>Likes:</label>
        <input type="number" name="likes" value={review.likes} onChange={handleReviewChange} />
      </div>
      <div>
        <label>Dislikes:</label>
        <input
          type="number"
          name="dislikes"
          value={review.dislikes}
          onChange={handleReviewChange}
        />
      </div>
      <button onClick={handleReviewSubmit}>Add Review</button>

      {/* Seller Details */}
      <div>
        <label>Seller Name:</label>
        <input type="text" name="sellerName" value={plant.sellerName} onChange={handleChange} />
      </div>
      <div>
        <label>Seller Address:</label>
        <div>
          <label>Street:</label>
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
          />
        </div>
        <div>
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={plant.sellerAddress.city}
            onChange={(e) =>
              setPlant({
                ...plant,
                sellerAddress: { ...plant.sellerAddress, city: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label>State:</label>
          <input
            type="text"
            name="state"
            value={plant.sellerAddress.state}
            onChange={(e) =>
              setPlant({
                ...plant,
                sellerAddress: { ...plant.sellerAddress, state: e.target.value },
              })
            }
          />
        </div>
        <div>
          <label>Country:</label>
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
          />
        </div>
        <div>
          <label>Pincode:</label>
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
          />
        </div>
      </div>

      {/* Other Plant Details */}
      <div>
        <label>Availability:</label>
        <input type="text" name="availability" value={plant.availability} onChange={handleChange} />
      </div>
      <div>
        <label>Quantity Available:</label>
        <input
          type="number"
          name="quantityAvailable"
          value={plant.quantityAvailable}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Sunlight Requirement:</label>
        <input
          type="text"
          name="sunlightRequirement"
          value={plant.sunlightRequirement}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Moisture Requirement:</label>
        <input
          type="text"
          name="moistureRequirement"
          value={plant.moistureRequirement}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Soil Type:</label>
        <input type="text" name="soilType" value={plant.soilType} onChange={handleChange} />
      </div>
      <div>
        <label>Season:</label>
        <input type="text" name="season" value={plant.season} onChange={handleChange} />
      </div>
      <div>
        <label>Growth Rate:</label>
        <input type="text" name="growthRate" value={plant.growthRate} onChange={handleChange} />
      </div>
      <div>
        <label>Pot Size Required:</label>
        <input
          type="text"
          name="potSizeRequired"
          value={plant.potSizeRequired}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Genus:</label>
        <input type="text" name="genus" value={plant.genus} onChange={handleChange} />
      </div>
      <div>
        <label>Local Name:</label>
        <input type="text" name="localName" value={plant.localName} onChange={handleChange} />
      </div>
      <div>
        <label>Regional Name:</label>
        <input type="text" name="regionalName" value={plant.regionalName} onChange={handleChange} />
      </div>
      <div>
        <label>Biological Name:</label>
        <input
          type="text"
          name="biologicalName"
          value={plant.biologicalName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Botanical Name:</label>
        <input
          type="text"
          name="botanicalName"
          value={plant.botanicalName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Tags (comma-separated):</label>
        <input
          type="text"
          name="tags"
          value={plant.tags}
          onChange={(e) => setPlant({ ...plant, tags: e.target.value.split(',') })}
        />
      </div>

      {/* Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddPlant;

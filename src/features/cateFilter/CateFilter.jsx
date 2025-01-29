import { useState, useEffect, useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { context } from '../../store/AppContext';

import PlantCard from './components/PlantCard';
import FilterSection from './components/FilterSection';
import Pagination from './components/Pagination';

const CateFilter = () => {
  const { state, fetchPlants } = useContext(context);
  const { plants } = state;

  //To scroll directly on top firstly if navigated from certain page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!plants || plants.length === 0) {
      fetchPlants();
    }
  }, []);

  return (
    <div>
      <Section plants={plants} />
      <ToastContainer />
    </div>
  );
};

const Section = ({ plants: contextPlants }) => {
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
    if (contextPlants) {
      setFilteredPlants(contextPlants);
    }
  }, [contextPlants]);

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
    let filtered = [...contextPlants];
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
    <div className="grid grid-cols-[1.5fr_5fr] gap-4">
      <FilterSection
        className="fixed"
        availability={availability}
        priceRange={priceRange}
        rating={rating}
        categories={categories}
        handleAvailabilityChange={handleAvailabilityChange}
        handlePriceChange={handlePriceChange}
        handleCategoryChange={handleCategoryChange}
        handleRatingChange={handleRatingChange}
        applyFilters={applyFilters}
        predefinedCategories={predefinedCategories}
      />

      <div className="scroll grid grid-cols-1 gap-6 p-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {currentPlants.map((plant) => (
          <PlantCard key={plant.id} {...plant} type={plant.categories[0]} />
        ))}
      </div>
      <Pagination 
        currentPage={currentPage} 
        totalPages={totalPages} 
        paginate={paginate} 
      />
    </div>
  );
};

export default CateFilter;

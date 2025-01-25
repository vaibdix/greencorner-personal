import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { context } from '../../context/AppContext';
import { toast } from 'react-hot-toast';

const WishlistCard = ({ id, name, price, imageUrl, type }) => {
  const { removeFromWishlist, addToCart } = useContext(context);
  const navigate = useNavigate();

  const handleRemoveFromWishlist = (e) => {
    e.stopPropagation();
    removeFromWishlist(id);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ id, name, price, imageUrl });
    toast.success('Added to cart!');
  };

  return (
    <div
      className="group relative flex flex-col rounded-lg border border-gray-200 p-4 transition-all duration-300 hover:shadow-lg"
      onClick={() => navigate(`/product/${id}`)}
    >
      <div className="relative">
        <img src={imageUrl} alt={name} className="h-48 w-full rounded-lg object-cover" />
        <button
          onClick={handleRemoveFromWishlist}
          className="absolute right-2 top-2 rounded-full bg-white p-2 shadow-md hover:bg-red-50"
        >
          <Heart className="h-5 w-5 fill-red-500 text-red-500" />
        </button>
      </div>

      <div className="mt-4 flex flex-grow flex-col">
        <span className="text-sm text-gray-500">{type}</span>
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-lg font-bold">₹{price}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 rounded-full bg-[#1c3035] px-4 py-2 text-white transition-colors hover:bg-[#2a454d]"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

const Wishlist = () => {
  const { state } = useContext(context);
  const { wishlist } = state;

  if (wishlist.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4">
        <Heart className="mb-4 h-16 w-16 text-gray-300" />
        <h2 className="mb-2 text-2xl font-semibold text-gray-700">Your wishlist is empty</h2>
        <p className="text-center text-gray-500">
          Start adding your favorite plants to create your wishlist
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <p className="mt-2 text-gray-600">
          {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {wishlist.map((plant) => (
          <WishlistCard
            key={plant.id}
            id={plant.id}
            name={plant.name}
            price={plant.price}
            imageUrl={plant.imageUrl}
            type={plant.type}
          />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;

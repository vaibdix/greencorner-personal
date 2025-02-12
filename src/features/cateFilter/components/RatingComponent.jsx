import { useState } from 'react';

export const RatingComponent = () => {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  const handleMouseEnter = (index) => {
    setHovered(index + 1);
  };

  const handleMouseLeave = () => {
    setHovered(rating);
  };

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

export default RatingComponent;

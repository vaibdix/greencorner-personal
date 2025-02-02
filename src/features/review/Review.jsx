import { useState } from 'react';
import { Star } from 'lucide-react';
import { ThumbsUp } from 'lucide-react';
import { ThumbsDown } from 'lucide-react';

const Review = ({ reviews }) => {
  const [showAllReviews, setShowAllReviews] = useState(false);

  // Default number of reviews to show
  const initialReviewCount = 3;

  // Show all reviews if 'showAllReviews' is true
  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, initialReviewCount);

  return (
    <section className="mt-10">
      <div className="px-4">
        <h2 className="font-manrope mb-2 text-2xl font-bold text-black">Our customer reviews</h2>

        {/* Render reviews */}
        {reviewsToDisplay.length > 0 ? (
          reviewsToDisplay.map((review, index) => (
            <div key={index} className="pt-8 max-xl:mx-auto">
              <div className="mb-2 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={review.userAvatar || 'https://pagedone.io/asset/uploads/1704351103.png'} // Default if no avatar
                    alt={`${review.username} image`}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h6 className="text-md leading-8 font-semibold text-[#1C3035]">
                    {review.username}
                  </h6>
                </div>
                <p className="text-lg leading-8 font-normal text-gray-400">{review.date}</p>
              </div>

              {/* Rating Stars */}
              <div className="mb-1 ml-10 flex items-center gap-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={`${i < review.rating ? 'text-amber-500' : 'text-gray-300'}`}
                    strokeWidth={2}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-md ml-10 leading-8 font-normal text-gray-400 max-xl:text-justify">
                {review.comment}
              </p>

              {/* Likes and Dislikes */}
              <div className="mt-2 ml-10 flex items-center gap-6">
                <button className="flex items-center text-[#1C3035] hover:text-green-800">
                  <span className="pr-2">{review.likes}</span> <ThumbsUp size={16} />
                </button>
                <button className="flex items-center text-red-600 hover:text-red-800">
                  <span className="pr-2">{review.dislikes}</span> <ThumbsDown size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews yet. Be the first to review this product!</p>
        )}

        {/* Show more/less button */}
        {reviews.length > initialReviewCount && (
          <button
            onClick={() => setShowAllReviews(!showAllReviews)}
            className="mt-4 text-blue-600 hover:text-blue-800"
          >
            {showAllReviews ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Review;

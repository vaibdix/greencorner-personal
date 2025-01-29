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
              <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
                <div className="flex items-center gap-3">
                  <img
                    src={review.userAvatar || 'https://pagedone.io/asset/uploads/1704351103.png'} // Default if no avatar
                    alt={`${review.username} image`}
                    className="h-8 w-8 rounded-full object-cover"
                  />
                  <h6 className="text-lg leading-8 font-semibold text-indigo-600">
                    {review.username}
                  </h6>
                </div>
                <p className="text-lg leading-8 font-normal text-gray-400">{review.date}</p>
              </div>

              {/* Rating Stars */}
              <div className="mb-4 ml-10 flex items-center gap-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`text-amber-400 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="ml-10 text-lg leading-8 font-normal text-gray-400 max-xl:text-justify">
                {review.comment}
              </p>

              {/* Likes and Dislikes */}
              <div className="mt-4 ml-10 flex items-center gap-6">
                <button className="flex items-center text-green-600 hover:text-green-800">
                  <span className="mt-1 pr-2 font-semibold">{review.likes}</span> <ThumbsUp />
                </button>
                <button className="flex items-center text-red-600 hover:text-red-800">
                  <span className="mt-1 pr-2 font-semibold">{review.dislikes}</span> <ThumbsDown />
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
            className="mt-6 font-semibold text-blue-600 hover:text-blue-800"
          >
            {showAllReviews ? 'Show Less' : 'Show More'}
          </button>
        )}
      </div>
    </section>
  );
};

export default Review;

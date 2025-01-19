import { Star } from 'lucide-react';
import React from 'react';

const Review = () => {
  return (
    <section className="">
      <div className="px-4 md:px-5 w-1/2">
        <div className="">
          <h2 className="font-manrope mb-2 text-2xl font-bold text-black">
            Our customer reviews
          </h2>

          <div className="pt-8 max-xl:mx-auto max-xl:max-w-2xl">
            <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704351103.png"
                  alt="Robert image"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h6 className="text-lg font-semibold leading-8 text-indigo-600">Mahi Green</h6>
              </div>
              <p className="text-lg font-normal leading-8 text-gray-400">Nov 01, 2024</p>
            </div>
            <div className="mb-4 ml-10 flex items-center gap-3">
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
            </div>
            <p className="ml-10 text-lg font-normal leading-8 text-gray-400 max-xl:text-justify">
              Pagedone doesn't disappoint when it comes to the variety and richness of its design.
            </p>
          </div>

          <div className="pt-8 max-xl:mx-auto max-xl:max-w-2xl">
            <div className="mb-4 flex flex-col justify-between gap-5 min-[400px]:flex-row sm:items-center">
              <div className="flex items-center gap-3">
                <img
                  src="https://pagedone.io/asset/uploads/1704351103.png"
                  alt="Robert image"
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h6 className="text-lg font-semibold leading-8 text-indigo-600">Mahi Green</h6>
              </div>
              <p className="text-lg font-normal leading-8 text-gray-400">Nov 01, 2024</p>
            </div>
            <div className="mb-4 ml-10 flex items-center gap-3">
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
              <Star className="text-amber-400" />
            </div>
            <p className="ml-10 text-lg font-normal leading-8 text-gray-400 max-xl:text-justify">
              Pagedone doesn't disappoint when it comes to the variety and richness of its design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;

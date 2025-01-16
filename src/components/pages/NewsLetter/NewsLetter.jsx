import React from 'react';

const NewsLetter = () => {
  return (
    <div className="m-14 rounded-md bg-[#F5F5F5] p-10">
      <h3 className="p-5 pb-4 pt-10 text-3xl">Subscribe to Newsletter</h3>
      <p className="px-5">Join our GreenThumb community to receive expert gardening tips</p>
      <p className="px-5 py-3">exclusive offers, and the latest updates directly to inbox.</p>
      <input
        className="ml-5 mt-3 w-1/3 rounded-md border border-gray-400 p-3"
        type="email"
        placeholder="someone@email.com"
      />
      <button className="mb-4 ml-4 rounded-md bg-[#1C3035] p-3 px-10 text-white">Subscribe</button>
    </div>
  );
};

export default NewsLetter;

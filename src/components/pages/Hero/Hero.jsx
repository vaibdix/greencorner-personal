import React from 'react';
import InfiniteScrollText from './InfiniteScrollText';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div>
      <section className="relative bg-cover bg-center bg-no-repeat"
      // style={{ height: '55vh' }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 z-0 bg-white opacity-70"></div>

        <div
          className="mx-auto grid px-4 pl-20 sm:h-[30vh] lg:grid-cols-12 lg:gap-8 xl:gap-0"
          style={{
            backgroundImage:
              'url(https://img.freepik.com/premium-vector/white-background-with-many-autumn-foliage-vector_532963-4388.jpg)',
            width: '100%',
            height: '55vh',
          }}
        >
          <div className="relative z-10 mr-10 place-self-center lg:col-span-7">
            <h1 className="mb-4 md:text-xl lg:text-2xl xl:text-4xl">
              The Ultimate Plant
              <br />
              Shopping Destination
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-12 lg:text-xl"></p>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#1C3035] px-7 py-3 text-center text-base font-medium text-white hover:bg-gray-200"
            >
              Speak to Sales
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <Link
              to="/category"
              className="bg-primary-700 mr-3 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium underline underline-offset-4"
            >
              View All Products
            </Link>
          </div>

          <div className="-pt-3 relative z-10 hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="src/assets/woman.png"
              alt="mockup"
              // style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>
      <InfiniteScrollText />
    </div>
  );
};

export default Hero;

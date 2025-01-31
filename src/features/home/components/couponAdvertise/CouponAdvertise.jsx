import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import flowerskin from '../../../../assets/images/flowerskin.png';
import redpot from '../../../../assets/images/redpot.png';
import pot from '../../../../assets/images/pot.png';

const CouponAdvertise = () => {
  return (
    <section className="p-4 sm:p-10">
      <div className="mx-auto px-2 sm:px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-12 text-2xl sm:text-3xl text-gray-900 text-center sm:text-left"
        >
          New arrivals in this week
        </motion.h2>

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
          {/* Interior Decoration Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="group relative overflow-hidden rounded-2xl bg-[#F5EFEB] p-6 sm:p-8"
          >
            <div className="max-w-[200px] sm:max-w-[240px]">
              <span className="mb-2 inline-block text-xs sm:text-sm text-gray-600">Big Sale Product</span>
              <h3 className="mb-4 text-2xl sm:text-3xl font-medium text-gray-900">
                Plant for Interior Decoration
              </h3>
              <div className="mb-4 sm:mb-6">
                <span className="text-base sm:text-lg font-medium text-gray-900">Start From</span>
                <span className="ml-2 text-xl sm:text-2xl font-semibold text-gray-900">₹320</span>
              </div>
              <button className="flex items-center gap-2 border-b border-gray-900 pb-1 text-sm sm:text-base text-gray-900 transition-all hover:gap-4">
                SHOP NOW
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </button>
            </div>
            <img
              src={flowerskin}
              alt="Interior Plant"
              className="absolute right-0 bottom-0 max-h-[80%] w-auto sm:max-h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </motion.div>

          <div className="grid gap-4 sm:gap-6">
            {/* Monstera Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="group relative overflow-hidden rounded-2xl bg-[#F0F3F0] p-4 sm:p-6"
            >
              <div className="max-w-[140px] sm:max-w-[160px]">
                <span className="mb-2 inline-block text-xs sm:text-sm text-gray-600">New Category</span>
                <h3 className="mb-4 text-xl sm:text-2xl font-medium text-gray-900">Monsera</h3>
                <button className="flex items-center gap-2 border-b border-gray-900 pb-1 text-sm sm:text-base text-gray-900 transition-all hover:gap-4">
                  SHOP NOW
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
              <img
                src={pot}
                alt="Monstera Plant"
                className="absolute right-0 bottom-2 sm:bottom-5 h-24 w-24 sm:h-32 sm:w-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>

            {/* Garden Plant Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-[#1C3035] p-4 sm:p-6 text-white"
            >
              <div className="">
                <span className="mb-2 inline-block text-xs sm:text-sm text-gray-300">New Product</span>
                <h3 className="mb-4 text-xl sm:text-2xl font-medium">Plant for Garden</h3>
                <button className="flex items-center gap-2 border-b border-white pb-1 text-sm sm:text-base transition-all hover:gap-4">
                  SHOP NOW
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>
              </div>
              <img
                src={redpot}
                alt="Garden Plant"
                className="absolute right-0 bottom-0 h-24 w-24 sm:h-32 sm:w-32 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouponAdvertise;

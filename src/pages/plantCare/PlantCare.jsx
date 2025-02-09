import React, { useState } from 'react';
import { Sun, Droplets, Wind, Thermometer, Clock, Calendar, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const PlantCare = () => {
  const [activeSection, setActiveSection] = useState('basics');
  const [activeGuide, setActiveGuide] = useState('indoor');

  // Enhanced animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
  };

  const scrollVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20, scale: 0.95 },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
  };

  const careBasics = [
    {
      icon: <Sun size={24} />,
      title: 'Light Requirements',
      description:
        'Most indoor plants thrive in bright, indirect sunlight. Avoid direct sun exposure which can burn leaves.',
    },
    {
      icon: <Droplets size={24} />,
      title: 'Watering Schedule',
      description:
        'Water thoroughly when the top 1-2 inches of soil feels dry. Avoid overwatering which can lead to root rot.',
    },
    {
      icon: <Wind size={24} />,
      title: 'Air Circulation',
      description:
        'Good air flow prevents fungal growth and strengthens stems. Avoid cold drafts from windows or AC units.',
    },
    {
      icon: <Thermometer size={24} />,
      title: 'Temperature',
      description:
        'Most indoor plants prefer temperatures between 65-75°F (18-24°C). Protect from extreme temperature changes.',
    },
    {
      icon: <Clock size={24} />,
      title: 'Maintenance Time',
      description:
        'Dedicate a few minutes each week to inspect your plants, remove dead leaves, and check moisture levels.',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Seasonal Care',
      description:
        'Adjust care routines with the seasons. Plants need less water and fertilizer during winter months.',
    },
  ];

  const detailedGuides = {
    indoor: {
      title: 'Indoor Plants',
      image:
        'https://images.unsplash.com/photo-1463320898484-cdee8141c787?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tips: [
        'Position plants near windows but avoid direct sunlight',
        'Maintain humidity with pebble trays or humidifiers',
        'Rotate plants regularly for even growth',
        'Clean leaves monthly to remove dust',
        'Use well-draining potting mix',
      ],
    },
    outdoor: {
      title: 'Outdoor Plants',
      image:
        'https://images.unsplash.com/photo-1515542647469-5f9a6b25ef5b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tips: [
        'Check soil moisture daily in hot weather',
        'Mulch to retain moisture and prevent weeds',
        'Prune dead or damaged growth regularly',
        'Protect from extreme weather conditions',
        'Monitor for pests and diseases',
      ],
    },
  };

  const seasonalCare = [
    {
      season: 'Spring',
      image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
      tasks: [
        'Start fertilizing as growth resumes',
        'Increase watering frequency',
        'Repot plants if needed',
        'Begin pruning and shaping',
      ],
    },
    {
      season: 'Summer',
      image: 'https://images.unsplash.com/photo-1533119408463-b0f487583ff6',
      tasks: [
        'Water more frequently',
        'Provide shade from intense sun',
        'Monitor for pest issues',
        'Maintain high humidity',
      ],
    },
    {
      season: 'Fall',
      image:
        'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tasks: [
        'Reduce watering frequency',
        'Clean leaves thoroughly',
        'Prepare for less light',
        'Stop fertilizing',
      ],
    },
    {
      season: 'Winter',
      image:
        'https://plus.unsplash.com/premium_photo-1673624991085-13f33bcc328d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tasks: [
        'Minimize watering',
        'Maintain temperature',
        'Avoid cold drafts',
        'Hold off on fertilizing',
      ],
    },
  ];

  return (
    <div className="from-sage-50 to-sage-100 min-h-screen bg-gradient-to-b">
      {/* Hero Section with enhanced animations */}
      <motion.section
        className="relative h-[80vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-4.0.3"
            alt="Plant Care Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        <div className="relative z-10 flex h-full items-center justify-center text-center">
          <motion.div
            className="max-w-3xl px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          >
            <motion.h1
              className="mb-6 text-5xl font-light tracking-tight text-white sm:text-7xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              The Art of Plant Care
            </motion.h1>
            <motion.p
              className="text-lg text-gray-200 sm:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Discover the secrets to helping your plants thrive through every season
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Care Basics Grid with enhanced animations */}
      <section className="mx-auto max-w-7xl px-4 py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={scrollVariants}
        >
          <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
            Essential Care Guidelines
          </h2>
          <p className="mb-5 text-gray-600">
            Master these fundamentals to keep your plants healthy and thriving
          </p>
        </motion.div>

        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {careBasics.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group rounded-lg bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="bg-sage-100 text-sage-600 group-hover:bg-sage-200 mb-4 inline-block rounded-full p-3 transition-all">
                {item.icon}
              </div>
              <h3 className="mb-3 text-xl font-medium text-gray-900">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Interactive Care Guide with enhanced animations */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
              Detailed Care Guides
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              {Object.keys(detailedGuides).map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveGuide(type)}
                  className={`rounded-full px-6 py-2 transition-all ${
                    activeGuide === type
                      ? 'bg-sage-600 text-white'
                      : 'bg-sage-100 text-sage-600 hover:bg-sage-200'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)} Plants
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            key={activeGuide}
            className="grid gap-8 lg:grid-cols-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <motion.div
              className="overflow-hidden rounded-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={detailedGuides[activeGuide].image}
                alt={detailedGuides[activeGuide].title}
                className="h-full w-full object-cover"
              />
            </motion.div>
            <div className="space-y-6">
              <h3 className="text-2xl font-medium">{detailedGuides[activeGuide].title} Care</h3>
              <ul className="space-y-4">
                {detailedGuides[activeGuide].tips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="bg-sage-100 mt-1 rounded-full p-1">
                      <Check size={16} className="text-sage-600" />
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasonal Care Guide with enhanced animations */}
      <section className="bg-sage-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="mb-4 text-3xl font-light tracking-tight text-gray-900 sm:text-4xl">
              Seasonal Care Guide
            </h2>
          </motion.div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {seasonalCare.map((season, index) => (
              <motion.div
                key={season.season}
                variants={cardVariants}
                whileHover={{
                  scale: 1.03,
                  y: -5,
                  transition: {
                    duration: 0.2,
                    ease: 'easeInOut',
                  },
                }}
                className="overflow-hidden rounded-lg bg-white shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={season.image}
                    alt={season.season}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-xl font-medium">{season.season}</h3>
                  <ul className="space-y-2 text-gray-600">
                    {season.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PlantCare;

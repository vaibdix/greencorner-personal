import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Heart, Truck, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10K+', label: 'Happy Customers' },
    { number: '5K+', label: 'Plants Varieties' },
    { number: '15+', label: 'Years Experience' },
    { number: '100%', label: 'Plant Guarantee' },
  ];

  const values = [
    {
      icon: <Leaf className="h-6 w-6" />,
      title: 'Sustainability',
      description: 'We prioritize eco-friendly practices in every aspect of our business.',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Plant Care',
      description: 'Every plant is nurtured with expertise and dedication.',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Safe Delivery',
      description: 'Carefully packed and delivered to ensure plants arrive healthy.',
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: 'Quality Guarantee',
      description: 'We stand behind the quality of every plant we sell.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] overflow-hidden">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
            alt="Greenhouse"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <div className="relative z-10 flex h-full items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center text-white"
          >
            <h1 className="mb-6 text-5xl font-light tracking-tight sm:text-7xl">
              Growing Green Dreams
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200">
              We're passionate about bringing the beauty of nature into your space with carefully
              selected and nurtured plants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-sage-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h2 className="text-sage-600 mb-2 text-4xl font-light">{stat.number}</h2>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="mb-6 text-3xl font-light">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2008, GreenCorner began with a simple mission: to connect people with
                  the perfect plants for their spaces. What started as a small greenhouse has grown
                  into a thriving community of plant lovers.
                </p>
                <p>
                  We carefully select and nurture each plant in our collection, ensuring they're
                  healthy and ready to thrive in their new homes. Our team of expert horticulturists
                  provides guidance and support throughout your plant parenthood journey.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] overflow-hidden rounded-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae"
                alt="Our Greenhouse"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-sage-50 py-24">
        <div className="mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-light">Our Values</h2>
            <p className="text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-lg bg-white p-8 text-center shadow-xs transition-all hover:shadow-md"
              >
                <div className="bg-sage-100 text-sage-600 group-hover:bg-sage-200 mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full transition-all">
                  {value.icon}
                </div>
                <h3 className="mb-2 text-xl font-medium">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Mail, Twitter } from 'lucide-react';
import { useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
    services: {
      plantCare: false,
      delivery: false,
      consultation: false,
      maintenance: false,
      other: false,
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true); // Set to true to simulate loading state

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        services: {
          ...prev.services,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  // Simulate loading state being over after 3 seconds
  setTimeout(() => setLoading(false), 3000);

  return (
    <div className="min-h-screen bg-gray-50 py-1 sm:py-16 lg:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-normal tracking-tight text-gray-900 sm:text-3xl">
            We'd love to help
          </h1>
          <p className="text-md mt-4 text-gray-600">
            We're passionate plant experts ready to help with your green companions. We'll get back
            to you within 24 hours to nurture your garden dreams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Contact Form Skeleton */}
          <div className="rounded-2xl bg-white p-8 shadow-sm">
            {loading ? (
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="skeleton-input"></div>
                  <div className="skeleton-input"></div>
                </div>
                <div className="skeleton-input"></div>
                <div className="skeleton-input"></div>
                <div className="skeleton-input h-24"></div>
                <div className="skeleton-checkbox"></div>
                <div className="skeleton-btn"></div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="block text-sm text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      id="lastName"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm text-gray-700">
                    Phone number
                  </label>
                  <div className="mt-1 flex rounded-lg border border-gray-300 focus-within:border-gray-900">
                    <span className="inline-flex items-center border-r border-gray-300 px-4 text-gray-500">
                      IN
                    </span>
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      placeholder="+91 000-000-0000"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="block w-full rounded-r-lg border-0 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    placeholder="Leave us a message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:border-gray-900 focus:ring-0"
                  />
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-900"
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    You agree to our friendly{' '}
                    <a href="#" className="underline">
                      privacy policy
                    </a>
                    .
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-black px-6 py-3 text-base font-medium text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 focus:outline-none"
                >
                  Send message
                </button>
              </form>
            )}
          </div>

          {/* Testimonial Section Skeleton */}
          <div className="relative overflow-hidden rounded-2xl text-white">
            {loading ? (
              <div className="skeleton-image"></div>
            ) : (
              <img
                src="https://www.ugaoo.com/cdn/shop/files/1_ced87a4c-7b85-4f10-8eee-9d356c6a71b8.jpg?v=1726306136&width=3840"
                alt=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

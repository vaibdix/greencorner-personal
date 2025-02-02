import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const OrderConfirmation = () => {
  const { state } = useLocation();
  const { order } = state || {};

  if (!order) {
    return <Navigate to="/" />;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="text-center">
        <div className="mb-4 flex justify-center">
          <Check className="h-16 w-16 text-green-500" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Order Confirmed!</h1>
        <p className="mt-4 text-gray-500">Order #{order.id}</p>
        <div className="mt-10">
          <Link to="/" className="hover:bg-opacity-90 rounded-md bg-[#1c3035] px-6 py-3 text-white">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;

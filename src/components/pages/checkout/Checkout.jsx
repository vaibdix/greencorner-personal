import { useContext, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { context } from '../../context/AppContext';
import googlelogo from '../../../assets/svg/gpay.svg'
import applelogo from '../../../assets/svg/applepay.svg'

const Checkout = () => {
  const { state, cartTotal } = useContext(context);
  const { cart } = state;
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    apartment: '',
    phone: '',
    country: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle checkout logic here
  };

  return (
    <div>
      <section className="relative z-10">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Form */}
            <div className="w-full pb-8 pt-14 lg:py-14">
              <h2 className="font-manrope mb-8 text-2xl font-semibold">Shipping Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200 p-4"
                  value={formData.email}
                  onChange={handleInputChange}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full rounded-lg border border-gray-200 p-4"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full rounded-lg border border-gray-200 p-4"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>

                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  className="w-full rounded-lg border border-gray-200 p-4"
                  value={formData.company}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="w-full rounded-lg border border-gray-200 p-4"
                  value={formData.address}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  name="apartment"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full rounded-lg border border-gray-200 p-4"
                  value={formData.apartment}
                  onChange={handleInputChange}
                />

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="country"
                    placeholder="Country/Region"
                    className="w-full rounded-lg border border-gray-200 p-4"
                    value={formData.country}
                    onChange={handleInputChange}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="w-full rounded-lg border border-gray-200 p-4"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-manrope mb-4 text-xl font-semibold">Payment Method</h3>
                  <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                    <div className="flex items-center justify-center ">
                      <img src={googlelogo} alt="Google Pay" className="" />
                    </div>
                    <div className="flex items-center justify-center">
                      <img src={applelogo} alt="Apple Pay" className="" />
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-gray-200 p-4">
                      <img src="/paytm.png" alt="Paytm" className="h-8" />
                    </div>
                    <div className="flex items-center justify-center rounded-lg border border-gray-200 p-4">
                      <img src="/card.png" alt="Card" className="h-8" />
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Right Section - Order Summary */}
            <div className="w-full bg-gray-50 p-8">
              <h2 className="font-manrope mb-6 text-2xl font-semibold">Order Summary</h2>

              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />
                      <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-white">
                        {item.quantity}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500">₹{item.price * item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{cartTotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>₹50</span>
                </div>
                <div className="mt-2 border-t border-gray-200 pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>₹{cartTotal + 50}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#1c3035] px-6 py-3 text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700"
              >
                Place Order
                <span className="ml-2 rounded-full bg-white p-1">
                  <ArrowUpRight color="black" size={18} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Checkout;

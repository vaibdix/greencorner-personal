import { useContext, useState, Suspense } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { context } from '../../store/AppContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import googlelogo from '../../assets/svg/gpay.svg';
import applelogo from '../../assets/svg/applepay.svg';
import card from '../../assets/svg/card.svg';
import paytm from '../../assets/svg/paytm.svg';

const SkeletonLoader = () => (
  <div className="space-y-6">
    <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="h-12 w-full animate-pulse bg-gray-300"></div>
      <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    </div>
    <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div className="h-12 w-full animate-pulse bg-gray-300"></div>
      <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    </div>
    <div className="h-12 w-full animate-pulse bg-gray-300"></div>
    <div className="h-12 w-full animate-pulse bg-gray-300"></div>
  </div>
);

const Checkout = () => {
  const { state, cartTotal, clearCart } = useContext(context);
  const { cart } = state;
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    if (!formData.country) newErrors.country = 'Country is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      // Create order object
      const order = {
        id: Date.now(),
        orderDate: new Date().toISOString(),
        customer: formData,
        items: cart,
        total: cartTotal + 50,
        status: 'pending',
      };

      const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
      localStorage.setItem('orders', JSON.stringify([...existingOrders, order]));

      clearCart();
      toast.success('Order placed successfully!');
      navigate('/order-confirmation', { state: { order } });
    } catch (error) {
      toast.error('Failed to place order. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <div>
      <section className="relative z-10">
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Left Section - Form */}
            <div className="w-full pt-14 pb-8 lg:py-14">
              <h2 className="font-manrope mb-8 text-2xl font-semibold">Shipping Information</h2>

              <Suspense fallback={<SkeletonLoader />}>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className={`w-full rounded-lg border ${
                      errors.email ? 'border-red-500' : 'border-gray-200'
                    } p-4`}
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}

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
                      <div className="flex items-center justify-center">
                        <img src={googlelogo} alt="Google Pay" className="" />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={applelogo} alt="Apple Pay" className="" />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={paytm} alt="Paytm" className="" />
                      </div>
                      <div className="flex items-center justify-center">
                        <img src={card} alt="Card" className="" />
                      </div>
                    </div>
                  </div>
                </form>
              </Suspense>
            </div>

            {/* Right Section - Order Summary */}
            <div className="w-full bg-gray-50 p-8">
              <h2 className="font-manrope mb-6 text-2xl font-semibold">Order Summary</h2>

              <Suspense fallback={<SkeletonLoader />}>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-16 w-16 rounded-lg object-cover"
                        />
                        <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-500 text-xs text-white">
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
              </Suspense>

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

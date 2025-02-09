import { ArrowUpRight, Plus } from 'lucide-react';
import React, { useContext, Suspense } from 'react';
import { context } from '../../store/AppContext';
import { Link } from 'react-router-dom';
import CartSkeleton from './CartSkeleton';

const Cart = () => {
  // const { state, updateCartQuantity, removeFromCart, cartTotal } = useContext(context);
  const { state, updateCartQuantity, cartTotal } = useContext(context);
  const { cart } = state;

  const handleQuantityChange = (id, newQuantity) => {
    updateCartQuantity(id, parseInt(newQuantity));
  };

  return (
    <Suspense fallback={<CartSkeleton />}>
      <div>
        <section className="after:contents-[''] relative z-10 after:absolute after:top-0 after:right-0 after:z-0 after:h-full after:bg-gray-50 xl:after:w-1/3">
          <div className="lg-6 relative z-10 mx-auto w-full max-w-7xl px-4 md:px-5">
            <div className="grid grid-cols-12">
              <div className="col-span-12 w-full pt-14 pb-8 max-xl:mx-auto max-xl:max-w-3xl lg:py-14 lg:pr-8 xl:col-span-8">
                <div className="flex items-center justify-between border-b border-gray-300 pb-8">
                  <h2 className="font-manrope text-2xl leading-10 font-semibold text-black">
                    Shopping Cart
                  </h2>
                  <h2 className="font-manrope text-xl leading-8 font-bold text-gray-600">
                    {cart.length} Items
                  </h2>
                </div>
                <div className="mt-8 grid grid-cols-12 border-b border-gray-200 pb-6 max-md:hidden">
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-lg leading-8 font-normal text-gray-400">Product Details</p>
                  </div>
                  <div className="col-span-12 md:col-span-5">
                    <div className="grid grid-cols-5">
                      <div className="col-span-3">
                        <p className="text-center text-lg leading-8 font-normal text-gray-400">
                          Quantity
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-center text-lg leading-8 font-normal text-gray-400">
                          Total
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Cart Items */}
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col gap-5 border-b border-gray-200 py-6 min-[500px]:flex-row min-[500px]:items-center"
                  >
                    <div className="w-full md:max-w-[126px]">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="mx-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="grid w-full grid-cols-1 md:grid-cols-4">
                      <div className="md:col-span-2">
                        <div className="flex flex-col gap-3 max-[500px]:items-center">
                          <h6 className="text-base leading-7 font-semibold text-black">
                            {item.name}
                          </h6>
                          <h6 className="text-base leading-7 font-normal text-gray-500">
                            Category
                          </h6>
                          <h6 className="text-base leading-7 font-medium text-gray-600 transition-all duration-300 group-hover:text-indigo-600">
                            ₹{item.price}
                          </h6>
                        </div>
                      </div>
                      <div className="flex h-full items-center max-[500px]:justify-center max-md:mt-3">
                        <div className="flex h-full items-center">
                          <button
                            className="group flex items-center justify-center rounded-l-xl border border-gray-200 px-5 py-[18px]"
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          >
                            <svg
                              className="stroke-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                          <input
                            type="text"
                            className="w-full max-w-[73px] min-w-[60px] border-y border-gray-200 bg-transparent py-[15px] text-center text-lg font-semibold"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                          />
                          <button
                            className="group flex items-center justify-center rounded-r-xl border border-gray-200 px-5 py-[18px]"
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          >
                            <svg
                              className="stroke-gray-900"
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M11 5.5V16.5M16.5 11H5.5"
                                stroke=""
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex h-full items-center max-[500px]:justify-center max-md:mt-3 md:justify-end">
                        <p className="text-center text-lg leading-8 font-bold text-gray-600">
                          ₹{item.price * item.quantity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="col-span-12 mx-auto w-full max-w-3xl bg-gray-50 py-14 max-xl:px-6 lg:pl-8 xl:col-span-4 xl:max-w-lg">
                <h2 className="font-manrope border-b border-gray-300 pb-8 text-2xl leading-10 font-semibold text-black">
                  Order Summary
                </h2>
                <div className="mt-8">
                  <form>
                    <div className="flex items-center justify-between py-2">
                      <p className="text-md leading-8 font-medium text-black">Subtotal</p>
                      <p className="text-md leading-8 font-semibold text-[#1c3035]">₹{cartTotal}</p>
                    </div>
                    <div className="mb-2 flex items-center justify-between py-2">
                      <p className="text-md leading-8 font-medium text-black">Shipping</p>
                      <p className="text-md leading-8 font-semibold text-[#1c3035]">
                        Calculated at checkout
                      </p>
                    </div>
                    <svg width="100%" height="2" viewBox="0 0 100 2" fill="none">
                      <line x1="0" y1="1" x2="100" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                    </svg>
                    <div className="flex items-center justify-between py-5">
                      <p className="text-md leading-8 font-medium text-black">Total</p>
                      <p className="text-md leading-8 font-semibold text-[#1c3035]">₹{cartTotal}</p>
                    </div>

                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 100 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                    </svg>

                    <div className="flex items-center justify-between py-5">
                      <p className="text-md leading-8 font-medium text-black">Have a Promo Code</p>
                      <p className="text-md leading-8 font-semibold text-[#1c3035]">
                        {' '}
                        <Plus />{' '}
                      </p>
                    </div>

                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 100% 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <line x1="0" y1="1" x2="100%" y2="1" stroke="#E5E7EB" strokeWidth="2" />
                    </svg>

                    <Link
                      to="/checkout"
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#1c3035] px-6 py-3 text-center text-lg font-semibold text-white transition-all duration-500 hover:bg-indigo-700"
                    >
                      Checkout
                      <span className="ml-5 rounded-full bg-white p-1">
                        <ArrowUpRight color="black" />
                      </span>
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Suspense>
  );
};

export default Cart;

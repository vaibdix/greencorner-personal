import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../../store/AppContext';
import logo from '../../../assets/images/newlogo.png';
import userImage from '../../../assets/images/user.jpg'; // Add this import
import SearchModal from './SearchModal';
import { Command } from 'lucide-react';

const Header = () => {
  const { state, logout } = useContext(context);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const cartItemsCount = state.cart.reduce((total, item) => total + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const toggleLoginDropdown = () => {
    setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <div className="sticky top-0 z-50">
      <header>
        <nav className="border-b-2 border-gray-200 bg-white px-4 py-2.5 lg:px-6">
          <div className="mx-auto flex max-w-(--breakpoint-xl) flex-wrap items-center justify-between">
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-3 h-24 sm:h-9" alt="Green Corner Logo" />
              <span className="self-center text-xl font-semibold">The Green Corner</span>
            </Link>
            <div className="flex items-center gap-3 lg:order-2">
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="flex items-center gap-2 rounded-md border border-[#1C3035] bg-[#fafafa] px-3 py-1.5 text-sm"
              >
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#1C3035]"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  <span>Search</span>
                </div>
                <div className="flex items-center gap-1 rounded bg-[#1C3035] px-1.5 py-0.5 text-white">
                  <Command size={12} />
                  <span className="text-xs">K</span>
                </div>
              </button>
              <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

              <Link
                to="/wishlist"
                className="relative rounded-lg py-2 text-sm font-medium text-gray-800 lg:py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-heart"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-0 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                to="/cart"
                className="relative rounded-lg py-2 text-sm font-medium text-gray-800 lg:py-2.5"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-bag"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-0 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>
              {state.isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center rounded-lg py-2 text-sm font-medium text-gray-800 lg:py-2.5"
                  >
                    <span className="mr-2">{state.user?.username}</span>
                    <img src={userImage} alt="User" className="h-6 w-6 rounded-full object-cover" />
                  </button>

                  {isProfileDropdownOpen && (
                    <div className="ring-opacity-5 absolute right-0 mt-2 w-48 rounded-md bg-white py-1 ring-1 shadow-lg ring-black">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Profile
                      </Link>
                      <Link
                        to="/orders"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Orders
                      </Link>
                      <button
                        onClick={logout}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative">
                  <button
                    onClick={toggleLoginDropdown}
                    className="flex items-center rounded-lg py-2 text-sm font-medium text-gray-800 lg:py-2.5"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-circle-user-round"
                    >
                      <path d="M18 20a6 6 0 0 0-12 0" />
                      <circle cx="12" cy="10" r="4" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </button>

                  {isLoginDropdownOpen && (
                    <div className="ring-opacity-5 absolute right-0 mt-2 w-48 rounded-md bg-white py-1 ring-1 shadow-lg ring-black">
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        User Login
                      </Link>
                      <Link
                        to="/addnewplant"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Admin Login
                      </Link>
                    </div>
                  )}
                </div>
              )}
              <button
                onClick={toggleMobileMenu}
                type="button"
                className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-hidden lg:hidden"
                aria-controls="mobile-menu-2"
                aria-expanded={isMobileMenuOpen ? 'true' : 'false'}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className={`${
                isMobileMenuOpen ? 'block' : 'hidden'
              } w-full items-center justify-between lg:order-1 lg:flex lg:w-auto`}
              id="mobile-menu-2"
            >
              <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
                <li>
                  <Link
                    to="/"
                    className="bg-primary-700 lg:text-primary-700 block rounded-sm py-2 pr-4 pl-3 lg:bg-transparent lg:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category"
                    className="lg:hover:text-primary-700 border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Explore Plants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plantcare"
                    className="lg:hover:text-primary-700 border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Plant Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="lg:hover:text-primary-700 border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/checkout"
                    className="lg:hover:text-primary-700 border-b border-gray-100 py-2 pr-4 pl-3 text-gray-700 lg:border-0 lg:p-0 lg:hover:bg-transparent"
                  >
                    Checkout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;

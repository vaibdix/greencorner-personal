import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../../../store/AppContext';
import logo from '../../../assets/images/newlogo.png';
import userImage from '../../../assets/images/user.jpg';
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
        <nav className="border-b-2 border-gray-200 bg-white px-2 py-2 sm:px-4 lg:px-6">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
              <img src={logo} className="mr-2 h-8 w-auto sm:h-9" alt="Green Corner Logo" />
              <span className="hidden self-center text-xl font-semibold sm:block">
                The Green Corner
              </span>
            </Link>

            {/* Navigation Links - Desktop */}
            <div className="hidden lg:order-1 lg:flex lg:w-auto">
              <ul className="flex space-x-8 font-medium">
                <li>
                  <Link to="/" className="text-gray-700 hover:text-[#1C3035]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/category" className="text-gray-700 hover:text-[#1C3035]">
                    Explore Plants
                  </Link>
                </li>
                <li>
                  <Link to="/plantcare" className="text-gray-700 hover:text-[#1C3035]">
                    Plant Care
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-700 hover:text-[#1C3035]">
                    About
                  </Link>
                </li>
              </ul>
            </div>

            {/* Right Section - Search, Cart, Profile */}
            <div className="flex items-center gap-1 sm:gap-3 lg:order-2">
              {/* Search Button - Desktop */}
              <button
                onClick={() => setIsSearchModalOpen(true)}
                className="hidden items-center gap-2 rounded-md border border-[#1C3035] bg-[#fafafa] px-2 py-1.5 text-sm sm:flex sm:px-3"
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
                  <span className="hidden sm:inline">Search</span>
                </div>
                <div className="hidden items-center gap-1 rounded bg-[#1C3035] px-1.5 py-0.5 text-white sm:flex">
                  <Command size={12} />
                  <span className="text-xs">K</span>
                </div>
              </button>

              {/* Search Button - Mobile */}
              <button onClick={() => setIsSearchModalOpen(true)} className="relative p-2 sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </button>
              <SearchModal isOpen={isSearchModalOpen} onClose={() => setIsSearchModalOpen(false)} />

              {/* Wishlist Icon */}
              <Link to="/wishlist" className="relative p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              {/* Cart Icon */}
              <Link to="/cart" className="relative p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-700"
                >
                  <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                  <path d="M3 6h18" />
                  <path d="M16 10a4 4 0 0 1-8 0" />
                </svg>
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                    {cartItemsCount}
                  </span>
                )}
              </Link>

              {/* Profile/Login Section */}
              {state.isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={toggleProfileDropdown}
                    className="flex items-center space-x-2 rounded-lg p-2"
                  >
                    <span className="hidden text-sm font-medium text-gray-700 sm:block">
                      {state.user?.username}
                    </span>
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
                  <button onClick={toggleLoginDropdown} className="rounded-lg p-2 text-gray-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
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

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="inline-flex items-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 focus:outline-none lg:hidden"
              >
                <span className="sr-only">Open main menu</span>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} w-full lg:hidden`}>
              <ul className="mt-4 flex flex-col space-y-2 pb-4">
                <li>
                  <Link
                    to="/"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/category"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Explore Plants
                  </Link>
                </li>
                <li>
                  <Link
                    to="/plantcare"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Plant Care
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    About
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

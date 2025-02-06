import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BarChart3, Home, Users, ShoppingBag, Settings, LogOut, Search, Bell, Menu, X, Cloud, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import Plants from './Plants';
import AddPlant from './components/addPlant/AddPlantDemo';
import UsersAdmin from './UsersAdmin'; 
import AddUser from './components/addPlant/AddUser';

const Admin = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { weather, loading, error } = useWeather();
  const location = useLocation();

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 bg-gray-600 transition-opacity lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform border-r border-gray-200 bg-white transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 p-1 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex h-16 items-center border-b border-gray-200 px-6">
            <span className="text-xl font-bold">GreenCorner</span>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <Link
              to="/admin"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin'
                  ? 'bg-[#1c3035] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </Link>
            <Link
              to="/admin/analytics"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/analytics'
                  ? 'bg-[#1c3035] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </Link>
            <Link
              to="/admin/users"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/users'
                  ? 'bg-[#1c3035] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Users className="mr-3 h-5 w-5" />
              Users
            </Link>
            <Link
              to="/admin/products"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/products'
                  ? 'bg-[#1c3035] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              Products
            </Link>
            <Link
              to="/admin/add-plant"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/add-plant'
                  ? 'bg-[#1c3035] text-white'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Plus className="mr-3 h-5 w-5" />
              Add Plant
            </Link>
          </nav>

          {/* Tools Section */}
          <div className="border-t border-gray-200 p-4">
            <h3 className="mb-2 px-4 text-xs font-semibold text-gray-500 uppercase">Tools</h3>
            <Link
              to="/admin/settings"
              className="flex items-center rounded-lg px-4 py-2.5 font-medium text-gray-600 hover:bg-gray-50"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
            <button className="mt-1 flex w-full items-center rounded-lg px-4 py-2.5 font-medium text-gray-600 hover:bg-gray-50">
              <LogOut className="mr-3 h-5 w-5" />
              Log out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 lg:pl-64">
        {/* Header */}
        <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            {/* Mobile menu button */}
            <button className="p-2 lg:hidden" onClick={() => setIsSidebarOpen(true)}>
              <Menu className="h-6 w-6" />
            </button>

            <h1 className="text-xl font-semibold">Welcome Back, Admin!</h1>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="relative hidden sm:block">
                <Search className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="h-10 rounded-full border-none bg-gray-50 pr-4 pl-10 focus:ring-2 focus:ring-gray-200"
                />
              </div>
              <button className="relative rounded-full p-2 hover:bg-gray-50">
                <Bell className="h-5 w-5 text-gray-600" />
                <span className="absolute top-1.5 right-1.5 h-2.5 w-2.5 rounded-full bg-red-500 ring-2 ring-white"></span>
              </button>
              <img
                src="https://ui-avatars.com/api/?name=Admin&background=random"
                alt="Admin"
                className="h-9 w-9 rounded-full"
              />
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* Stats Cards */}
                  <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                    {/* Weather Card */}
                    <div className="rounded-xl bg-sky-50 p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-600">Weather</h3>
                        <Cloud className="h-5 w-5 text-sky-500" />
                      </div>
                      {loading ? (
                        <p className="mt-2 text-sm text-gray-500">Loading weather...</p>
                      ) : error ? (
                        <p className="mt-2 text-sm text-red-500">Failed to load weather</p>
                      ) : (
                        <>
                          <div className="mt-2 flex items-baseline">
                            <p className="text-3xl font-bold">
                              {weather?.current?.temperature_2m}°C
                            </p>
                            <span className="ml-2 text-sm font-medium text-gray-600">
                              {weather?.current?.wind_speed_10m} km/h
                            </span>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">Current conditions</p>
                        </>
                      )}
                    </div>

                    {/* Existing Cards */}
                    <div className="rounded-xl bg-blue-50 p-6">
                      <h3 className="text-sm font-medium text-gray-600">Total Customers</h3>
                      <div className="mt-2 flex items-baseline">
                        <p className="text-3xl font-bold">307.48K</p>
                        <span className="ml-2 text-sm font-medium text-green-600">+30%</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">This month</p>
                    </div>

                    <div className="rounded-xl bg-green-50 p-6">
                      <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                      <div className="mt-2 flex items-baseline">
                        <p className="text-3xl font-bold">$30.58K</p>
                        <span className="ml-2 text-sm font-medium text-red-600">-15%</span>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">This month</p>
                    </div>
                  </div>

                  {/* Recent Orders */}
                  <div className="mt-6 sm:mt-8">
                    <div className="mb-4 flex items-center justify-between px-2 sm:px-0">
                      <h2 className="text-lg font-semibold">Recent Orders</h2>
                      <button className="text-sm font-medium text-blue-600 hover:text-blue-700">
                        See all
                      </button>
                    </div>
                    <div className="overflow-x-auto">
                      <div className="inline-block min-w-full align-middle">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Order ID
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Customer
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Product
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Amount
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                                Status
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            {/* Add your order rows here */}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </>
              }
            />
            <Route path="/products" element={<Plants />} />
            <Route path="/add-plant" element={<AddPlant />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/users" element={<UsersAdmin />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;
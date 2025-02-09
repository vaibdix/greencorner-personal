import React, { useState, useContext, useEffect } from 'react';
import { context } from '../../store/AppContext';
import Skeleton from 'react-loading-skeleton';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Home,
  Users,
  ShoppingBag,
  Settings,
  LogOut,
  Search,
  Bell,
  Menu,
  X,
  Cloud,
  Plus,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWeather } from '../../hooks/useWeather';
import Plants from './Plants';
import AddPlant from './components/addPlant/AddPlantDemo';
import UsersAdmin from './UsersAdmin';
import AddUser from './components/addPlant/AddUser';
import Analytics from './Analytics';
import { api } from '../../store/context/api';
import { ACTIONS } from '../../store/context/actions';
import logo from '../../assets/svg/logo.svg';
import { User } from 'lucide-react';
import { IndianRupee } from 'lucide-react';
import { Suspense } from 'react';

const Admin = () => {
  // Update the context destructuring to include dispatch
  const { state, logout, dispatch } = useContext(context);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { weather, loading, error } = useWeather();
  const location = useLocation();
  const navigate = useNavigate();

  // Add useEffect to fetch users
  useEffect(() => {
    // Redirect to login if not authenticated or not admin
    if (!state.user || state.user.role !== 'admin') {
      navigate('/admin/signin');
      return;
    }

    // Fetch users only if authenticated as admin
    const fetchUsers = async () => {
      try {
        const response = await api.getUsers();
        dispatch({ type: ACTIONS.SET_USERS, payload: response.data });
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [state.user, navigate, dispatch]);

  const handleLogout = () => {
    logout();
    navigate('/admin/signin', { replace: true });
  };

  return (
    <div className="flex min-h-screen bg-[#CACCE2]/40">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 bg-gray-600 transition-opacity lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen w-64 transform border-r border-gray-700 bg-[#161616] transition-transform duration-200 ease-in-out lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Close button for mobile */}
          <button
            className="absolute top-4 right-4 p-1 text-white lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>

          {/* Logo */}
          <div className="flex h-16 items-center border-b border-gray-700 px-6">
            <img src={logo} alt="" />

            <Link to="/admin" className="ml-5 text-xl font-bold text-white hover:text-gray-200">
              GreenCorner
            </Link>
          </div>

          {/* Main Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <Link
              to="/admin"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin'
                  ? 'bg-white text-[#000]'
                  : 'text-gray-200 hover:bg-[#CACCE2] hover:text-[#000]'
              }`}
            >
              <Home className="mr-3 h-5 w-5" />
              Home
            </Link>
            <Link
              to="/admin/analytics"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/analytics'
                  ? 'bg-white text-[#000]'
                  : 'text-gray-200 hover:bg-[#CACCE2] hover:text-[#000]'
              }`}
            >
              <BarChart3 className="mr-3 h-5 w-5" />
              Analytics
            </Link>
            <Link
              to="/admin/users"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/users'
                  ? 'bg-white text-[#000]'
                  : 'text-gray-200 hover:bg-[#CACCE2] hover:text-[#000]'
              }`}
            >
              <Users className="mr-3 h-5 w-5" />
              Users
            </Link>
            <Link
              to="/admin/products"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/products'
                  ? 'bg-white text-[#000]'
                  : 'text-gray-200 hover:bg-[#CACCE2] hover:text-[#000]'
              }`}
            >
              <ShoppingBag className="mr-3 h-5 w-5" />
              Products
            </Link>
            <Link
              to="/admin/add-plant"
              className={`flex items-center rounded-lg px-4 py-2.5 font-medium ${
                location.pathname === '/admin/add-plant'
                  ? 'bg-white text-[#000]'
                  : 'text-gray-200 hover:bg-[#CACCE2] hover:text-[#000]'
              }`}
            >
              <Plus className="mr-3 h-5 w-5" />
              Add Plant
            </Link>
          </nav>

          {/* Tools Section */}
          <div className="border-t border-gray-700 p-4">
            <h3 className="mb-2 px-4 text-xs font-semibold text-gray-400 uppercase">Tools</h3>
            <Link
              to="/admin/settings"
              className="flex items-center rounded-lg px-4 py-2.5 font-medium text-gray-200 hover:bg-gray-700"
            >
              <Settings className="mr-3 h-5 w-5" />
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="mt-1 flex w-full items-center rounded-lg px-4 py-2.5 font-medium text-gray-200 hover:bg-gray-700"
            >
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

            <h1 className="text-xl font-semibold">
              Welcome Back, {state.user?.username || 'Admin'}!
            </h1>
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
              <div className="relative">
                <button
                  onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                  className="flex items-center"
                >
                  {state.user?.picture ? (
                    <img
                      src={state.user.picture}
                      alt={state.user.username}
                      className="h-9 w-9 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#000] text-white">
                      {state.user?.username?.charAt(0).toUpperCase() || 'A'}
                    </div>
                  )}
                </button>

                {isProfileDropdownOpen && (
                  <div className="ring-opacity-5 absolute right-0 mt-2 w-48 rounded-md bg-white py-1 ring-1 shadow-lg ring-black">
                    <div className="px-4 py-2 text-sm text-gray-700">
                      {state.user?.username || 'Admin'}
                    </div>
                    <hr className="my-1" />
                    <button
                      onClick={handleLogout}
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6">
          <Routes>
            <Route
              path="/"
              element={
                <Suspense
                  fallback={
                    <div className="mb-5 rounded-md bg-white p-5">
                      <div className="mb-6">
                        <Skeleton height={32} width={200} />
                      </div>
                      <div className="mb-5 grid gap-4 rounded-md sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="rounded-xl p-6">
                            <div className="mb-4 flex items-center justify-between">
                              <Skeleton height={20} width={100} />
                              <Skeleton height={20} width={20} circle />
                            </div>
                            <Skeleton height={40} width={150} />
                            <Skeleton height={20} width={100} className="mt-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  }
                >
                  <>
                    <div className="mb-5 rounded-md bg-white p-5">
                      <div className="mb-6">
                        <h1 className="text-xl font-semibold">User Dashboard</h1>
                      </div>

                      {/* Stats Cards */}
                      <div className="mb-5 grid gap-4 rounded-md sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
                        {/* Weather Card */}
                        <div className="rounded-xl bg-sky-50 p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-600">Weather</h3>
                            <Cloud className="h-5 w-5 text-blue-800" />
                          </div>
                          {loading ? (
                            <div className="mt-2">
                              <Skeleton height={50} width={100} />
                              <Skeleton height={30} width={150} className="mt-2" />
                            </div>
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

                        {/* New Users Count Card */}
                        <div className="rounded-xl bg-purple-50 p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-600">Total Users</h3>
                            <User className="h-5 w-5 text-purple-800" />
                          </div>
                          {loading ? (
                            <div className="mt-2">
                              <Skeleton height={30} width={200} />
                              <Skeleton height={20} width={100} className="mt-2" />
                            </div>
                          ) : (
                            <div className="mt-2 flex items-baseline">
                              <p className="text-3xl font-bold">{state.users.length}</p>
                              <span className="ml-2 text-sm font-medium text-gray-600">
                                +{state.users.length > 0 ? '10%' : '0%'}
                              </span>
                            </div>
                          )}
                          <p className="mt-1 text-sm text-gray-500">Total registered users</p>
                        </div>

                        {/* Total Revenue Card */}
                        <div className="rounded-xl bg-green-50 p-6">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-medium text-gray-600">Total Revenue</h3>
                            <IndianRupee className="h-5 w-4 text-green-800" />
                          </div>
                          {loading ? (
                            <div className="mt-2">
                              <Skeleton height={30} width={150} />
                              <Skeleton height={20} width={100} className="mt-2" />
                            </div>
                          ) : (
                            <div className="mt-2 flex items-baseline">
                              <p className="text-3xl font-bold">30057</p>
                              <span className="ml-2 text-sm font-medium text-red-600">-15%</span>
                            </div>
                          )}
                          <p className="mt-1 text-sm text-gray-500">This month</p>
                        </div>
                      </div>
                    </div>
                    <Analytics />
                  </>
                </Suspense>
              }
            />
            <Route
              path="/analytics"
              element={
                <Suspense fallback={<Skeleton count={5} />}>
                  <Analytics />
                </Suspense>
              }
            />
            <Route
              path="/products"
              element={
                <Suspense fallback={<Skeleton count={5} />}>
                  <Plants />
                </Suspense>
              }
            />
            <Route
              path="/add-plant"
              element={
                <Suspense fallback={<Skeleton count={5} />}>
                  <AddPlant />
                </Suspense>
              }
            />
            <Route
              path="/add-user"
              element={
                <Suspense fallback={<Skeleton count={5} />}>
                  <AddUser />
                </Suspense>
              }
            />
            <Route
              path="/users"
              element={
                <Suspense fallback={<Skeleton count={5} />}>
                  <UsersAdmin />
                </Suspense>
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Admin;

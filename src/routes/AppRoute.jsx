// src/routes/AppRoute.jsx
import { lazy } from 'react';

import { createBrowserRouter } from 'react-router-dom';
import Home from '../features/home/Home';
import SignIn from '../features/Auth/SignIn';
import SignUp from '../features/Auth/SignUp';
import CateFilter from '../features/cateFilter/CateFilter';
import Product from '../features/product/Product';
import MainLayout from '../components/layout/MainLayout'; // Import MainLayout
import NotFound from '../pages/notFound/NotFound';
import Cart from '../features/cart/Cart';
import Checkout from '../features/checkout/Checkout';
import Wishlist from '../features/Wishlist/Wishlist';
// import AddPlant from '../../features/admin/components/addPlant/AddPlant';
import AddPlant from '../features/admin/components/addPlant/AddPlantDemo';
import OrderConfirmation from '../features/checkout/OrderConfirmation';

const About = lazy(() => import('../pages/about/About'));
const PlantCare = lazy(() => import('../pages/plantCare/PlantCare'));
import OrderSummary from '../features/orderSummary/OrderSummary';
import Profile from '../components/layout/Header/Profile';
import SeeAllUsers from '../features/admin/components/addPlant/SeeAllUsers';

// admin routes
import Admin from '../features/admin/Admin';
import AdminSettings from '../features/admin/components/Settings';
import Plants from '../features/admin/Plants';
import AddUser from '../features/admin/components/addPlant/AddUser';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category',
        element: <CateFilter />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: '/signin',
        element: <SignIn />,
      },
      {
        path: '/signup',
        element: <SignUp />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/plantcare',
        element: <PlantCare />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/checkout',
        element: <Checkout />,
      },
      {
        path: '/wishlist',
        element: <Wishlist />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: '/addnewplant',
        element: <AddPlant />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/order-confirmation',
        element: <OrderConfirmation />,
      },
      {
        path: 'seeallusers',
        element: <SeeAllUsers />,
      }
    ],
  },
  // Add new admin routes
  {
    path: '/admin',
    element: <Admin />,
    children: [
      {
        path: '',
        element: <Admin />,
      },
      {
        path: 'users',
        element: <SeeAllUsers />,
      },
      {
        path: 'products',
        element: <Plants />,
      },
      {
        path: 'add-plant',
        element: <AddPlant />,
      },
      {
        path: 'settings',
        element: <AdminSettings />,
      },
      {
        path: '/admin/add-user',
        element: <AddUser />
      }
    ],
  },
  {
    path: '/ordersummary',
    element: <OrderSummary />,
  },
]);

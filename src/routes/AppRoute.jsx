// import { createBrowserRouter } from 'react-router-dom';
// import Home from '../pages/Home/Home';
// import SignIn from '../pages/Auth/SignIn';
// import SignUp from '../pages/Auth/SignUp';
// import CateFilter from '../pages/CateFilter/CateFilter';
// import Product from '../pages/Product/Product';

// export const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/signin',
//     element: <SignIn />,
//   },
//   {
//     path: '/signup',
//     element: <SignUp />,
//   },
//   {
//     path: '/category',
//     element: <CateFilter />,
//   },
//   {
//     path: '/product',
//     element: <Product />
//   }

// ]);

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

const About = lazy(() => import('../pages/about/About'));
const PlantCare = lazy(() => import('../pages/plantCare/PlantCare'));
import OrderSummary from '../features/orderSummary/OrderSummary';
import Profile from '../components/layout/Header/Profile';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // Use MainLayout as the wrapper
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
    ],
  },
  {
    path: '/ordersummary',
    element: <OrderSummary />,
  },
]);

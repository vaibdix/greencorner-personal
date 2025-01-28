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
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import CateFilter from '../pages/CateFilter/CateFilter';
import Product from '../pages/Product/Product';
import MainLayout from '../../layouts/MainLayout'; // Import MainLayout
import NotFound from '../pages/NotFound/NotFound';
import ProductDemo from '../pages/Product/ProductDemo';
import Cart from '../pages/Cart/Cart';
import PlantCare from '../pages/PlantCare/PlantCare';
import About from '../pages/About/About';
import Checkout from '../pages/checkout/Checkout';
import Wishlist from '../pages/Wishlist/Wishlist';
import AddPlant from '../pages/AddPlant/AddPlant';

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
      }
    ],
  },
]);

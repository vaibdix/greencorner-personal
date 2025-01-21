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
        path: '/product',
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
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/productdemo',
    element: <ProductDemo />,
  },


]);

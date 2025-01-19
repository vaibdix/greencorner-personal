import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home/Home';
import SignIn from '../pages/Auth/SignIn';
import SignUp from '../pages/Auth/SignUp';
import CateFilter from '../pages/CateFilter/CateFilter';
import Product from '../pages/Product/Product';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: '/category',
    element: <CateFilter />,
  },
  {
    path: '/product',
    element: <Product />
  }

]);

// import './App.css';
// import SignIn from './components/pages/Auth/SignIn';
// import SignUp from './components/pages/Auth/SignUp';
// import Card from './components/pages/Card';
// import Footer from './components/pages/Footer';
// import Header from './components/pages/Header/Header';
// import Hero from './components/pages/Hero/Hero';
// import InfiniteScrollComponent from './components/pages/InfiniteScrollText';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter

// function App() {
//   return (
//     <Router>
//       <Header />
//       <SignUp />
//       <SignIn />
//       {/* <Hero /> */}
//       {/* <InfiniteScrollComponent /> */}
//       {/* <Card /> */}
//       {/* <Footer /> */}
//     </Router>
//   );
// }

// export default App;







// import './App.css';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
// import SignIn from './components/pages/Auth/SignIn';
// import SignUp from './components/pages/Auth/SignUp';
// import Card from './components/pages/Card';
// import Footer from './components/pages/Footer/Footer';
// import Header from './components/pages/Header/Header';
// import Hero from './components/pages/Hero/Hero';
// import Product from './components/pages/Product/Product';
// import AppContext  from './components/context/AppContext';

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: '/',
//       element: (
//         <>
//           <Header />
//           <Hero />
//           <Card />
//           <Outlet />
//           <Product />
//           <Footer />
//         </>
//       ),
//       children: [
//         {
//           path: '/signin',
//           element: <SignIn />,
//         },
//         {
//           path: '/signup',
//           element: <SignUp />,
//         },
//         // More routes can be added as necessary
//       ],
//     },
//   ]);

//   return (
//     <AppContext>
//       <RouterProvider router={router} />
//     </AppContext>
//   );
// }

// export default App;




import AppContext from './components/context/AppContext'
import { RouterProvider } from 'react-router-dom'
import { router } from './components/routes/AppRoute'

const App = () => {
  return (
    <AppContext>
      <RouterProvider router={router} />
    </AppContext>

  )
}

export default App
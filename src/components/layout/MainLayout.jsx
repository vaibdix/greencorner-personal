// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;

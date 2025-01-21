// src/layouts/MainLayout.jsx
import { Outlet } from 'react-router-dom';
import Header from '../components/pages/Header/Header';
import Footer from '../components/pages/Footer/Footer';

const MainLayout = () => {
  return (
    <div>
      <Header /> {/* Always show the header */}
      <main>
        <Outlet /> {/* This will render the content of each route */}
      </main>
      <Footer /> {/* Always show the footer */}
    </div>
  );
};

export default MainLayout;

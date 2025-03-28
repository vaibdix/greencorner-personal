import { useContext } from 'react';
import { context } from '../../context/AppContext';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import NewsLetter from '../NewsLetter/NewsLetter';
import CateFilter from '../CateFilter/CateFilter';
import HomeCategory from '../HomeCategory/HomeCategory';
import CardFive from '../CardFive';
import CardTen from '../CardTen';

const Home = () => {
  const plants = useContext(context);
  console.log(plants);
  return (
    <div>
      <Header />
      <Hero />
      <CardFive />
      <HomeCategory />

      {/* <Outlet /> */}
      <CardTen />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;

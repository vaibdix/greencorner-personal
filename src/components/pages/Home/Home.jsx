import { useContext } from 'react';
import { context } from '../../context/AppContext';
import Hero from '../Hero/Hero';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Card from '../Card';
import Footer from '../Footer/Footer';

const Home = () => {
  const plants = useContext(context);
  console.log(plants);
  return (
    <div>
      <Header />
      <Hero />
      <Card />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

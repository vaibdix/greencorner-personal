// src/pages/Home/Home.jsx
import Hero from './components/hero/Hero';
import CardFive from './components/cards/CardFive';
import CardTen from './components/cards/CardTen';
import NewsLetter from './components/newsLetter/NewsLetter';
import CouponAdvertise from './components/couponAdvertise/CouponAdvertise';

const Home = () => {
  return (
    <div>
      <Hero />
      <CardFive />
      {/* <HomeCategory /> */}
      <CouponAdvertise />
      <CardTen />
      <NewsLetter />
    </div>
  );
};

export default Home;

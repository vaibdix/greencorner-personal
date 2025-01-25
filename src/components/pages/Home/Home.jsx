
// src/pages/Home/Home.jsx
import Hero from '../Hero/Hero';
import CardFive from '../CardFive';
import CardTen from '../CardTen';
import NewsLetter from '../NewsLetter/NewsLetter';
import CouponAdvertise from '../CouponAdvertise/CouponAdvertise';

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

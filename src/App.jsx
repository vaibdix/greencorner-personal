import './App.css';
import SignIn from './components/pages/Auth/SignIn';
import SignUp from './components/pages/Auth/SignUp';
import Card from './components/pages/Card';
import Footer from './components/pages/Footer';
import Header from './components/pages/Header/Header';
import Hero from './components/pages/Hero/Hero';
import InfiniteScrollComponent from './components/pages/InfiniteScrollText';

function App() {
  return (
    <>
      <Header />
      <SignUp />
      <SignIn />
      {/* <Hero /> */}
      {/* <InfiniteScrollComponent /> */}
      {/* <Card /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;

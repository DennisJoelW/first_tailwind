import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CryptoToken from './components/CryptoToken';
import Trade from './components/Trade';
import CryptoTop from "./components/CryptoTop";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero />
        <CryptoToken />
        <Trade />
        <CryptoTop />
        <Newsletter />
        <Footer />
    </div>
  );
}

export default App;

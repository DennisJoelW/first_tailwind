import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CryptoToken from './components/CryptoToken';
import Trade from './components/Trade';
import CryptoTop from "./components/CryptoTop";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero />
        <CryptoToken />
        <Trade />
        <CryptoTop />
    </div>
  );
}

export default App;

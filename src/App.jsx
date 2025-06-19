import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import ProductCarousel from "./components/ProductCarousel";
import PromoBanner from "./components/PromoBanner";
import ProductListing from "./components/ProductListing";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="">
              <HeroSection />
              <FeatureSection />
              <ProductCarousel />
              <PromoBanner />
              <ProductListing />
              <FAQSection />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

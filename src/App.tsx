import { useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BeagleGuide from "./pages/BeagleGuide";
import PuppyCare from "./pages/PuppyCare";
import Training from "./pages/Training";
import Food from "./pages/Food";
import Health from "./pages/Health";
import Grooming from "./pages/Grooming";
import AboutBeagles from "./pages/AboutBeagles";
import { About, EditorialPolicy, HowWeRecommend, Contact, Privacy, Terms, Disclaimer, Sitemap, NotFound } from "./pages/Support";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/beagle-guide" element={<BeagleGuide />} />
            <Route path="/puppy-care" element={<PuppyCare />} />
            <Route path="/training" element={<Training />} />
            <Route path="/food-nutrition" element={<Food />} />
            <Route path="/food" element={<Food />} />
            <Route path="/health" element={<Health />} />
            <Route path="/grooming-gear" element={<Grooming />} />
            <Route path="/about-beagles" element={<AboutBeagles />} />
            <Route path="/about" element={<About />} />
            <Route path="/editorial-policy" element={<EditorialPolicy />} />
            <Route path="/how-we-recommend" element={<HowWeRecommend />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </HashRouter>
  );
}

import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPages";
import WishlistPage from "./pages/WishlistPage";
import GalleryPage from "./pages/GalleryPages";
import BlogPage from "./pages/BlogPage";
import TheEliteShowcase from "./pages/InformationEvent/TheEliteShowcase";
import WakuWakuFestival from "./pages/InformationEvent/WakuWakuFestival";
import PestaBebasBerselancar from "./pages/InformationEvent/PestaBebasBerselancar";
import TheSoundsProject from "./pages/InformationEvent/TheSoundsProject";
import PekanRayaJakarta from "./pages/InformationEvent/PekanRayaJakarta";
import JDMFestBandung from "./pages/InformationEvent/JDMFestBandung";
import Jakarta from "./pages/Places/jakarta";
import Bogor from "./pages/Places/bogor";
import PlaceDetails from "./pages/PlaceDetails";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutPage />}/>
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/TheEliteShowcase" element={<TheEliteShowcase />} />
          <Route path="/WakuWakuFestival" element={<WakuWakuFestival />} />
          <Route
            path="/PestaBebasBerselancar"
            element={<PestaBebasBerselancar />}
          />
          <Route path="/TheSoundsProject" element={<TheSoundsProject />} />
          <Route path="/PekanRayaJakarta" element={<PekanRayaJakarta />} />
          <Route path="/JDMFestBandung" element={<JDMFestBandung />} />
          <Route path="/Jakarta" element={<Jakarta />} />
          <Route path="/Bogor" element={<Bogor />} />
          <Route path="/places/:id" element={<PlaceDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

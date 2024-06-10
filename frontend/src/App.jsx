import "./App.css";
import React, { useState, useEffect } from "react";
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
import Depok from "./pages/Places/depok";
import Tangerang from "./pages/Places/tangerang";
import Bekasi from "./pages/Places/bekasi";
import Bandung from "./pages/Places/bandung";
import PlaceDetails from "./pages/PlaceDetails";
import NavbarCom from "./components/Home/navbar/navbar";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import KategoriTempat from "./pages/Places/KategoriTempat-Pages";
import Blog1 from "./pages/Blog/Blog_1";
import Blog2 from "./pages/Blog/Blog_2";
import Blog3 from "./pages/Blog/Blog_3";
import Blog4 from "./pages/Blog/Blog_4";
import Blog5 from "./pages/Blog/Blog_5";
import Blog6 from "./pages/Blog/Blog_6";
import Blog7 from "./pages/Blog/Blog_7";
import Blog8 from "./pages/Blog/Blog_8";
import Blog9 from "./pages/Blog/Blog_9";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
    localStorage.setItem("user", JSON.stringify(user));
  }, [isLoggedIn, user]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
  };

  return (
    <div>
      <Router>
        <NavbarCom
          isLoggedIn={isLoggedIn}
          user={user}
          onLogout={handleLogout}
        />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
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
          <Route path="/Depok" element={<Depok />} />
          <Route path="/Tangerang" element={<Tangerang />} />
          <Route path="/Bekasi" element={<Bekasi />} />
          <Route path="/Bandung" element={<Bandung />} />
          <Route path="/blog/1" element={<Blog1 />} />
          <Route path="/blog/2" element={<Blog2 />} />
          <Route path="/blog/3" element={<Blog3 />} />
          <Route path="/blog/4" element={<Blog4 />} />
          <Route path="/blog/5" element={<Blog5 />} />
          <Route path="/blog/6" element={<Blog6 />} />
          <Route path="/blog/7" element={<Blog7 />} />
          <Route path="/blog/8" element={<Blog8 />} />
          <Route path="/blog/9" element={<Blog9 />} />
          <Route
            path="/places/:id"
            element={<PlaceDetails user={user} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/category/:categoryId" element={<KategoriTempat />} />
          <Route
            path="/category/:categoryId/location/:locationId"
            element={<KategoriTempat />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

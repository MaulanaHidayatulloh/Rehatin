import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPages";
import WishlistPage from "./pages/WishlistPage";
import GalleryPage from "./pages/GalleryPages";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/aboutUs" element={<AboutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPages";
import WishlistPage from "./pages/WishlistPage";
import GalleryPage from "./pages/GalleryPages";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/aboutUs" Component={AboutPage} />
        <Route path="/wishlist" Component={WishlistPage} />
        <Route path="/gallery" Component={GalleryPage} />
        <Route path="/blog" Component={BlogPage} />
      </Routes>
    </div>
  );
}

export default App;

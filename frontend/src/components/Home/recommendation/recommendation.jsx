import React, { useState } from "react";
import "./recommendation.css";

const cityRecommendations = {
  Jakarta: [
    {
      imgSrc: "../src/assets/Home/recommended/HappyHouse.png",
      title: "Happy House",
      rating: 5,
      url: "/aboutUs",
    },
    {
      imgSrc: "../src/assets/Home/recommended/Tanamera.png",
      title: "Tanamera Coffee",
      rating: 5,
      url: "https://www.google.com/maps/place/Tanamera+Coffee",
    },
    {
      imgSrc: "../src/assets/Home/recommended/Djournal.png",
      title: "D'journal House",
      rating: 5,
      url: "https://www.google.com/maps/place/Djournal+House",
    },
    {
      imgSrc: "../src/assets/Home/recommended/ombe.png",
      title: "Ombe Coffee",
      rating: 5,
      url: "https://www.google.com/maps/place/Ombe+Coffee",
    },
    {
      imgSrc: "../src/assets/Home/recommended/common.png",
      title: "Common Grounds",
      rating: 5,
      url: "https://www.google.com/maps/place/Common+Grounds",
    },
  ],
  Bogor: [
    {
      imgSrc: "../src/assets/Home/recommended/BogorCafe1.png",
      title: "Bogor Cafe 1",
      rating: 4,
      url: "https://www.google.com/maps/place/Bogor+Cafe+1",
    },
    {
      imgSrc: "../src/assets/Home/recommended/BogorCafe2.png",
      title: "Bogor Cafe 2",
      rating: 5,
      url: "https://www.google.com/maps/place/Bogor+Cafe+2",
    },
    {
      imgSrc: "../src/assets/Home/recommended/BogorCafe3.png",
      title: "Bogor Cafe 3",
      rating: 4,
      url: "https://www.google.com/maps/place/Bogor+Cafe+3",
    },
  ],
  Depok: [
    {
      imgSrc: "../src/assets/Home/recommended/DepokCafe1.png",
      title: "Depok Cafe 1",
      rating: 5,
      url: "https://www.google.com/maps/place/Depok+Cafe+1",
    },
    {
      imgSrc: "../src/assets/Home/recommended/DepokCafe2.png",
      title: "Depok Cafe 2",
      rating: 3,
      url: "https://www.google.com/maps/place/Depok+Cafe+2",
    },
    {
      imgSrc: "../src/assets/Home/recommended/DepokCafe3.png",
      title: "Depok Cafe 3",
      rating: 4,
      url: "https://www.google.com/maps/place/Depok+Cafe+3",
    },
  ],
  Tangerang: [
    {
      imgSrc: "../src/assets/Home/recommended/TangerangCafe1.png",
      title: "Tangerang Cafe 1",
      rating: 4,
      url: "https://www.google.com/maps/place/Tangerang+Cafe+1",
    },
    {
      imgSrc: "../src/assets/Home/recommended/TangerangCafe2.png",
      title: "Tangerang Cafe 2",
      rating: 5,
      url: "https://www.google.com/maps/place/Tangerang+Cafe+2",
    },
  ],
  Bekasi: [
    {
      imgSrc: "../src/assets/Home/recommended/BekasiCafe1.png",
      title: "Bekasi Cafe 1",
      rating: 4,
      url: "https://www.google.com/maps/place/Bekasi+Cafe+1",
    },
    {
      imgSrc: "../src/assets/Home/recommended/BekasiCafe2.png",
      title: "Bekasi Cafe 2",
      rating: 5,
      url: "https://www.google.com/maps/place/Bekasi+Cafe+2",
    },
  ],
  Bandung: [
    {
      imgSrc: "../src/assets/Home/recommended/BandungCafe1.png",
      title: "Bandung Cafe 1",
      rating: 5,
      url: "https://www.google.com/maps/place/Bandung+Cafe+1",
    },
    {
      imgSrc: "../src/assets/Home/recommended/BandungCafe2.png",
      title: "Bandung Cafe 2",
      rating: 4,
      url: "https://www.google.com/maps/place/Bandung+Cafe+2",
    },
    {
      imgSrc: "../src/assets/Home/recommended/BandungCafe3.png",
      title: "Bandung Cafe 3",
      rating: 5,
      url: "https://www.google.com/maps/place/Bandung+Cafe+3",
    },
  ],
};

const Recommendation = () => {
  const [activeCity, setActiveCity] = useState("Jakarta");

  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="recommendation-section">
      <h2 className="recommendation-title">Special recommended for you</h2>
      <div className="recommendation-tabs">
        {Object.keys(cityRecommendations).map((city) => (
          <button
            key={city}
            className={`recommendation-tab ${
              activeCity === city ? "active" : ""
            }`}
            onClick={() => setActiveCity(city)}
          >
            {city}
          </button>
        ))}
      </div>
      <div className="recommendation-list">
        {cityRecommendations[activeCity].map((rec, index) => (
          <div
            className="recommendation-card"
            key={index}
            onClick={() => handleCardClick(rec.url)}
            style={{ cursor: "pointer" }}
          >
            <img src={rec.imgSrc} alt={rec.title} />
            <div className="recommendation-card-caption">
              <h3>{rec.title}</h3>
              <p>{"★".repeat(rec.rating)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;

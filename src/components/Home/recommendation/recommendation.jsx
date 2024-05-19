import React from "react";
import "./recommendation.css";

const recommendations = [
  {
    imgSrc: "../src/assets/Home/recommended/HappyHouse.png",
    title: "Happy House",
    rating: 5,
  },
  {
    imgSrc: "../src/assets/Home/recommended/Tanamera.png",
    title: "Tanamera Coffee",
    rating: 5,
  },
  {
    imgSrc: "../src/assets/Home/recommended/Djournal.png",
    title: "D'journal House",
    rating: 5,
  },
  {
    imgSrc: "../src/assets/Home/recommended/ombe.png",
    title: "Ombe Coffee",
    rating: 5,
  },
  {
    imgSrc: "../src/assets/Home/recommended/common.png",
    title: "Common Grounds",
    rating: 5,
  },
];

const Recommendation = () => {
  return (
    <div className="recommendation-section">
      <h2 className="recommendation-title">Special recommended for you</h2>
      <div className="recommendation-tabs">
        <button className="recommendation-tab active">Jakarta</button>
        <button className="recommendation-tab">Bogor</button>
        <button className="recommendation-tab">Depok</button>
        <button className="recommendation-tab">Tangerang</button>
        <button className="recommendation-tab">Bekasi</button>
        <button className="recommendation-tab">Bandung</button>
      </div>
      <div className="recommendation-list">
        {recommendations.map((rec, index) => (
          <div className="recommendation-card" key={index}>
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

import React from "react";
import "./note-style.css";

const noteRecommendation = [
  {
    imgSrc: "../src/assets/Home/note/note-1.png",
    title:
      "Eksplorasi Tempat Hangout: Panduan Nongkrong Asyik di Kota-Kota Besar",
    url: "#",
    publisher: "Nongkrong Kuy",
    time: "3 Min read",
  },
  {
    imgSrc: "../src/assets/Home/note/note-2.png",
    title: "Travel dan Hangout: Kombinasi Seru Untuk Liburan Akhir Pekan",
    url: "#",
    publisher: "Nongkrong Kuy",
    time: "3 Min read",
  },
  {
    imgSrc: "../src/assets/Home/note/note-3.png",
    title:
      "Panduan Hangout Untuk Traveler: Menemukan Tempat Nongkrong Ideal di Setiap Destinasi",
    url: "#",
    publisher: "Nongkrong Kuy",
    time: "3 Min read",
  },
];

const Note = () => {
  const handleCardClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="note-section">
      <div className="note-title">
        <img src="../src/assets/Home/note/note-icon.svg" alt="" />
        <h2>A must-note holiday idea!</h2>
      </div>

      <div className="note-list">
        {noteRecommendation.map((rec, index) => (
          <div
            className="note-card"
            key={index}
            onClick={() => handleCardClick(rec.url)}
            style={{ cursor: "pointer" }}
          >
            <img src={rec.imgSrc} alt={rec.title} />
            <div className="note-card-caption">
              <h3>{rec.title}</h3>
              <p>{rec.publisher}</p>
              <p>{rec.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Note;

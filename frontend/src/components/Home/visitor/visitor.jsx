import React from "react";
import "./visitor.css";
import { StarHalf, StarFill } from "react-bootstrap-icons";

const Visitors = [
  {
    imgSrc: "../src/assets/Home/visitor/mahardika.png",
    nama: "Mahardika Abian",
    rating: 5,
    deskripsi:
      "Rehatin super membantu untuk aku, aku jadi ga bingung nyari tempat buat bawa cewek aku jalan",
    lokasi: "Jakarta Selatan",
  },
  {
    imgSrc: "../src/assets/Home/visitor/betharia.png",
    nama: "Betharia Cindy",
    rating: 5,
    deskripsi:
      "Huhu keren bangettt, rehatin pasti aku rekomendasiin ke temen-temen aku sii",
    lokasi: "Bogor",
  },
  {
    imgSrc: "../src/assets/Home/visitor/agnita.png",
    nama: "Agnita Cantika",
    rating: 5,
    deskripsi:
      "Bintang 100, aplikasi ini bikin aku jadi bisa nyiapin uang buat jalan-jalan deh, soalnya tau estimasi budget yang dikeluarin",
    lokasi: "Depok",
  },
  {
    imgSrc: "../src/assets/Home/visitor/dafa.png",
    nama: "Dafa Sadana",
    rating: 5,
    deskripsi:
      "Bagus banget, recommended buat orang-orang yang masih ragu-ragu buat nyari tempat nongkrong",
    lokasi: "Tangerang",
  },
  {
    imgSrc: "../src/assets/Home/visitor/abimanyu.png",
    nama: "Abimanyu Putra",
    rating: 5,
    deskripsi:
      "Fiturnya lumayan lengkap, aplikasinya mudah diakses gabikin bingung",
    lokasi: "Bekasi",
  },
  {
    imgSrc: "../src/assets/Home/visitor/geisha.png",
    nama: "Geisha Gania Izora",
    rating: 5,
    deskripsi: "gabisa berkata-kata pokoknya rehatin ini keren banget",
    lokasi: "Bandung",
  },
];

const Visitor = () => {
  return (
    <div className="visitor-section">
      <div className="visitor-title">
        <img src="../src/assets/Home/visitor/visitor-icon.svg" alt="" />
        <h2>Visitors say about our website</h2>
      </div>

      <div className="visitor-list">
        {Visitors.map((rec, index) => (
          <div className="visitor-card" key={index}>
            <div className="visitorCard_title">
              <p>{rec.deskripsi}</p>
            </div>
            <div className="visitor-card-caption">
              <h3>{rec.nama}</h3>
              <p>{rec.lokasi}</p>
              <p>
                {Array.from({ length: Math.floor(rec.rating) }, (_, i) => (
                  <StarFill key={i} size={17} className="star-full_visitor" />
                ))}
                {rec.rating % 1 !== 0 && (
                  <StarHalf size={17} className="star-half_visitor" />
                )}
              </p>
            </div>
            <img src={rec.imgSrc} alt={rec.name} className="visitor_profile" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Visitor;

import React from "react";
import { Link } from "react-router-dom";
import "./blogDetail.css";

const BlogPost = () => {
  return (
    <div className="blog-post">
      <div className="blog-header">
        <h2>Rehatin's Blog</h2>
        <p>Selasa, 12 May 2024 00.01</p>
      </div>
      <div className="blog-content">
        <div className="blog-isi">
          <div className="blog-image">
            <img
              src="../src/assets/Blog/cover/panduan.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>
              Panduan Hangout untuk Traveler: Menemukan Tempat Nongkrong Ideal
              di Setiap Destinasi
            </h3>
            <p style={{ color: "#000" }}>publisher: Nongkrong Kuy</p>
            <p>
              Sebagai traveler, menemukan tempat nongkrong yang ideal di setiap
              destinasi bisa menambah keseruan perjalanan Anda. Di Jakarta, Anda
              bisa memulai hari dengan menjelajahi kawasan bersejarah Kota Tua.
              Setelah puas berkeliling, nikmati suasana kafe vintage seperti
              Cafe Batavia yang menawarkan nuansa kolonial dan hidangan lezat.
              Untuk pengalaman yang lebih modern, kunjungi SCBD (Sudirman
              Central Business District) di malam hari, di mana Anda bisa
              menemukan berbagai rooftop bar seperti SKYE yang menyuguhkan
              pemandangan kota yang memukau.
            </p>
            <p>
              Setelah puas berkeliling, nikmati suasana kafe vintage seperti
              Cafe Batavia yang menawarkan nuansa kolonial dan hidangan lezat.
              Untuk pengalaman yang lebih modern, kunjungi SCBD (Sudirman
              Central Business District) di malam hari, di mana Anda bisa
              menemukan berbagai rooftop bar seperti SKYE yang menyuguhkan
              pemandangan kota yang memukau.
            </p>
            <p>
              Jika Anda berada di Bandung, suasana sejuk kota ini menawarkan
              banyak tempat hangout yang asyik. Braga Street adalah tempat yang
              sempurna untuk nongkrong sore hari, dengan deretan kafe dan
              restoran yang bergaya Eropa. Cobalah mampir ke Braga Permai untuk
              menikmati kue-kue klasik dan kopi yang nikmat. Untuk pemandangan
              alam yang menenangkan, kunjungi Lereng Anteng Panoramic Coffee
              Place yang terletak di dataran tinggi, memberikan pengalaman ngopi
              dengan latar pegunungan yang indah.
            </p>
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-item">
            <Link to="/blog/1">
              <img
                src="../src/assets/Blog/sidebar/kuliner-malam.png"
                alt="10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi"
              />
              <h4>
                Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan
              </h4>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/blog/2">
              <img
                src="../src/assets/Blog/sidebar/spot.png"
                alt="5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan"
              />
              <h4>10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi</h4>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/blog/3">
              <img
                src="../src/assets/Blog/sidebar/bogor.png"
                alt="Tempat-Tempat Romantis di Depok untuk Kencan Spesial"
              />
              <h4>
                5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan
              </h4>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/blog/4">
              <img
                src="../src/assets/Blog/sidebar/tempat-depok.png"
                alt="Menemukan Akomodasi Murah dan Nyaman di Jabodetabek"
              />
              <h4>Tempat-Tempat Romantis di Depok untuk Kencan Spesial</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

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
              src="../src/assets/Blog/cover/akomodasi.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>Menemukan Akomodasi Murah dan Nyaman di Jabodetabek</h3>
            <p style={{ color: "#000" }}>publisher: love travel</p>
            <p>
              Menemukan akomodasi yang murah dan nyaman di Jabodetabek bisa
              menjadi tantangan, namun dengan sedikit riset, Anda dapat
              menemukan banyak pilihan yang sesuai dengan anggaran Anda. Salah
              satu cara terbaik adalah dengan mencari homestay atau guest house
              yang tersebar di berbagai daerah seperti Jakarta, Bogor, Depok,
              Tangerang, dan Bekasi. Homestay ini sering kali menawarkan
              pengalaman menginap yang lebih personal dan harga yang terjangkau
              dibandingkan hotel.
            </p>
            <p>
              Jika Anda mencari kenyamanan modern dengan harga yang bersahabat,
              hotel budget seperti RedDoorz, OYO, dan ZEN Rooms adalah pilihan
              yang tepat. Hotel-hotel ini memiliki standar kenyamanan yang baik,
              lokasi strategis, dan fasilitas dasar seperti Wi-Fi gratis, AC,
              dan kamar mandi dalam. Anda bisa menemukan jaringan hotel ini di
              pusat kota maupun di pinggiran Jabodetabek, memberikan
              fleksibilitas dalam memilih lokasi yang paling sesuai dengan
              rencana perjalanan Anda.
            </p>
            <p> </p>
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

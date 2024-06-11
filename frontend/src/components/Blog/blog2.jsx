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
              src="../src/assets/Blog/cover/10_spot.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi</h3>
            <p style={{ color: "#000" }}>publisher: love travel</p>
            <p>
              Jakarta, sebagai ibu kota Indonesia, menawarkan banyak tempat
              menarik yang siap mempercantik feed Instagram Anda. Salah satu
              tempat yang wajib dikunjungi adalah Kota Tua Jakarta. Dengan
              bangunan kolonial bersejarah dan suasana vintage, Anda dapat
              menangkap gambar yang penuh karakter dan cerita. Jangan lupa
              berpose di depan Museum Fatahillah atau berjalan-jalan di sekitar
              area dengan sepeda ontel.
            </p>
            <p>
              Untuk pemandangan modern dan futuristik, kunjungi SCBD (Sudirman
              Central Business District). Gedung-gedung pencakar langit dan
              lampu kota di malam hari memberikan latar belakang yang
              menakjubkan. Selain itu, Hutan Kota GBK di kompleks Gelora Bung
              Karno juga menawarkan spot hijau di tengah kota, sempurna untuk
              foto yang menunjukkan keseimbangan antara alam dan urban.
            </p>
            <p>
              Tidak ketinggalan, Taman Ismail Marzuki yang menawarkan seni dan
              budaya dalam satu tempat. Di sini, Anda bisa menemukan instalasi
              seni yang unik dan menarik untuk difoto. Sementara itu, Plaza
              Senayan dengan instalasi seni dan interior yang elegan juga
              menjadi tempat favorit para pemburu foto.
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
            <Link to="/blog/3">
              <img
                src="../src/assets/Blog/sidebar/bogor.png"
                alt="5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan"
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
                alt="Tempat-Tempat Romantis di Depok untuk Kencan Spesial"
              />
              <h4>Tempat-Tempat Romantis di Depok untuk Kencan Spesial</h4>
            </Link>
          </div>
          <div className="sidebar-item">
            <Link to="/blog/5">
              <img
                src="../src/assets/Blog/sidebar/akomodasi.png"
                alt="Menemukan Akomodasi Murah dan Nyaman di Jabodetabek"
              />
              <h4>Menemukan Akomodasi Murah dan Nyaman di Jabodetabek</h4>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

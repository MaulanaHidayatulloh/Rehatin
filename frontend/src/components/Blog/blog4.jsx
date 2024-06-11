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
              src="../src/assets/Blog/cover/depok.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>Tempat-Tempat Romantis di Depok untuk Kencan Spesial</h3>
            <p style={{ color: "#000" }}>publisher: love travel</p>
            <p>
              Depok mungkin lebih dikenal sebagai kota penyangga Jakarta, namun
              kota ini menyimpan banyak tempat romantis yang sempurna untuk
              kencan spesial. Salah satu tempat yang wajib dikunjungi adalah
              Taman Wisata Pasir Putih. Dengan danau buatan yang indah dan area
              hijau yang luas, Anda bisa menghabiskan waktu berjalan-jalan
              santai atau menikmati piknik romantis di tepi danau.
            </p>
            <p>
              Selain itu, kunjungi Kampung 99 Pepohonan yang menawarkan suasana
              pedesaan dengan pepohonan rindang dan udara segar. Tempat ini
              menyediakan pondok-pondok unik dan area berkuda yang bisa Anda
              nikmati bersama pasangan. Menghabiskan waktu di Kampung 99
              Pepohonan akan memberikan pengalaman yang berbeda dan tak
              terlupakan, jauh dari keramaian kota.
            </p>
            <p>
              Untuk pengalaman kuliner yang romantis, The Margo Hotel memiliki
              restoran dengan suasana elegan dan pemandangan kota yang menawan.
              Menikmati makan malam dengan cahaya lilin di sini akan menambah
              kesan romantis pada kencan Anda.
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

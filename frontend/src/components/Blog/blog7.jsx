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
              src="../src/assets/Blog/cover/travel.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>
              Travel dan Hangout: Kombinasi Seru untuk Liburan Akhir Pekan
            </h3>
            <p style={{ color: "#000" }}>publisher: Nongkrong Kuy</p>
            <p>
              Menghabiskan akhir pekan dengan kombinasi travel dan hangout bisa
              menjadi cara sempurna untuk melepas penat dan menciptakan momen
              berharga. Di sekitar Jabodetabek, ada banyak destinasi yang
              menawarkan pengalaman seru. Bogor, misalnya, terkenal dengan Kebun
              Raya Bogor yang hijau dan asri, cocok untuk piknik atau
              jalan-jalan santai. Setelah menjelajahi kebun raya, Anda bisa
              nongkrong di kafe-kafe unik di kawasan Taman Kencana, seperti Two
              Stories atau Kedai Kita yang menyajikan hidangan lezat dengan
              suasana nyaman.
            </p>
            <p>
              Pindah ke Jakarta, kota ini tak pernah kehabisan tempat hangout
              keren. Anda bisa memulai hari dengan mengunjungi tempat-tempat
              ikonik seperti Monas atau Museum Nasional untuk mendapatkan dosis
              sejarah dan budaya. Kemudian, lanjutkan petualangan dengan
              nongkrong di SCBD (Sudirman Central Business District), yang
              terkenal dengan deretan kafe, bar, dan restoran trendy seperti
              Lucy in the Sky atau Beer Hall. Di malam hari, rooftop bar dengan
              pemandangan kota yang gemerlap menjadi pilihan sempurna untuk
              menikmati suasana malam Jakarta.
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

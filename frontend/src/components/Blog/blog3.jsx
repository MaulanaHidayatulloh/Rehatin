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
              src="../src/assets/Blog/cover/bogor.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan</h3>
            <p style={{ color: "#000" }}>publisher: love travel</p>
            <p>
              Bogor, dengan julukan "Kota Hujan," menawarkan berbagai destinasi
              wisata alam yang memukau untuk liburan akhir pekan. Kebun Raya
              Bogor menjadi destinasi utama dengan keindahan dan keanekaragaman
              flora yang menakjubkan. Anda bisa berjalan-jalan di antara
              pohon-pohon besar, menjelajahi taman-taman tematik, atau bersantai
              di tepi danau yang tenang.
            </p>
            <p>
              Tidak jauh dari pusat kota, Curug Nangka menyuguhkan pemandangan
              air terjun yang indah dan suasana alam yang masih asri. Trekking
              menuju air terjun ini akan memberikan pengalaman petualangan yang
              seru. Sementara itu, Gunung Pancar menawarkan tempat yang sempurna
              untuk camping dan menikmati udara pegunungan yang segar. Di sini,
              Anda juga bisa berendam di pemandian air panas alami yang
              menenangkan.
            </p>
            <p>
              Untuk pengalaman yang lebih edukatif, kunjungi Taman Safari
              Indonesia di Cisarua. Tempat ini tidak hanya menawarkan kesempatan
              untuk melihat berbagai satwa dari dekat, tetapi juga berbagai
              pertunjukan menarik dan wahana bermain.
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

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
              src="../src/assets/Blog/cover/kuliner_malam.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>
              Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan
            </h3>
            <p style={{ color: "#000" }}>publisher: love travel</p>
            <p>
              Kota Tua Jakarta adalah tempat yang menawarkan lebih dari sekadar
              sejarah megah; di malam hari, kawasan ini menjadi surga bagi
              pecinta kuliner jalanan. Di bawah sinar lampu redup, Anda akan
              menemukan berbagai macam makanan yang menggugah selera. Mulai dari
              Kerak Telor yang kaya rempah dan gurih, hingga Nasi Uduk dengan
              lauk-pauk lezat yang mengenyangkan, setiap hidangan di sini
              memiliki cerita dan cita rasa yang unik.
            </p>
            <p>
              Selain makanan jalanan, Kota Tua juga memiliki kafe-kafe unik
              dengan nuansa vintage yang menarik. Di kafe-kafe ini, Anda dapat
              menikmati hidangan khas Indonesia dan internasional sambil
              merasakan suasana retro yang berbeda. Kafe-kafe ini sering menjadi
              tempat untuk pertunjukan musik live atau acara seni, menambah
              keseruan malam di Kota Tua.
            </p>
            <p>
              Tak lupa, jangan lewatkan Es Krim Ragusa yang legendaris sebagai
              penutup petualangan kuliner Anda di Kota Tua. Es krim lembut
              dengan berbagai pilihan rasa yang menggugah selera akan melengkapi
              pengalaman malam Anda di kawasan bersejarah ini.
            </p>
          </div>
        </div>

        <div className="blog-sidebar">
          <div className="sidebar-item">
            <Link to="/blog/2">
              <img
                src="../src/assets/Blog/sidebar/spot.png"
                alt="10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi"
              />
              <h4>10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi</h4>
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

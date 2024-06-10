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
              src="../src/assets/Blog/cover/eksplorasi.png"
              alt="Kuliner Malam di Kota Tua Jakarta: Surga Pecinta Makanan Jalanan"
            />
          </div>
          <div className="blog-text">
            <h3>
              Eksplorasi Tempat Hangout: Panduan Nongkrong Asyik di Kota-Kota
              Besar
            </h3>
            <p style={{ color: "#000" }}>publisher: Nongkrong Kuy</p>
            <p>
              Kota-kota besar di kawasan Jabodetabek dan Bandung menawarkan
              berbagai tempat hangout yang menarik bagi para pengunjung yang
              ingin menikmati waktu luang dengan suasana yang asyik dan
              berkesan. Dari kafe-kafe unik dengan desain interior yang
              instagramable, restoran dengan konsep rooftop yang menawarkan
              pemandangan kota yang menakjubkan, hingga taman-taman kota yang
              nyaman untuk piknik dan rekreasi, setiap sudut kota ini memiliki
              daya tarik tersendiri.
            </p>

            <p>
              Tempat-tempat seperti Sudirman Central Business District (SCBD) di
              Jakarta, kawasan Kota Tua, dan kawasan Braga di Bandung menjadi
              destinasi favorit untuk nongkrong dengan teman atau keluarga.
              Selain itu, hadirnya berbagai event dan festival yang rutin
              diadakan di kota-kota tersebut turut menambah daya tarik
              tempat-tempat hangout ini.
            </p>
            <p>
              Misalnya, di Bandung, event kreatif seperti Braga Festival dan
              Pasar Seni ITB selalu menjadi magnet bagi pengunjung. Sementara
              itu, di Jakarta, acara seperti Jakarta Fair dan berbagai pameran
              seni kontemporer di Galeri Nasional menjadi alternatif menarik
              untuk menghabiskan waktu dengan kegiatan yang berbeda. Dengan
              beragam pilihan yang tersedia, kota-kota di Jabodetabek dan
              Bandung menjanjikan pengalaman nongkrong yang seru dan tak
              terlupakan bagi siapa saja yang ingin mengeksplorasi dan menikmati
              kekayaan budaya serta hiburan lokal.
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

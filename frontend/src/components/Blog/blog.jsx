import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

const Blog = () => {
  return (
    <div className="blog">
      <h1 className="title">Rehatin's Blog</h1>
      <p className="subtitle">
        Let's find interesting tips to make your hangouts enjoyable
      </p>
      <div className="blog-container">
        <div className="blog-container-kolom">
          <div className="blog-card-1">
            <Link to="/blog/1">
              <img
                src="../src/assets/Blog/kuliner-malam.png"
                alt="Kuliner Malam di Kota Tua"
              />
              <div className="blog-card-content">
                <p className="blog-card-date">May 2024</p>
                <h2 className="blog-card-title">
                  Kuliner Malam di Kota Tua Jakarta: Surganya Pecinta Makanan
                  Jalanan
                </h2>
              </div>
              <button className="blog-card-button">Learn More</button>
            </Link>
          </div>

          <div className="Blogcard-flex">
            <div className="blog-card">
              <Link to="/blog/3">
                <img
                  src="../src/assets/Blog/5-destinasi.png"
                  alt="5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan"
                />
                <div className="blog-card-content">
                  <p className="blog-card-date">May 2024</p>
                  <h2 className="blog-card-title">
                    5 Destinasi Wisata Alam di Bogor untuk Liburan Akhir Pekan
                  </h2>
                </div>
                <button className="blog-card-button">Learn More</button>
              </Link>
            </div>

            <div className="blog-card">
              <Link to="/blog/4">
                <img
                  src="../src/assets/Blog/tempat-depok.png"
                  alt="Tempat-Tempat Romantis di Depok untuk Kencan Spesial"
                />
                <div className="blog-card-content">
                  <p className="blog-card-date">May 2024</p>
                  <h2 className="blog-card-title">
                    Tempat-Tempat Romantis di Depok untuk Kencan Spesial
                  </h2>
                </div>
                <button className="blog-card-button">Learn More</button>
              </Link>
            </div>
          </div>
        </div>

        {/* #2 */}
        <div className="blog-container-kolom">
          <div className="Blogcard-flex">
            <div className="blog-card">
              <Link to="/blog/6">
                <img
                  src="../src/assets/Blog/10-tips.png"
                  alt="10 Tips Hemat Budget Liburan di Jabodetabek"
                />
                <div className="blog-card-content">
                  <p className="blog-card-date">May 2024</p>
                  <h2 className="blog-card-title">
                    10 Tips Hemat Budget Liburan di Jabodetabek
                  </h2>
                </div>
                <button className="blog-card-button">Learn More</button>
              </Link>
            </div>

            <div className="blog-card">
              <Link to="/blog/5">
                <img
                  src="../src/assets/Blog/akomodasi.png"
                  alt="Menemukan Akomodasi Murah dan Nyaman di Jabodetabek"
                />
                <div className="blog-card-content">
                  <p className="blog-card-date">May 2024</p>
                  <h2 className="blog-card-title">
                    Menemukan Akomodasi Murah dan Nyaman di Jabodetabek
                  </h2>
                </div>
                <button className="blog-card-button">Learn More</button>
              </Link>
            </div>
          </div>

          <div className="blog-card-2">
            <Link to="/blog/2">
              <img
                src="../src/assets/Blog/10-spot.png"
                alt="10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi"
              />
              <div className="blog-card-content">
                <p className="blog-card-date">May 2024</p>
                <h2 className="blog-card-title">
                  10 Spot Instagramable di Jakarta yang Wajib Kamu Kunjungi
                </h2>
              </div>
              <button className="blog-card-button">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

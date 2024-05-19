import React from "react";
import "./city.css";

function City() {
  return (
    <section className="menu">
      <h2>Which city do you choose in Jabodetabek & Bandung</h2>
      <div className="row">
        <a href="#" className="menu-card" id="jakarta">
          <h3>Jakarta</h3>
          <p>12.051 accomodations</p>
        </a>
        <a href="#" className="menu-card" id="bogor">
          <h3>Bogor</h3>
          <p>9.250 accomodations</p>
        </a>
        <a href="#" className="menu-card" id="depok">
          <h3>Depok</h3>
          <p>7.223 accomodations</p>
        </a>
        <a href="#" className="menu-card" id="tangerang">
          <h3>Tangerang</h3>
          <p>9.999 accomodations</p>
        </a>
        <a href="#" className="menu-card" id="bekasi">
          <h3>Bekasi</h3>
          <p>9.125 accomodations</p>
        </a>
        <a href="#" className="menu-card" id="bandung">
          <h3>Bandung</h3>
          <p>10.001 accomodations</p>
        </a>
      </div>
    </section>
  );
}

export default City;

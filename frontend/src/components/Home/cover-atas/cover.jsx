import React from "react";
import "./cover.css";

function AboutUs() {
  return (
    <section className="cover">
      <div className="cover-top">
        <h1>Let’s Hangout Now!</h1>
        <h3>get started on your hangout planning</h3>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Where do you want to go?" />
        <button>Search</button>
      </div>
    </section>
  );
}

export default AboutUs;

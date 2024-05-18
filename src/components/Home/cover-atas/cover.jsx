import React from "react";
import "./cover.css";

function AboutUs() {
  return (
    <section class="cover">
      <div class="cover-top">
        <h1>Let’s Hangout Now!</h1>
        <h3>where do you want to go?</h3>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </section>
  );
}

export default AboutUs;

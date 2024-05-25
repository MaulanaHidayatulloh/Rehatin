import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./event.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Event = () => {
  return (
    <section className="event">
      <h2>Event Information</h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={1000}
        arrows={false}
        customTransition="transform 1000ms ease 0s"
        transitionDuration={1000}
        ltr={true}
      >
        <div className="card-event" id="elite">
          <a href="/" className="link">
            <h3>The Elite Showcase</h3>
          </a>
        </div>
        <div className="card-event" id="pesta">
          <a href="#" className="link">
            <h3>Pesta Bebas Berselancar</h3>
          </a>
        </div>
        <div className="card-event" id="waku">
          <a href="#" className="link">
            <h3>Waku - Waku Festival</h3>
          </a>
        </div>
        <div className="card-event" id="prj">
          <a href="#" className="link">
            <h3>Pekan Raya Jakarta</h3>
          </a>
        </div>
        <div className="card-event" id="sound">
          <a href="#" className="link">
            <h3>The Sounds Project</h3>
          </a>
        </div>
        <div className="card-event" id="jdm">
          <a href="#" className="link">
            <h3>JDM Fest Bandung</h3>
          </a>
        </div>
      </Carousel>
    </section>
  );
};

export default Event;

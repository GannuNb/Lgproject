import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Helmet } from 'react-helmet';
import './Home.css';
import { Link } from 'react-router-dom';

import homeimg2 from "./images/homeimg2.jpg";
import crumrubberimg from "./images/crumrubberimg.jpg";
import epdmimg from "./images/epdmimg.jpg";
import tyrewireimg from "./images/tyrewireimg.jpg";
import scrollimg1 from "./images/scrollimg1.jpg";
import scrollimg2 from "./images/scrollimg2.jpg";
import scrollimg3 from "./images/scrollimg3.jpg";
import scrollimg4 from "./images/scrollimg4.jpg";
import scrollimg5 from "./images/scrollimg5.jpg";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const images = [
    { src: scrollimg1, alt: "Rubber Granule Application 1" },
    { src: scrollimg2, alt: "Rubber Granule Application 2" },
    { src: scrollimg3, alt: "Rubber Processing Plant" },
    { src: scrollimg4, alt: "Recycled Tyre Rubber" },
    { src: scrollimg5, alt: "EPDM Granules Playground" },
    { src: tyrewireimg, alt: "Tyre Wire Scrap Bundle" },
  ];

  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, length]);

  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);

  return (
    <div>
      {/* <Helmet>
        <title>Lakshmi Ganapathi Industries | Rubber Crumb, EPDM Granules & Tyre Wire Manufacturer </title>
        <meta
          name="description"
          content="Lakshmi Ganapathi Industries is a leading manufacturer and exporter of premium rubber crumb, EPDM granules, and tyre wire scrap in Telangana, India."
        />
        <meta
          name="keywords"
          content="Lakshmi Ganapathi Industries | Lgindustry,rubber crumb manufacturer India, EPDM granules Telangana, tyre wire scrap supplier,Lgindustry, recycled rubber, rubber factory Kodad, rubber products India"
        />
        <meta name="author" content="Lakshmi Ganapathi Industries | Lgindustry " />
        <meta property="og:title" content="Lakshmi Ganapathi Industries | Rubber Recycling & Manufacturing | Lgindustry" />
        <meta property="og:description" content="We produce industrial-grade rubber products like crumb rubber, EPDM granules, and tyre wire from recycled tires." />
        <meta property="og:image" content="https://lgindustry.com/logo.png" />
        <meta property="og:url" content="https://lgindustry.com" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://lgindustry.com" />
      </Helmet> */}

      {/* Hero Section */}
      <section className="container-fluid bg-primary text-white d-flex align-items-center custom-background py-5">
        <div className="row w-100">
          <div className="col-md-12 d-flex flex-column justify-content-center px-5">
            <h1 className="display-4 fw-bold">Welcome to</h1>
            <h2 className="display-4 fw-bold">Lakshmi Ganapathi Industries</h2>
            <p className="lead fw-semibold mt-3">
              Manufacturer of High-Quality Rubber Crumb, EPDM Granules & Tyre Wire Scrap in India.
            </p>
            <Link to="/about" className="btn btn-light mt-3 fw-semibold">Learn More</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5 text-center">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={homeimg2} alt="Inside Lakshmi Ganapathi Industry" className="img-fluid rounded" />
          </div>
          <div className="col-md-6 text-start">
            <h3 className="fw-bold mb-3">About Us</h3>
            <p>
              Lakshmi Ganapathi Industries, based in Kodad, Telangana, India, is a renowned name in the rubber manufacturing and recycling sector. We are dedicated to producing high-performance rubber crumb, EPDM granules, and tyre-derived wire scrap that meet global quality standards and sustainable practices.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container text-center my-5 products">
        <h2 className="products-heading fw-bold mb-4">Our Products</h2>
        <div className="row">
          <div className="col-md-4">
            <Link to="/crumrubber" className="no-link-style">
              <img src={crumrubberimg} alt="Crumb Rubber Manufacturer" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <h5 className="fw-semibold">Crumb Rubber</h5>
              <p>
                High-quality rubber crumb processed from waste tires, used in roads, sports fields, and molded products.
              </p>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/epdm" className="no-link-style">
              <img src={epdmimg} alt="EPDM Granules Supplier India" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <h5 className="fw-semibold">EPDM Granules</h5>
              <p>
                Durable and UV-resistant colored rubber granules ideal for safe flooring in playgrounds and athletic tracks.
              </p>
            </Link>
          </div>

          <div className="col-md-4">
            <Link to="/tyrewire" className="no-link-style">
              <img src={tyrewireimg} alt="Tyre Wire Scrap Exporter" className="img-fluid rounded-circle mb-3" style={{ width: '150px', height: '150px' }} />
              <h5 className="fw-semibold">Tyre Wire</h5>
              <p>
                Tyre-derived steel wire obtained during shredding, suitable for foundries and industrial recycling.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="fade-carousel-container text-center mb-5 mt-5 products">
        <h2 className="products-heading mb-4">Featured Products</h2>
        <div className="carousel-wrapper position-relative">
          {images.map((image, index) => (
            <div key={index} className={`slide ${index === current ? "active" : ""}`}>
              {index === current && (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="carousel-image img-fluid rounded shadow"
                  style={{ maxHeight: '300px', margin: '0 auto' }}
                />
              )}
            </div>
          ))}

          <button className="carousel-btn prev btn btn-outline-dark" onClick={prevSlide} aria-label="Previous Slide">
            &#10094;
          </button>
          <button className="carousel-btn next btn btn-outline-dark" onClick={nextSlide} aria-label="Next Slide">
            &#10095;
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

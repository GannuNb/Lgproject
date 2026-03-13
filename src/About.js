import React from 'react';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';

import abtimg from './images/inn.jpg';
import abtimg1 from './images/inn1.webp';

const About = () => {
  return (
    <div className="about-container">

      {/* SEO META TAGS */}
      <Helmet>

        <title>
          About Lakshmi Ganapathi Industries | Rubber Crumb & Granules Manufacturer
        </title>

        <meta
          name="description"
          content="Lakshmi Ganapathi Industries is a leading manufacturer of crumb rubber and rubber granules located in Kodad, Telangana, India. Supplying high quality rubber recycling products for automotive, conveyor belts and industrial applications."
        />

        <meta
          name="keywords"
          content="Lakshmi Ganapathi Industries, crumb rubber manufacturer India, rubber granules manufacturer Telangana, tyre recycling company India, rubber recycling products"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Lakshmi Ganapathi Industries - Rubber Recycling Manufacturer" />
        <meta
          property="og:description"
          content="Manufacturer of crumb rubber and rubber granules for automotive, industrial and conveyor belt applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={abtimg1} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lgindustry.in/about" />

      </Helmet>


      {/* HERO IMAGE */}
      <img
        src={abtimg1}
        alt="Lakshmi Ganapathi Industries rubber recycling plant"
        className="img-fluid abtimg"
      />


      {/* ABOUT CONTENT */}
      <section className="about-content">

        <h1 className="products-heading">About Lakshmi Ganapathi Industries</h1>

        <p>
          Lakshmi Ganapathi Industries, located in Kodad, Telangana, India,
          is a recognized manufacturer in the rubber recycling industry.
          The company produces high-quality crumb rubber and rubber granules
          used in a wide range of industrial and commercial applications.
        </p>

        <p>
          At Lakshmi Ganapathi Industries, consistent quality of rubber crumb
          and rubber granules at various grades are manufactured in compliance
          with relevant national standards and tested according to
          internationally accepted quality testing methods.
        </p>

        <p>
          Over the years, the company has achieved continuous growth and
          has served customers across India and global markets. Its products
          are widely used in applications such as automotive and OTR tyres,
          conveyor belts, moulded rubber components, and extruded rubber
          products.
        </p>

        <p>
          The organization operates with strong adherence to quality,
          environmental responsibility, and safety standards through
          structured management systems including Quality Management,
          Environmental Management, and Health & Safety Management systems.
        </p>

      </section>

    </div>
  );
};

export default About;
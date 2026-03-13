import React from 'react';
import { Helmet } from "react-helmet";
import './CrumRubber.css';

import abtimg from './images/inn1.webp'
import epdm1 from './images/epdm1.jpg';
import epdm2 from './images/epdm2.jpg';
import epdm3 from './images/epdm3.jpg';
import epdm4 from './images/epdm4.jpg';

const Epdm = () => {
  return (
    <div>

      {/* SEO META TAGS */}
      <Helmet>

        <title>EPDM Colored Rubber Granules | Sports Flooring & Playground Surface</title>

        <meta
          name="description"
          content="High quality EPDM colored rubber granules used for sports flooring, playground surfaces, athletic tracks and industrial flooring. Durable, UV resistant and shock absorbing rubber granules."
        />

        <meta
          name="keywords"
          content="EPDM rubber granules, EPDM colored granules, sports flooring rubber granules, playground rubber flooring, EPDM granules manufacturer, EPDM sports surface"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="EPDM Colored Rubber Granules for Sports & Playground Flooring" />
        <meta
          property="og:description"
          content="Premium EPDM colored rubber granules for playgrounds, athletic tracks, sports flooring and industrial surfaces."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={epdm1} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lgindustry.in/epdm" />

      </Helmet>


      {/* HERO IMAGE */}
      <div className="container-fluid p-0">
        <img
          src={abtimg}
          alt="EPDM colored rubber granules manufacturing and sports flooring materials"
          className="img-fluid abtimg"
        />
      </div>


      <div className="epdm-info my-5 p-4">

        <h1>EPDM Colored Rubber Granules</h1>

        <section className="epdm-details mb-4">

          <p>
            EPDM colored rubber granules are widely used for commercial and
            residential sports playground surfaces due to their multifunctional
            design and durability.
          </p>

          <p>
            These granules are manufactured using special polymer compounds,
            creating a material that is strong, flexible, UV-resistant, and
            aesthetically appealing.
          </p>

          <p>
            EPDM rubber granules are commonly used in sports flooring systems
            because they provide excellent elasticity, durability, and
            long-lasting performance even under heavy use.
          </p>

        </section>


        {/* IMAGE */}
        <img
          src={epdm1}
          alt="EPDM colored rubber granules sports surface material"
          className="img-fluid"
          style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }}
        />


        {/* BENEFITS */}
        <div className="epdm-benefits my-5 p-4 text-center">

          <h2 className="mb-4">Benefits of EPDM Colored Rubber Granules</h2>

          <ul className="list-unstyled mb-5 text-left">
            <li>Durable, robust, and highly resilient</li>
            <li>Excellent flexibility and breathability</li>
            <li>Water permeable surface</li>
            <li>Environmentally friendly material</li>
            <li>Highly versatile for multiple flooring applications</li>
          </ul>


          <h2 className="mb-4">Applications of EPDM Colored Rubber Granules</h2>

          <p className="text-justify">
            EPDM rubber granules are widely used in sports flooring, playground
            surfaces, school grounds, courtyards, athletic tracks, and
            multipurpose sports facilities.
          </p>

          <p className="text-justify">
            Their shock-absorbing properties help protect players by reducing
            the impact of falls. The granules also offer excellent resistance
            to wear, tear, and weather conditions, making them suitable for
            long-term outdoor use.
          </p>

        </div>


        {/* IMAGES */}
        <img
          src={epdm2}
          alt="EPDM rubber granules playground flooring"
          className="img-fluid"
          style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }}
        />

        <img
          src={epdm3}
          alt="EPDM sports track rubber granules"
          className="img-fluid"
          style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }}
        />

        <img
          src={epdm4}
          alt="colored EPDM granules for sports surfaces"
          className="img-fluid"
          style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }}
        />

      </div>

    </div>
  );
};

export default Epdm;
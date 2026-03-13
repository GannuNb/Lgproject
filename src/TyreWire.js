import React from 'react';
import { Helmet } from "react-helmet";
import './CrumRubber.css';

import abtimg from './images/inn1.webp'
import tw1 from './images/tw1.jpg';
import tw2 from './images/tw2.jpg';

const TyreWire = () => {
  return (
    <div>

      {/* SEO META TAGS */}
      <Helmet>

        <title>Tyre Wire Scrap | Tyre Derived Steel (TDS) from Recycled Tyres</title>

        <meta
          name="description"
          content="High quality tyre wire scrap also known as Tyre Derived Steel (TDS) produced during tyre recycling and shredding processes. Used in steel industries and metal recycling applications."
        />

        <meta
          name="keywords"
          content="tyre wire scrap, tyre derived steel, TDS steel scrap, tyre recycling steel wire, waste tyre steel wire, rubber recycling byproducts"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Tyre Wire Scrap - Tyre Derived Steel (TDS)" />
        <meta
          property="og:description"
          content="Tyre wire scrap generated from tyre shredding process. Also known as Tyre Derived Steel (TDS), widely used in steel recycling industries."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={tw1} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lgindustry.in/tyrewire" />

      </Helmet>


      {/* HERO IMAGE */}
      <div className="container-fluid p-0">
        <img
          src={abtimg}
          alt="tyre recycling plant products and materials"
          className="img-fluid abtimg"
        />
      </div>


      <div className="tyre-wire-info my-5 p-4 text-center">

        <h1 className="mb-4">Tyre Wire Scrap</h1>

        <p>
          Tyre Wire Scrap, also known as <strong>Tyre Derived Steel (TDS)</strong>,
          is a recyclable metal obtained during the shredding and processing of
          waste tyres in tyre recycling plants.
        </p>

        <p>
          During the tyre granulation process, steel wires embedded in tyres
          are separated from rubber and fiber. These steel wires are collected
          and processed as light melting scrap used in steel manufacturing
          and metal recycling industries.
        </p>


        {/* IMAGES */}
        <img
          src={tw1}
          alt="tyre wire scrap separated from waste tyres"
          className="img-fluid"
          style={{ width: '30%', height: 'auto', display: 'block', margin: '0 auto' }}
        />

        <img
          src={tw2}
          alt="tyre derived steel wire scrap from tyre recycling process"
          className="img-fluid"
          style={{ width: '30%', height: 'auto', display: 'block', margin: '0 auto' }}
        />

      </div>

    </div>
  );
};

export default TyreWire;
import React from 'react';
import { Helmet } from "react-helmet";
import './CrumRubber.css';

import abtimg from './images/inn1.webp'
import crumb1 from './images/crumb1.jpg';
import crumb2 from './images/crumb2.jpg';
import crumb3 from './images/crumb3.jpg';
import crumb4 from './images/crumb4.jpg';
import crumb5 from './images/crumb5.jpg';

const CrumRubber = () => {
  return (
    <div>

      {/* ✅ SEO META TAGS */}
      <Helmet>
        <title>Crumb Rubber Manufacturer | 30 Mesh & 40 Mesh Crumb Rubber Powder</title>

        <meta
          name="description"
          content="High quality crumb rubber granules and powder manufactured using recycled tyres. Available in 30 mesh and 40 mesh for sports surfaces, asphalt roads, construction, rubber products and automotive applications."
        />

        <meta
          name="keywords"
          content="crumb rubber, crumb rubber powder, crumb rubber granules, 30 mesh crumb rubber, 40 mesh crumb rubber, tyre recycling, rubber granules manufacturer, rubber powder supplier"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph for social sharing */}
        <meta property="og:title" content="Crumb Rubber Powder Manufacturer - 30 Mesh & 40 Mesh" />
        <meta
          property="og:description"
          content="Premium crumb rubber made from recycled tyres for sports flooring, asphalt roads, rubber mats and industrial applications."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={crumb1} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lgindustry.in/crumrubber" />
      </Helmet>


      {/* Hero Image */}
      <div className="container-fluid p-0">
        <img
          src={abtimg}
          alt="Crumb rubber manufacturing and recycled tyre rubber granules"
          className="img-fluid abtimg"
        />
      </div>


      <div className="container my-5">

        {/* What is Crumb Rubber */}
        <div className="mt-4">
          <h1 className="h3 font-weight-bold mb-3 products-heading">Crumb Rubber</h1>

          <p>
            Crumb rubber is made by reducing scrap tires into small, uniform
            granules. Inherent reinforcing materials such as steel and fiber
            are removed along with contaminants like dust, glass, or rock.
          </p>

          <p>
            Our facility has the capacity to produce more than
            <strong> 52,000 tonnes of crumb rubber annually</strong> for a wide
            variety of industrial and commercial applications.
          </p>
        </div>


        {/* Production Process */}
        <div className="mt-4">
          <h2 className="h3 font-weight-bold mb-3">Production Process</h2>

          <p>
            We use the ambient mechanical grinding method to convert scrap
            tires into crumb rubber granules. In this process, tires are
            shredded into chips and processed at room temperature.
          </p>

          <p>
            The chips are fed into granulators where steel and fiber are
            separated. Magnetic separators remove steel while air classifiers
            and vibrating screens remove fiber.
          </p>

          <p>
            Fine rubber particles are produced using additional grinding
            equipment including secondary granulators and rotary mills.
          </p>

          <ul>
            <li><strong>Secondary Granulators</strong></li>
            <li><strong>High-Speed Rotary Mills</strong></li>
            <li><strong>Extruders or Screw Presses</strong></li>
            <li><strong>Cracker Mills</strong></li>
          </ul>
        </div>


        {/* Applications */}
        <div className="mt-4">
          <h2 className="h3 font-weight-bold mb-3">
            Applications for Crumb Rubber Granules
          </h2>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Sport Surfaces</h5>
              <ul>
                <li>Kindergarten Playgrounds and Recreation Areas</li>
                <li>School Sports Areas</li>
                <li>Athletic Tracks</li>
                <li>Tennis and Basketball Courts</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5>Automotive Industry</h5>
              <ul>
                <li>Bumpers</li>
                <li>Splash Guards and Fenders</li>
                <li>Floor Mats for Cars and Trucks</li>
                <li>Floor Liners for Trucks and Vans</li>
              </ul>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-md-6">
              <h5>Construction</h5>
              <ul>
                <li>Hospital, Industrial, and Bathroom Flooring</li>
                <li>Floor Tiles</li>
                <li>Foundation Waterproofing</li>
                <li>Dam, Silo, and Roof Liners</li>
              </ul>
            </div>

            <div className="col-md-6">
              <h5>Geotechnical / Asphalt</h5>
              <ul>
                <li>Rubberized Asphalt for Roads</li>
                <li>Drainage Pipes</li>
                <li>Soil Conditioner</li>
                <li>Porous Irrigation Pipes</li>
                <li>Road Building and Repair</li>
              </ul>
            </div>
          </div>
        </div>

      </div>


      {/* Images */}
      <img src={crumb1} alt="crumb rubber granules" className="img-fluid" style={{ width: '60%', margin: '0 auto', display: 'block' }} />
      <img src={crumb2} alt="recycled tyre rubber granules" className="img-fluid" style={{ width: '60%', margin: '0 auto', display: 'block' }} />
      <img src={crumb3} alt="crumb rubber production process" className="img-fluid" style={{ width: '60%', margin: '0 auto', display: 'block' }} />


      {/* 30 Mesh */}
      <div className="product-description my-5 p-4 m-5">
        <h2>Crumb Rubber Powder - 30 Mesh</h2>

        <p><strong>Description:</strong></p>

        <p>
          Our premium 30 Mesh Crumb Rubber Powder is suitable for tyre
          manufacturing, rubber mats, sports flooring and rubber components.
        </p>

        <ul>
          <li>Tyre Manufacturing</li>
          <li>Flaps Production</li>
          <li>Sports Ground Surfacing</li>
          <li>Rubber Mats</li>
          <li>Rubber Bushes</li>
        </ul>

        <p><strong>Production Capacity:</strong></p>

        <p>
          Our advanced facility produces up to
          <strong> 2200 tons per month</strong>.
        </p>
      </div>


      <img src={crumb4} alt="crumb rubber powder 30 mesh" className="img-fluid" style={{ width: '40%', margin: '0 auto', display: 'block' }} />
      <img src={crumb5} alt="crumb rubber powder 40 mesh" className="img-fluid" style={{ width: '40%', margin: '0 auto', display: 'block' }} />


      {/* 40 Mesh */}
      <div className="product-info my-5 p-4 m-5">

        <h2>Crumb Rubber Powder - 40 Mesh</h2>

        <p>
          Mesh refers to the number of holes per inch in a screen used to size
          rubber particles. A 40 mesh screen produces rubber particles slightly
          smaller than 1/40th of an inch.
        </p>

        <h4>Crumb Rubber Granules</h4>

        <p>
          Crumb rubber is recycled from automotive and truck tyres. During the
          recycling process, steel and fiber are removed leaving high-quality
          rubber granules suitable for industrial applications.
        </p>

        <p>
          These granules are widely used in artificial turf, rubber products,
          road construction, and safety flooring systems.
        </p>

      </div>

    </div>
  );
};

export default CrumRubber;
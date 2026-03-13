import React from 'react';
import { Helmet } from "react-helmet";
import 'bootstrap/dist/css/bootstrap.min.css';
import abtimg from './images/inn1.webp';

function ContactUs() {
  return (
    <div className="row">

      {/* SEO META TAGS */}
      <Helmet>

        <title>Contact Lakshmi Ganapathi Industries | Rubber Recycling Company</title>

        <meta
          name="description"
          content="Contact Lakshmi Ganapathi Industries located in Kodad, Telangana, India. Reach us for crumb rubber, rubber granules, tyre recycling products and industrial rubber solutions."
        />

        <meta
          name="keywords"
          content="Lakshmi Ganapathi Industries contact, rubber granules manufacturer contact, crumb rubber supplier India, tyre recycling company Telangana"
        />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Lakshmi Ganapathi Industries" />
        <meta
          property="og:description"
          content="Get in touch with Lakshmi Ganapathi Industries for rubber recycling products and crumb rubber manufacturing."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={abtimg} />

        {/* Canonical URL */}
        <link rel="canonical" href="https://lgindustry.in/contactus" />

      </Helmet>


      {/* Hero Image */}
      <div className="col-12 mb-4">
        <img
          src={abtimg}
          alt="Lakshmi Ganapathi Industries manufacturing facility"
          className="img-fluid"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '400px',
          }}
        />
      </div>


      {/* Contact Information */}
      <div className="col-lg-6 col-md-12 mb-4 m-1 my-2">
        <h1 className="mb-4 text-center products-heading" style={{ fontWeight: 'bold'}}>
          Contact Information
        </h1>

        <ul className="list-unstyled">

          <li className="d-flex align-items-center mb-3">
            <i className="fas fa-map-marker-alt me-3" style={{ fontSize: '1.2em' }}></i>
            <span>
              <strong>Lakshmi Ganapathi Industries</strong>
              <br />SY NO.46/1,17/A1,17 A2, Redla Kunta Village
              <br />Kodad Mandal, Suryapet District
              <br />Telangana – 508206, India
            </span>
          </li>

          <li className="d-flex align-items-center mb-3">
            <i className="fas fa-phone-alt me-3" style={{ fontSize: '1.2em' }}></i>
            <span>Phone: 040-49471616</span>
          </li>

          <li className="d-flex align-items-center mb-3">
            <i className="fas fa-envelope me-3" style={{ fontSize: '1.2em' }}></i>
            <span>Email: info@lgindustry.in</span>
          </li>

        </ul>
      </div>


      {/* Google Map */}
      <div className="col-12 mb-4 d-flex justify-content-center" style={{ height: '100vh', padding: 0 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30524.013316473447!2d79.94195935624946!3d16.99904565568206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLAKSHMI%20GANAPATHI%20INDUSTRIES!5e0!3m2!1sen!2sin!4v1731050878828!5m2!1sen!2sin"
          width="90%"
          height="90%"
          style={{ border: '0', height: '90vh', width: '90%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>


      {/* FAQ Section */}
      <div className="col-12 mt-5 mx-4 px-5 mb-5">
        <h2 className="mb-4 text-center">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">

          <div className="accordion-item">

            <h2 className="accordion-header" id="headingOne">

              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                How can I contact Lakshmi Ganapathi Industries?
              </button>

            </h2>

            <div id="collapseOne" className="accordion-collapse collapse show">
              <div className="accordion-body">
                You can reach us by phone at 040-49471616 or email us at
                info@lgindustry.in during business hours.
              </div>
            </div>

          </div>


          <div className="accordion-item">

            <h2 className="accordion-header" id="headingTwo">

              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
              >
                Where is Lakshmi Ganapathi Industries located?
              </button>

            </h2>

            <div id="collapseTwo" className="accordion-collapse collapse">

              <div className="accordion-body">

                Lakshmi Ganapathi Industries  
                SY NO.46/1,17/A1,17 A2, Redla Kunta Village,  
                Kodad Mandal, Suryapet District, Telangana – 508206, India.

              </div>

            </div>

          </div>

        </div>
      </div>

    </div>
  );
}

export default ContactUs;
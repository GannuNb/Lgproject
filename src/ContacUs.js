import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import abtimg from './images/inn1.webp';

function ContactUs() {
  return (
    
      <div className="row">
        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src={abtimg}
            alt="Company products"
            className="img-fluid"
            style={{
              objectFit: 'cover',  // Ensures image fills the container without distortion
              width: '100%',        // Ensures full width
              height: '400px',      // Adjusted height for better visibility
            }}
          />
        </div>

        {/* Contact Information Section */}
        <div className="col-lg-6 col-md-12 mb-4 m-1 my-2">
          <h2 className="mb-4 text-center products-heading" style={{ fontWeight: 'bold'}}>Contact Information</h2>
          <ul className="list-unstyled">
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-map-marker-alt me-3" style={{ fontSize: '1.2em' }}></i>
              <span>
                LAKSHMI GANAPATHI INDUSTRIES
                <br />SY NO.46/1,17/A1,17 A2, REDLA KUNTA VILLAGE,
                <br />KODAD MANDAL, SURYAPET DIST, TELANGANA – 508206
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-phone-alt me-3" style={{ fontSize: '1.2em' }}></i>
              <span>
                <p className="mb-2">CONTACT NO: 040-49471616</p>
              </span>
            </li>
            <li className="d-flex align-items-center mb-3">
              <i className="fas fa-envelope me-3" style={{ fontSize: '1.2em' }}></i>
              <span>
                <p className="mb-2">Email: info@lgindustry.in</p>
              </span>
            </li>
          </ul>
        </div>

        {/* Google Map Section */}
        <div className="col-12 mb-4 d-flex justify-content-center" style={{ height: '100vh', padding: 0 }}>
  <iframe 
    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30524.013316473447!2d79.94195935624946!3d16.99904565568206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sLAKSHMI%20GANAPATHI%20INDUSTRIES%20Add%3A%20SY%20NO.46%2F1%2C17%2FA1%2C17%20A2%2CREDLA%20KUNTA%20VILLAGE%2C%20KODAD%20MANDAL%2C%20SURYAPET%20DIST%2C%20TELANGANA%20%E2%80%93%20508206%20%20CONTACT%20NO%3A%C2%A0040-49471616!5e0!3m2!1sen!2sin!4v1731050878828!5m2!1sen!2sin"
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
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          How can I get in touch with customer service?
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
          You can reach us via the form above or by calling 040-49471616 during business hours.
        </div>
      </div>
    </div>

    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Where are you located?
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
        <div className="accordion-body">
        <p className="small mb-2">
              LAKSHMI GANAPATHI INDUSTRIES
              SY NO.46/1,17/A1,17 A2, REDLA KUNTA VILLAGE,
              KODAD MANDAL, SURYAPET DIST, TELANGANA – 508206
            </p>  </div> 
      </div>
    </div>
  </div>
</div>

      </div>

  );
}

export default ContactUs;

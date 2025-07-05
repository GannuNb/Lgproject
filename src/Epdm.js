import React from 'react';
import './CrumRubber.css';
import abtimg from './images/inn1.webp'
import epdm1 from './images/epdm1.jpg';
import epdm2 from './images/epdm2.jpg';
import epdm3 from './images/epdm3.jpg';
import epdm4 from './images/epdm4.jpg';

const CrumRubber = () => {
  return (
    <div>
 

 <div className="container-fluid p-0">
 <img 
  src={abtimg} 
  alt="Company products" 
  className="img-fluid abtimg" 
  
/>
</div>
   
    <div className="epdm-info my-5 p-4">
      <h2>EPDM Colored Rubber Granules</h2>
      
      <section className="epdm-details mb-4">
        <p>
          EPDM colored rubber granules are increasingly popular for commercial and private sports playgrounds due to their multifunctional design. These granules feature a unique construction that combines special polymer compounds with various components, creating a versatile and durable material.
        </p>
        <p>
          The structure of EPDM rubber granules provides an aesthetically pleasing, durable, and UV-resistant surface, making it an excellent alternative for sports ground flooring.
        </p>
      </section>
      <img src={epdm1} alt="Company products" className="img-fluid" style={{ width: '70%', height: 'auto', display: 'block', margin: '0 auto' }} />
      <div className="epdm-benefits my-5 p-4 text-center">
  <h2 className="mb-4">Benefits of EPDM Colored Rubber Granules</h2>
  <ul className="list-unstyled mb-5 text-left">
  <li>Durable, robust, and highly resilient</li>
  <li>Combines power and breathability</li>
  <li>Allows water permeability</li>
  <li>Environmentally friendly</li>
  <li>Offers versatility</li>
</ul>


  <h2 className="mb-4">Applications of EPDM Colored Rubber Granules</h2>
  <p className="text-justify">
    EPDM colored rubber granules are designed for versatile applications across various sectors. They are widely used in the construction of sports ground floors, commercial playground floors, courtyards, multipurpose athletic tracks, school floors, industrial floors, and multipurpose playgrounds.
  </p>
  <p className="text-justify">
    The granules offer a shock-absorbing design, providing maximum protection to players in action by cushioning falls. They are also elastic, resistant to shocks, and highly resistant to wear and tear, making them ideal for withstanding intense activities.
  </p>
</div>

    <img src={epdm2} alt="Company products" className="img-fluid" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />
    <img src={epdm3} alt="Company products" className="img-fluid" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />
    <img src={epdm4} alt="Company products" className="img-fluid" style={{ width: '50%', height: 'auto', display: 'block', margin: '0 auto' }} />

    </div>



    </div>
  );
};

export default CrumRubber;

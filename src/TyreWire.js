import React from 'react';
import './CrumRubber.css';
import abtimg from './images/inn1.webp'
import tw1 from './images/tw1.jpg';
import tw2 from './images/tw2.jpg'

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
      
      <div className="tyre-wire-info my-5 p-4 text-center">
      <h2 className="mb-4">Tyre Wire</h2>
      <p>
        Tyre Wire Scrap, also known as TDS (Tyre Derived Steel), is a light melting scrap obtained during the shredding process of waste tyres.
      </p>
      <img src={tw1} alt="Company products" className="img-fluid" style={{ width: '30%', height: 'auto', display: 'block', margin: '0 auto' }} />
      <img src={tw2} alt="Company products" className="img-fluid" style={{ width: '30%', height: 'auto', display: 'block', margin: '0 auto' }} />

    </div>


    </div>
  );
};

export default CrumRubber;

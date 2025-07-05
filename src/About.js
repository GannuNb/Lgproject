import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Import the CSS file
import abtimg from './images/inn.jpg';
import abtimg1 from './images/inn1.webp'

const About = () => {
  return (
    <div className="about-container">
    
 
    <img 
  src={abtimg1} 
  alt="Company products" 
  className="img-fluid abtimg" 
  
/>



    
      <section className="about-content">
        <h2 className='products-heading'>About Us</h2>
        <p>
          Lakshmi Ganapathi  Industries located in Kodad, Telangana, India, is a renowned name among Rubber Industries. At Lakshmi Ganapathi  Industries, consistent quality of Rubber Crumb and Rubber Granules at various grates of Factice are manufactured compliant with all requirements of relevant national standards and tested as per prevalent internationally accepted test methods.
        </p>
        <p>
          During these years of journey, Lakshmi Ganapathi  Industries has recorded continuous growth and has served its customers delightfully with quality of product as well as services for wide range of product applications such as Automotive & OTR tyres, Conveyor belts, Moulded & Extruded Rubber products on PAN India as well as global arena.
        </p>
        <p>
          The company operates its processes complying with the requirements of Quality Management System, Environment Management System and Health and Safety Management System.
        </p>
      </section>
    </div>
  );
};

export default About;

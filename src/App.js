import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import About from './About';
import './styles.css';
import CrumRubber from './CrumRubber';
import EnquiryForm from './EnquiryForm.js';
import ContactUs from './ContacUs.js';
import Epdm from './Epdm.js';
import TyreWire from './TyreWire.js';
import Home from './Home.js';
import Navbar from './Navbar.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/crumrubber" element={<CrumRubber />} />
        <Route path="/enquiryform" element={<EnquiryForm />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/epdm" element={<Epdm />} />
        <Route path="/tyrewire" element={<TyreWire />} />
        <Route path="/home" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

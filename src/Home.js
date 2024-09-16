import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import "./Home.css";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import image3 from './images/image3.png'; // Corrected path
import image4 from './images/image1.jfif';
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // 5 seconds
      delay: 500,
    });
  }, []);

  return (
    <div className='home-parent'>
    
      <div className='home-image' data-aos="fade-up">
        <img className="home-image1" src={image3} alt="Image 1" />
      </div>
      <div className='home-main'>
        <div className='home-child' data-aos="fade-right">
          <h1 className='home-para'>Make Your</h1>
          <h1 className='home-para1'>Body Shape</h1>
          <div className='link-head'>
          <Link className="App-link1" to="/Pricing">Get Started</Link>
        </div>
        </div>
        <div className='home-child1' data-aos="fade-left">
          <img className='home-image2' src={image4} alt="Image 2" />
      
        </div>
      </div>
    </div>
  );
}

export default Home;

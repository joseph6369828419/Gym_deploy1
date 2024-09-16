
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Choose.css"
import image9 from './images/image3.png';
import image10 from './images/image1.jfif';
function Choose() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500,
      once: true, // If you want the animation to happen only once
    });
  }, []);

  return (
    <div className='choose-parent'>
      <div  >
      <img  data-aos="fade-left" className="choose-image" src={image9} alt="Image 1" />
        </div>
        <div className='choose-main'>
       <div className='choose-child'>
       
        <h1  data-aos="fade-left">Why Choose Us ?</h1>
       
        <div className='choose-power'>
        <div data-aos="fade-left">
              <h1>200+</h1>
              <p>Total Members</p>
            </div>
            <div className='choose-head' data-aos="fade-right">
              <h1 className='choose-price'>50+</h1>
              <p className='choose-para'>Best Gym</p>
            </div>
            <div data-aos="fade-left">
              <h1>25+</h1>
              <p>Programs</p>
            </div>
            <div className='choose-head1' data-aos="fade-right">
              <h1>100+</h1>
              <p>Rewards</p>
            </div>
       </div>
       </div>
       <div className='choose-child1' data-aos="fade-up">

       <img className='home-image2' src={image10} alt="Image 2" />
       </div>
    </div>
    </div>
  )
}

export default Choose
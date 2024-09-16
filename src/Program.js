import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Program.css";
import image5 from './images/image4.png';
import image6 from './images/image5.png';
import image7 from './images/image6.png';
import image8 from './images/image7.png';
function Program() {
  useEffect(() => {
    AOS.init({ duration: 1000, delay: 300 });
  }, []);

  return (
    <div className='program-parent'>
      <div className='program-main1' data-aos='fade-right'>
       
        <h1 className='program-head' data-aos='fade-right'>Build Your Best Chest</h1>
      </div>
      <div className='program-main' data-aos='zoom-in'>
        <div className='program-child' data-aos='fade-up'>
          <p><img className='program-image' src={image5} alt="Flex Muscle"/></p>
          <p className='program-letter'>Flex Muscle</p>
          <p>A theory is a well-substantiated explanation of some aspect of the natural world that is acquired through the scientific method and repeatedly tested and confirmed through observation and experimentation.</p>
        </div>
        <div className='program-child' data-aos='fade-up'>
          <p><img className='program-image1' src={image6} alt="Flex Muscle"/></p>
          <p className='program-letter'>Flex Muscle</p>
          <p>The primary purpose of a theory is to provide a framework for understanding and explaining a phenomenon. It helps organize and interpret observations, making predictions about future events or behaviors.</p>
        </div>
        <div className='program-child' data-aos='fade-up'>
          <p><img className='program-image2' src={image7} alt="Flex Muscle"/></p>
          <p className='program-letter'>Flex Muscle</p>
          <p>A robust theory is characterized by clarity, explanatory power, falsifiability (can be proven wrong through experimentation), simplicity, and the ability to make accurate predictions.</p>
        </div>
        <div className='program-child' data-aos='fade-up'>
          <p><img className='program-image3' src={image8} alt="Flex Muscle"/></p>
          <p className='program-letter'>Flex Muscle</p>
          <p>Theories serve as the foundation for scientific research and technological advancements. They guide investigations, inspire hypotheses, and contribute to the development of practical applications, shaping our understanding of the world around us.</p>
        </div>
      </div>
    </div>
  );
}

export default Program;

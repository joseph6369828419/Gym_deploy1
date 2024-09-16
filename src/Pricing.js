import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Pricing.css"
import image11 from './images/image8.png';
import image12 from './images/image9.png';
function Pricing() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 500,
      once: true, // If you want the animation to happen only once
    });
  }, []);
  return (
    <div className='pricing-parent'>
      <div className='pricing-main'>
      <div className="package" data-aos="fade-right">
    
    <i class="fas fa-cube"><img className='pricing-image' src={image11}/></i>
    
    <h1>Basic Package</h1>
    
    <p  className='pricing-price'>$120</p>
    <div className='pricing-info1' data-aos="fade-left">

    <p class="pricing-info"> <img className="pricing-pic" src={image12}/>Affordability</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Flexibility</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Comprehensive Access</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Member Perks</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>No Hidden Costs</p>
</div>
<button className='pricing-btn' >Purchase now</button>
</div>
<div className="package" data-aos="fade-right">
    
<i class="fas fa-cube"><img className='pricing-image1' src={image11}/></i>
    
    <h1>Basic Package</h1>
    
    <p className='pricing-price'>$120</p>
    <div className='pricing-info1' data-aos="fade-right">
    <p class="pricing-info"> <img className="pricing-pic" src={image12}/>Affordability</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Flexibility</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Comprehensive Access</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Member Perks</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>No Hidden Costs</p>
</div>

<button className='pricing-btn' >Purchase now</button>
</div>
<div className="package" data-aos="fade-right">
    
<i class="fas fa-cube"><img className='pricing-image2' src={image11}/></i>
    
    <h1>Basic Package</h1>
    
    <p  className='pricing-price'>$120</p>
    <div className='pricing-info1' data-aos="fade-right">
    <p class="pricing-info"> <img className="pricing-pic" src={image12}/>Affordability</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Flexibility</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Comprehensive Access</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>Member Perks</p>
<p class="pricing-info"> <img className="pricing-pic" src={image12}/>No Hidden Costs</p>
</div>

<button className='pricing-btn' >Purchase now</button>
</div>
</div>
    </div>
  )
}

export default Pricing
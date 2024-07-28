import React, {useEffect} from 'react'
import './About.css'

import image1 from '../../Assests/image17.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
   <div className="about section container">
    <div className="aboutContainer grid"  data-aos="fade-up">
      <img src={image1} alt="About Image" />

      <div className="textDiv">
        <h1  data-aos="fade-up">About Us</h1>
        <p  data-aos="fade-up">Are you an intrepid explorer, a nature
           enthusiast, or simply someone looking 
           for a break from the daily grind? If so, 
           then TopiTrek is the website for you! We
           specialize in crafting unique and exciting
           travel experiences that take you off the
           beaten path and into the heart of some 
           of the most breathtaking landscapes in 
           the world......<small><a href="">see more</a></small>
          </p>
      </div>
    </div>
   </div>
  )
}

export default About

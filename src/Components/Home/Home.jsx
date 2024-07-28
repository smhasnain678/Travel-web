import React, {useEffect} from 'react'
import './Home.css'

//imported Assets
import image1 from '../../Assests/image1.jpg'

//imported icons
import { BsArrowRight } from "react-icons/bs";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="Home">
      <div className="imgBg">
        <img src={image1} alt="" />
      </div>

      <div className="sectionText">
        <h1 data-aos="fade-up">Book your Best Dream Trip Today</h1>
        <p  data-aos="fade-up">Sustainable journeys for conscious travelers.
           Explore the world responsibly, leave it beautifully.</p>
        <button className="btn flex"  data-aos="fade-up">Explore <BsArrowRight  className="icon" /></button>
      </div>
    </div>
  )
}

export default Home

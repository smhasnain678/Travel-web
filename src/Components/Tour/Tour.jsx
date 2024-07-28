import React, {useEffect} from 'react'
import './Tour.css'

import Video from '../../Assests/video8.mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Tour = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="tourContainer">
      <div className="travelvid"  data-aos="fade-up">
        <video src={Video} autoPlay loop muted></video>
      </div>    
      <div className="travelText">
        <h1  data-aos="fade-up">Our Best Travel</h1>
        <button className="btn"  data-aos="fade-up">Get Started</button>
      </div>
    </div>
  )
}

export default Tour

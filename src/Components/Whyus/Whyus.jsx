import React,{useEffect} from 'react'
import './Whyus.css'

import image1 from '../../Assests/image25.png'
import image2 from '../../Assests/image26.png'
import image3 from '../../Assests/image27.png'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Whyus = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="whyus">
      <div className="whyusSection"  data-aos="fade-up">
        <div className="hiking"  data-aos="fade-up">
          <img src={image1} alt="Hiking Image" />
          <div className="hikingInfo">
            <h3  data-aos="fade-up">500+ Hikings</h3>
            <p  data-aos="fade-up">Hikings has something for 
              everyone. Our website features
               curated hikes from all over the world</p>
          </div>
        </div>

         <div className="tours"  data-aos="fade-up">
          <img src={image3} alt="Tour Image" />
          <div className="toursInfo">
            <h3  data-aos="fade-up">1000+ Tours</h3>
            <p  data-aos="fade-up">Who are you trying to attract with your tours? 
              Families, solo travelers, thrill-seekers,
               or history buffs</p>
          </div>
        </div>

        <div className="costumer"  data-aos="fade-up">
          <img src={image2} alt="Costumer Image" />
          <div className="costumerInfo">
            <h3  data-aos="fade-up">2000+ Costumers</h3>
            <p  data-aos="fade-up">Do they want to find the perfect itinerary,
               score the best deals, connect with locals</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Whyus

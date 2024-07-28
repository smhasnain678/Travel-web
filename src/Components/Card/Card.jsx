import React, {useEffect} from 'react'
import './Card.css'
import image1 from '../../Assests/image15.jpg'
import image2 from '../../Assests/image16.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Card = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="cardContainer" data-aos="fade-up">
        <div className="cardSection container grid">
            <div className="divImage1">
              <img src={image1} alt="Card Image" />

              <div className="cardInfo">
                <div className="Text">
                    <h3 className="name">
                       The perfect road trip
                    </h3>
                    <p>Find it paved and polished at our resort</p>
                    <button className="btn">Learn more</button>
                </div>
              </div>
            </div>

            <div className="divImage2">
              <img src={image2} alt="Card Image" />

              <div className="cardInfo">
                <div className="Text">
                    <span className="name">
                     ALL official resorts
                    </span>
                    <p>Unwind your mind, not your engine</p>
                    <button className="btn">Learn more</button>
                </div>
              </div>
            </div>
         </div>
    </div>
  )
}

export default Card

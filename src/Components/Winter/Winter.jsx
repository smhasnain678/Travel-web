import React, {useEffect} from 'react'
import './Winter.css'

import image1 from '../../Assests/image18.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Winter = () => {
  
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="winter section"  data-aos="fade-up">
        <div className="winterSection container">
            <div className="winterImg">
                <img src={image1} alt="Winter Image" />
                <div className="winterInfo container">
                    <h1>Make new winter memories</h1>
                    <p>Limited Time Only! 25% Discount on Winter Adventures</p>
                    <button className="btn">Read on</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Winter

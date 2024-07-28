import React,{useEffect} from 'react'
import './Gallery.css'

import { AiFillStar } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";

import Aos from 'aos'
import 'aos/dist/aos.css'

import image1 from '../../Assests/img10.jpg'
import image2 from '../../Assests/img11.jpg'
import image3 from '../../Assests/img12.jpg'
import image4 from '../../Assests/img13.jpg'
import image5 from '../../Assests/image14.jpg'

const Gallery = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="writeReviews" data-aos="fade-up">
      <div className="reviewsSection section container">
        <div className="textDiv">
          <h1 data-aos="fade-up">Write a review, make someone's trip</h1>
          <p data-aos="fade-up">Would love to see more local experiences and 
            activities, not just flights and hotels</p>
            <div className="inputField flex" data-aos="fade-up">
              <BiSearchAlt className="icon"/>
              <input type="text" placeholder="Write a review" />
            </div>
        </div>
      <div className="clientReviews flex">
        <div className="reviewsText" data-aos="fade-up">
          <h3 data-aos="fade-up">What our Clients Says</h3>
          <p data-aos="fade-up">Forget generic tours! Your personalized recommendations led me to
             hidden gems and authentic encounters. I felt 
             like a local, not a tourist." - Michael, Off-the-Beaten-Path Explorer</p>
            <span className="star flex" data-aos="fade-up">
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            <AiFillStar className="icon"/>
            </span>

          <div className="clientImages flex" data-aos="fade-up">
          <img src={image1} alt="Client Image" />
          <img src={image2} alt="Client Image" />
          <img src={image3} alt="Client Image" />
          <img src={image4} alt="Client Image" />
        </div>
        </div>
         <div className="bigImage" data-aos="fade-up">
          <img src={image5} alt="Client Image" />
         </div>
      </div>
      </div>
    </div>
  )
}

export default Gallery

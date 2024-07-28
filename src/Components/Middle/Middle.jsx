import React, {useEffect} from 'react'
import './Middle.css'
import { BsFillCreditCardFill } from "react-icons/bs";
import { MdLocationPin } from "react-icons/md";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { TiLocation } from "react-icons/ti";

import Aos from 'aos'
import 'aos/dist/aos.css'

// imported images
import image1 from '../../Assests/image1.jpg'
import image2 from '../../Assests/image2.jpg'
import image3 from '../../Assests/image3.jpg'
import image4 from '../../Assests/image4.jpg'
import image5 from '../../Assests/image5.jpg'
import image6 from '../../Assests/image6.jpg'
import image7 from '../../Assests/image7.jpg'
import image8 from '../../Assests/image8.jpg'
import image9 from '../../Assests/image9.jpg'

//Lets Create An Array thats is gonna 
//contain all destination data and we loop through

const middle =[
  {
    id: 1,
    img: image2,
    name: 'Neuschwanstein',
    location: 'Poland',
    rating: 4.3,
  },
  {
    id: 2,
    img: image3,
    name: 'Seychelles',
    location: 'Itlay',
    rating: 4.7,
  },
  {
    id: 3,
    img: image4,
    name: 'Desert Death Valley',
    location: 'United States',
    rating: 4.6,
  },
  {
    id: 4,
    img: image5,
    name: 'Dinan City',
    location: 'France',
    rating: 4.2,
  },
  {
    id: 5,
    img: image6,
    name: 'Walchensee Island',
    location: 'Greece',
    rating: 4.8,
  },
  {
    id: 6,
    img: image7,
    name: 'Berlin Street',
    location: 'Germany',
    rating: 4.6,
  },
  {
    id: 7,
    img: image8,
    name: 'Tower Bridge',
    location: 'United Kingdom',
    rating: 4.5,
  },
  {
    id: 8,
    img: image9,
    name: 'Iceland',
    location: 'Denmark',
    rating: 4.9,
  },
]

const Middle = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="middle section container">
      <div className="secContainer">
        <div className="secTitle">
           <h3 data-aos="fade-up">Search For Your Next Journey</h3>
        </div>

        <div className="searchField grid">
        <div className="inputField flex" data-aos="fade-up">
            <MdLocationPin className="icon"/>
            <input type="text" placeholder="Destination"/>
          </div>

          <div className="inputField flex" data-aos="fade-up">
             <BsFillCalendarDateFill className="icon"/>
             <input type="text" placeholder="Check-in date"/>
          </div>

          <div className="inputField flex" data-aos="fade-up">
             <BsFillCalendarDateFill className="icon"/>
            <input type="text" placeholder="Check-out date"/>
          </div>

          <div className="inputField flex" data-aos="fade-up">
            <BsFillCreditCardFill className="icon"/>
            <input type="text" placeholder="Budget"/>
          </div>

          <button className="btn flex" data-aos="fade-up">
            <BiSearchAlt className="icon"/>
             Search
          </button>
        </div>
      </div>

      {/* <div className="secMenu">
        <ul className="flex">
          <li className="active">All</li>
          <li>Beach</li>
          <li>Nature</li>
          <li>Park</li>
          <li>Mountain</li>
        </ul>
      </div> */}

      <div className="destinationContainer grid">
        {middle.map((middle)=>{
          return(
            <div className="singleDestination" key={middle.id}
            data-aos="fade-up">
            <div className="imgDiv" data-aos="fade-up">
              <img src={middle.img} alt="Middle Image" />
              <div className="descInfo flex">
                <div className="text">
                  <span className="name">{middle.name}
                  </span>
                  <p className="flex">
                    <TiLocation className="icon"/>
                    {middle.location}</p>
                </div>
                <span className="rating">
                  {middle.rating}
                </span>
              </div>
            </div>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Middle 

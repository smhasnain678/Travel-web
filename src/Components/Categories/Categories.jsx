import React, {useEffect} from 'react'
import './Categories.css'

import image1 from '../../Assests/image19.jpg'
import image2 from '../../Assests/image20.jpg'
import image3 from '../../Assests/image21.jpg'
import image4 from '../../Assests/image22.jpg'
import image5 from '../../Assests/image23.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'


const category = [
  {
    id: 1,
    img: image1,
    name: "Destinations overview"
  },
  {
    id: 2,
    img: image2,
    name: "Hotel overview"
  },
  {
    id: 3,
    img: image3,
    name: "Beaches overview"
  },
  {
    id: 4,
    img: image4,
    name: "Restaurant overview"
  },
  {
    id: 5,
    img: image5,
    name: "Things to do overview"
  }
]

const Categories = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="category container">
      <div className="secContainer">
        <div className="textDiv">
          <h3  data-aos="fade-up">Explore all of the Best categories</h3>
          <div className="categoryContainer grid">
            {category.map((category) =>{
              return(
                <div className="singleCategory" key = {category.id}
                data-aos="fade-up">
                <div className="imgDiv">
                  <img src={category.img} alt="Category image" />
  
                  <div className="cateInfo">
                    <div className="text">
                      <span className="name">
                        {category.name}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories

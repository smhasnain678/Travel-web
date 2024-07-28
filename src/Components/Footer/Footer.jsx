import React,{useEffect} from 'react'
import './Footer.css'

import { FaServicestack } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  return (
    <div className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo"  data-aos="fade-up">
          <FaServicestack className="icon"/>
          <h3>TopiaTrek</h3>
          </div>
          <div className="socials flex"  data-aos="fade-up">
          <FaFacebookF  className="icon"/>
          <FaSquareXTwitter className="icon"/>
          <FaLinkedin className="icon"/>
          </div>
        </div>

          <div className="footerLinks"  data-aos="fade-up">
            <span className="linkTitle">My Account</span>
            <li><a href="">Information</a></li>
            <li><a href="">Explore</a></li>
            <li><a href="">Credits</a></li>
            <li><a href="">Blogs</a></li>
          </div>

          <div className="footerLinks"  data-aos="fade-up">
            <span className="linkTitle">Helpful Links</span>
            <li><a href="">Shedule</a></li>
            <li><a href="">Affiliates</a></li>
            <li><a href="">Return</a></li>
            <li><a href="">Privacy Policy</a></li>
          </div>

          <div className="footerLinks"  data-aos="fade-up">
          <span className="linkTitle">Contact </span>
          <span className="phone">+451 088 730</span>
          <span className="email">topiatrek@gmail.com</span>
          </div>
      </div>
    </div>
  )
}

export default Footer  

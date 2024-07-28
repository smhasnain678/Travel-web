import React, { useState } from "react";
import "./Navbar.css";
import { FaServicestack } from "react-icons/fa";
import { GoXCircleFill } from "react-icons/go";
import { VscListFlat } from "react-icons/vsc";

import {Link} from 'react-router-dom'; 

const Navbar = () => {

  //state to track and update navbar
  const [navBar, setNavBar] = useState('menu');

  //function to show navbar
  const showNavBar = () => {
    setNavBar("menu showNavbar");
  }

  //function to remove navbar
  const removeNavBar = () => {
    setNavBar("menu");
  }

  return (
    <div className="navBar">
      <Link to="/"><div className="logoDiv">
      <FaServicestack className="icon"/>
      <h3>Topia<span>Trek</span></h3>
      </div>
      </Link>
      <div className={navBar}>
        <ul>
          <li className="navList">
          Destinations</li>
          <li className="navList">
          Reviews</li>
          <li className="navList">
          Category</li>
          <li className="navList">
          About Us</li>
        </ul>

        {/*icon to remove navbar*/}
        <GoXCircleFill className="icon
        closeIcon" onClick={removeNavBar}/>
      </div>
      <button className="signUpBtn btn">Sign Up</button>
        {/*icon to toggle navbar*/}
        <VscListFlat className="icon menuIcon"
        onClick={showNavBar}/>
    </div>
  );
};

export default Navbar;

// function CustomLink({ href, children,...props}){
//   const path = window.location.pathname
//   return(
//     <li className={path === href ? "active"}>
//       <a href={href} {...props}>{children}</a>
//     </li>
//   ) 
// }

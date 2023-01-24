import React from 'react'
import './navbar.css';
import {FaFacebookSquare , FaInstagramSquare , FaYoutubeSquare } from "react-icons/fa";
function Navbar() {
  return (
    <div>
    <nav className="main-nav">
        <div className="logo">
        <h2 >
       <span>G</span>reenie_
       <span>G</span>reenie
        </h2>
        </div>
        <div className="menu-link">
            <ul>
                <li>
                    <a href=" ">Home</a>
                </li>
                <li>
                    <a href=" ">Services</a>
                </li>
                <li>
                    <a href=" ">About</a>
                </li>
                <li>
                    <a href=" ">Contact</a>
                </li>
            </ul>
        </div>
        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li>
               <a href="https://www.w3schools.com/csS/css3_flexbox.asp"><FaFacebookSquare className="facebook"/> </a>
                </li>
                <li>
                <a href="https://www.w3schools.com/csS/css3_flexbox.asp"> <FaInstagramSquare className="instagram" /> </a>
                </li>
                <li>
                <a href="https://www.youtube.com/watch?v=8AJ3Kcz5FsM"><FaYoutubeSquare className="youtube"/> </a>
                </li>
            </ul>
           
        </div>
        </nav>

        <section className='Hero-section'>
            Welcome to green world!!
        </section>
        </div>
  )
}
export default Navbar;

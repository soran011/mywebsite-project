import React, {useState, useEffect} from "react";
import { FaBars } from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import { Link  as Scroll } from "react-scroll";
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import "./Navbar.scss";

const Navbar = ({ toggle }) => {

  const toggleHome = ()=> {
    scroll.scrollToTop()
  }
  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <div className="nav">
        <div className="nav__container">
          <Router className="nav__contianer--logo" to="home" to='/' onClick={toggleHome}>
            MyWebsite
          </Router>
          <div className="nav__container--icon" onClick={toggle}>
            <FaBars />
          </div>
          <div className="nav__container--menu">
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="about"
              smooth={true} duration={500} spy={true} exact='true'>
                About
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="discover" smooth={true} duration={500} spy={true} exact='true'>
                Discover
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="services" smooth={true} duration={500} spy={true} exact='true'>
                Services
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="signup" smooth={true} duration={500} spy={true} exact='true'>
                Sign Up
              </Scroll>
            </div>
          </div>
          <div className="nav__container--btn">
          <Router className="nav__container--btn__link" to="/signin">Sign In</Router>

          </div>
        </div>
      </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

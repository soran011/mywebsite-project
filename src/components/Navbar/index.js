import React from "react";
import { FaBars } from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import { Link  as Scroll } from "react-scroll";
import "./Navbar.scss";

const Navbar = ({ toggle }) => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <Router className="nav__contianer--logo" to="/">
            differential
          </Router>
          <div className="nav__container--icon" onClick={toggle}>
            <FaBars />
          </div>
          <div className="nav__container--menu">
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="about">
                About
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="discover">
                Discover
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="services">
                Services
              </Scroll>
            </div>
            <div className="nav__container--menu__item">
              <Scroll className="nav__container--menu__item--link" to="signup">
                Sign Up
              </Scroll>
            </div>
          </div>
          <div className="nav__container--btn">
          <Router className="nav__container--btn__link" to="/signin">Sign In</Router>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

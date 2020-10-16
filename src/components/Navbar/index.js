import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav__container">
          <Link className="nav__contianer--logo" to="/">
            differential
          </Link>
          <div className="nav__container--icon">
            <FaBars />
          </div>
          <div className="nav__container--menu">
            <div className="nav__container--menu__item">
              <Link className="nav__container--menu__item--link" to="about">
                About
              </Link>
            </div>
            <div className="nav__container--menu__item">
              <Link className="nav__container--menu__item--link" to="discover">
                Discover
              </Link>
            </div>
            <div className="nav__container--menu__item">
              <Link className="nav__container--menu__item--link" to="services">
                Services
              </Link>
            </div>
            <div className="nav__container--menu__item">
              <Link className="nav__container--menu__item--link" to="signup">
                Sign Up
              </Link>
            </div>
          </div>
          <div className="nav__container--btn">
          <Link className="nav__container--btn__link" to="/signin">Sign In</Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

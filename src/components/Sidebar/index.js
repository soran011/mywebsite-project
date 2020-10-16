import React from 'react'
import { FaTimes } from "react-icons/fa";
import { Link as Router } from "react-router-dom";
import { Link  as Scroll } from "react-scroll";
import './Sidebar.scss';
import {SidebarContainer} from './SidebarElements';



function Sidebar({isOpen, toggle}) {

    
    

    return (
        <SidebarContainer className="sidebarContainer" isOpen={isOpen} onClick={toggle}>
            <div className="sidebarContainer__icon" onClick={toggle}>
                <div className="sidebarContainer__icon--close"><FaTimes/></div>
            </div>
            <div className="sidebarContainer__wrapper">
                <div className="sidebarContainer__wrapper--menu">
                    <Scroll className="sidebarContainer__wrapper--menu__link" to="about">
                        About
                    </Scroll>
                    <Scroll className="sidebarContainer__wrapper--menu__link" to="discover">
                        Discover
                    </Scroll>
                    <Scroll className="sidebarContainer__wrapper--menu__link" to="services">
                        Services
                    </Scroll>
                    <Scroll className="sidebarContainer__wrapper--menu__link" to="signup">
                        Sign Up
                    </Scroll>
                </div>
                <div className="sidebarContainer__wrapper--btn">
                     <Router className="sidebarContainer__wrapper--btn__link" to="/signin">Sign In</Router>   
                </div>
            </div>
        </SidebarContainer>
    )
}

export default Sidebar;

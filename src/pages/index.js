import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar/index'
import Hero from '../components/Hero';
import Info from '../components/Info';
import { homeObjOne, homeObjTwo, homeObjThree} from '../components/Info/Data';
import Services from '../components/Services';
import Footer from '../components/Footer';

function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    
    return (
        <>
         <Sidebar isOpen={isOpen} toggle={toggle}/>
         <Navbar toggle={toggle}/>   
         <Hero />
         <Info {...homeObjOne}/>
         <Info {...homeObjTwo}/>
         <Services />
         <Info {...homeObjThree}/>
         <Footer />
        </>
    )
}

export default Home;

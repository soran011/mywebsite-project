import React, {useState} from 'react';
import './Hero.scss';
import Video from '../../videos/video.mp4';
import {VideoBackground} from './HeroElements';
import {ArrowForward, ArrowRight, Button} from './HeroElements';

const Hero = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <div className="heroContainer" id='home'>
            <div className="heroContainer__background">
                <VideoBackground  autoPlay loop muted src={Video} type='video/mp4' />
            </div>
            <div className="heroContainer__content">
                <h1>Welcome To My Website</h1>
                <p>I built this Responsive Webiste to demonstrate my skills as a front-end developer!</p>
                <div className="heroContainer__content--wrapper">
                    <Button className="heroContainer__content--wrapper__btn" to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    smooth={true} duration={500} spy={true} exact='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;

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
        <div className="heroContainer">
            <div className="heroContainer__background">
                <VideoBackground  autoPlay loop muted src={Video} type='video/mp4' />
            </div>
            <div className="heroContainer__content">
                <h1>Welcome To My Website</h1>
                <p>Contact us today to check our products and services</p>
                <div className="heroContainer__content--wrapper">
                    <Button className="heroContainer__content--wrapper__btn" to="signup" 
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                        Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Hero;

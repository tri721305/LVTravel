import React, {Component, useState} from 'react'
import Video from '../../videos/Space.mp4'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './heroelements'
import {Button} from '../button/buttonelements'
// import SlidebackgroundTest from '../slideanimation/slide'
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover=()=>{
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"></VideoBg>
                {/* <SlidebackgroundTest /> */}
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome</HeroH1>
                <HeroP>Sign up for a new account today to use  .. .. . . .. . . .. </HeroP>
                <HeroBtnWrapper>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Get started { hover? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection

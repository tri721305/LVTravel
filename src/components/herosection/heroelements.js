import styled from 'styled-components'
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'



export const HeroContainer = styled.div`
    background: #0c0c0c;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    /* width: 100%; */
    display: flex;
    

`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    position: absolute;
    z-index: 3;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const HeroH1 = styled.h1`
    font-size: 48px;
    color: #fff;
    text-align: center;

    @media screen and(max-width:768px){
        font-size: 40px;
        /* display: none; */
    }

    @media screen and( max-width:400px){
        font-size: 32px;
        /* display: none; */
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and(max-width: 768px){
        font-size: 24px;
    }

    @media screen and(max-width: 400px){
        font-size: 18px;
    }
`

export const HeroBtnWrapper = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    margin-top: 32px;
`

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

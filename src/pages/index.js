import React, {useState} from 'react'
import Sidebar from '../components/sidebar/index'
import Navbar from  '../components/navbar/index'
import HeroSection from '../components/herosection'
import InfoSection from '../components/infosection'
import { homeObjOne, homeObjTwo, homeObjThree } from '../components/infosection/data'
import Service from '../components/service/index'
import Footer from '../components/footer'
// import {Button} from '../components/button/buttonelements'
const Home = () => {
    const [isOpen, setStateisOpen] = useState(false)
    const toggle = () => {
        setStateisOpen(!isOpen)
    }
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Service />
            <Footer />

        </>
    )
}

export default Home

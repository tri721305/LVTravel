import React, {Component, useState} from 'react'
import SlidebackgroundTest from '../slideanimation/slide'
import Navbar from '../navbar/index'
import Sidebar from '../sidebar/index'
const HomeSlide = () => {

    const [isOpen, setStateisOpen] = useState(false)
    const toggle = () => {
        setStateisOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <SlidebackgroundTest />
        </>
    )
}

export default HomeSlide

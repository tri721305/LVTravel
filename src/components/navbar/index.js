import React, {Component, useState, useEffect} from 'react' ;
import {FaBars} from 'react-icons/fa'
import { Nav, NavBarContainer, NavLogo, MobileIcon, NavLinks, NavMenu, NavItem, NavBtn, NavBtnLink} from './navbarelement'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] =useState(false);
    const changeNav = () => {
        if(window.scrollY>=80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }
    return(
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to='/destination' onClick={toggleHome}>Goz</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='about'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                           
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='plan'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Plan</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='destination'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Destination</NavLinks>
                        </NavItem>
                        {/* <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem> */}
                        <NavItem>
                            <NavLinks to='signup'
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}
                            >Sign up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
            </IconContext.Provider> 
        </>
    )

}



export default Navbar;
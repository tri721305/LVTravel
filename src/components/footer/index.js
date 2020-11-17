import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {FooterContainer,
        FooterWrap,
        FooterLinkContainer,
        FooterLinkWrapper,
        FooterLinkItem,
        FooterLinkTitle,
        FooterLink,
        SocialMedia,
        SocialMediaWrap,
        SocialLogo,
        WebsiteRight,
        SocialIcon,
        SocialIconLink
} from './footerelements'
import { FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinkContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of services</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of services</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                    <FooterLinkWrapper>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>How it works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Term of services</FooterLink>
                        </FooterLinkItem>
                        <FooterLinkItem>
                            <FooterLinkTitle>About us</FooterLinkTitle>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                            <FooterLink to='/signin'>LinkedIn</FooterLink>
                        </FooterLinkItem>
                    </FooterLinkWrapper>
                </FooterLinkContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>Goz</SocialLogo>
                        <WebsiteRight>Goz © {new Date().getFullYear()} All rights reserved.</WebsiteRight>
                        <SocialIcon>
                            <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer

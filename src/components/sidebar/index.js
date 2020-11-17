import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SideBtnWrap, SidebarRoute, SidebarMenu} from './sidebarelements'
const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="/about"         onClick={toggle}>About</SidebarLink>
                    <SidebarLink to="/discover"      onClick={toggle}>Discover</SidebarLink>
                    <SidebarLink to="/destination"   onClick={toggle}>Destinations</SidebarLink>
                    <SidebarLink to="/signup"        onClick={toggle}>Sign up</SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to="/signin">Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}
export default Sidebar;
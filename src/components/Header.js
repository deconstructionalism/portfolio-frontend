import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

// const fadeOnHover = keyframes`
//   from {
//     transform: rotate(0deg);
//   }

//   to {
//     transform: rotate(360deg);
//   }
// `;


const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.Header.background};
  height: ${props => props.theme.Header.height};
  // padding-left: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`
const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.Header.color};
  transition: color 0.3s ease;
  text-decoration: none;
  padding-left: 20px;
  padding-right: 20px;
  letter-spacing: 4px;
  font-family: ${props => props.theme.Header.fontFamily};
  font-size: ${props => props.theme.Header.fontSize};
  &.selected {
    color: ${props => props.theme.Header.cSelectedColor};
  }
  &:hover:not(.selected) {
    color: ${props => props.theme.Header.hoverBackground};
  }
`
export default class Header extends Component {
  render() {
    return (
      <HeaderMenu>
        <StyledNavLink to="/About" activeClassName="selected">ABOUT</StyledNavLink>
        <StyledNavLink to="/experience" activeClassName="selected">EXPERIENCE</StyledNavLink>
        <StyledNavLink to="/code" activeClassName="selected">CODE</StyledNavLink>
        <StyledNavLink to="/blog" activeClassName="selected">BLOG</StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="selected">CONTACT</StyledNavLink>
      </HeaderMenu>
    )
  }
}

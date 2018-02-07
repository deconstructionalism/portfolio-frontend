import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const HeaderMenu = styled.div`
  display: flex;
  background-color: ${props => props.theme.Header.background};
  height: ${props => props.theme.Header.height};
  padding-left: 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`
const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.Header.color};
  text-decoration: none;
  padding: 10px;
  font-family: ${props => props.theme.Header.fontFamily};
  &.selected {
    color: ${props => props.theme.Header.cSelectedColor};
  }
  &:hover {
    background: ${props => props.theme.Header.hoverBackground};
  }
`
export default class Header extends Component {
  render() {
    return (
      <HeaderMenu>
        <StyledNavLink to="/aboutme" activeClassName="selected">ABOUT ME</StyledNavLink>
        <StyledNavLink to="/experience" activeClassName="selected">EXPERIENCE</StyledNavLink>
        <StyledNavLink to="/blog" activeClassName="selected">BLOG</StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="selected">CONTACT</StyledNavLink>
      </HeaderMenu>
    )
  }
}

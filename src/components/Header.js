import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'

const HeaderMenu = styled.div`
  display: flex;
  background-color: ${props => props.theme.header.bgColor};
  height: ${props => props.theme.header.height};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 10;
`
const StyledNavLink = styled(NavLink)`
  color: ${props => props.theme.header.color};
  text-decoration: none;
  padding: 10px 10px 10px 10px;
  font-family: 'Space Mono', monospace;
  &.selected {
    color: ${props => props.theme.header.selectedColor};
  }
  &:hover {
    background: ${props => props.theme.header.hoverBgColor};
  }
`
export default class Header extends Component {
  render() {
    return (
      <HeaderMenu>
        <StyledNavLink to="/aboutme" activeClassName="selected">ABOUT ME</StyledNavLink>
        <StyledNavLink to="/experience" activeClassName="selected">EXPERIENCE</StyledNavLink>
        <StyledNavLink to="/contact" activeClassName="selected">CONTACT</StyledNavLink>
      </HeaderMenu>
    )
  }
}

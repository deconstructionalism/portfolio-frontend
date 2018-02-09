import React, { Component } from 'react'

import styled from 'styled-components'

const FooterBar = styled.div`
  display: flex;
  background-color: #080808;
  height: 500px;
  width: 100%;
  bottom: 0;
  position: fixed;
  z-index: -1;
  a {
    color: white;
  }
`
const IconBar = styled.div`
    color: #FFFBED;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
`

export default class Footer extends Component {
  render() {
    return (
      <FooterBar> 
        <IconBar>
          <i class="fas fa-5x fa-phone-square"></i>
          <i class="fas fa-5x fa-envelope-square"></i>
          <i class="fab fa-5x fa-github-square"></i>
        </IconBar>
      </FooterBar>
    )
  }
}

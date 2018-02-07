import React, { Component } from 'react'

import styled from 'styled-components'

const FooterBar = styled.div`
  display: flex;
  background-color: black;
  height: 40px;
  width: 100%;
  bottom: 0;
  a {
    color: white;
  }
`

export default class Footer extends Component {
  render() {
    return (
      <FooterBar> 
        <a> hello </a>
      </FooterBar>
    )
  }
}

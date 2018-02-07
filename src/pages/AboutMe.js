import React, { Component } from 'react'
import Avatar from '../components/Avatar'
import topsplash from '../static/topsplash.jpg'

import styled from 'styled-components'
import Parallax from '../parallax'

const Layout = styled.div`
  display: grid;
  grid-template-columns: [topsplash-start lowercontent-start] auto [avatar] auto auto [lowercontent-end topsplash-end];
  justify-content: space-between;
  grid-template-rows: [topsplash-start] 330px [avatar] 110px [lowercontent-start] auto ;
  height: 1000px;
`



const TopSplash = styled.div`
  background-image: url(${topsplash});
  height: 400px;
  width: 100%;
  position: fixed;
  margin-top: ${props => props.marginTop}px;
  padding-left: 20px;
  grid-area: topsplash;
  * {
    color: white;
    opacity: 0.8;
  }
`

const StyledAvatar = styled(Avatar)`
  grid-area: avatar;
  z-index: 3;
`

const LowerContent = styled.div`
  background-color: white;
  grid-area: lowercontent;
  z-index: 2;
`



export default class AboutMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      scrollTop: 40
    }
    this.parallax = new Parallax(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', () => {
      let scrollTop = document.documentElement.scrollTop * - 0.5 + 40
      this.setState({scrollTop})
    }, true)
  }

  componentWillUnmount() {
    // window.removeEvent
  }
  
  
  render() {
    
    return (
      <Layout>
        <TopSplash marginTop={this.state.scrollTop}>
            <h1>Landing Page</h1>
        </TopSplash>
        <StyledAvatar />
        <LowerContent />
      </Layout>
    )
  }
}



import React, { Component } from 'react'
import Avatar from '../components/Avatar'

import { withTheme } from 'styled-components'
import topsplash from '../static/images/topsplash.jpg'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: [topsplash-start lowercontent-start] auto [avatar] auto auto [lowercontent-end topsplash-end];
  justify-content: space-between;
  grid-template-rows: [topsplash-start] ${props => props.theme.About.avatarGridTop} [avatar-start] ${props => props.theme.About.avatarGridHalf} [lowercontent-start] ${props => props.theme.About.avatarGridHalf} [avatar-end] auto [lowercontent-end] 500px ;
  height: 2000px;
  width: 100%;
`
const TopSplash = styled.div`
  background-image: url(${topsplash});
  background-size: cover;
  margin-top: ${props => props.marginTop};
  height: ${props => props.theme.About.topsplashHeight};
  width: 100%;
  position: fixed;
  // padding-left: 20px;
  grid-area: topsplash;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: #FFFBED;
    font-size: 150px;
    font-family: 'Work Sans', sans-serif;
    margin-top: 0px;
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
const BigText = styled.div`
  position: absolute;
  h1 {
    color: #FFFBED;
    font-size: 150px;
    font-family: 'Work Sans', sans-serif;
    margin-top: 0px;
  }
`

const Initials = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${props => props.theme.About.topsplashHeight};
  h1 {
    color: rgba(0,0,0,0);
    font-size: 150px;
    font-family: 'Work Sans', sans-serif;
    margin-top: ${props => props.marginTop};
    a {
      color: red;
    }
  }
`

class About extends Component {
  constructor(props) {
    console.log(props)
    super(props)
    this.state = {
      topSplashMarginTop: props.theme.About.marginTop
    }

    this.eventHandlers = {
      topSplashMarginTopHandler: () => {
        let topSplashMarginTop = `${document.documentElement.scrollTop * - 0.5 + 60}px`
        this.setState({topSplashMarginTop})
      }
    }
  }

  componentDidMount () {
    for(let handler of Object.values(this.eventHandlers)) {
      window.addEventListener('scroll', handler, true)
    }
  }

  componentWillUnmount() {
    for(let handler of Object.values(this.eventHandlers)) {
      window.removeEventListener('scroll', handler, true)
    }
  }

  render() {
    
    return (
      <Layout>
        <TopSplash marginTop={this.state.topSplashMarginTop}>
            <h1>Arjun Ray</h1>
            {/* <h2>Web Developer // Data Scientist</h2> */}
        </TopSplash>
        {/* <BigText>
          <h1>Arjun Ray</h1>
        </BigText> */}
        {/* <Initials font>
          <h1><a>A</a>rjun <a>R</a>ay</h1>
        </Initials> */}
        <StyledAvatar />
        <LowerContent />
      </Layout>
    )
  }
}

export default withTheme(About)
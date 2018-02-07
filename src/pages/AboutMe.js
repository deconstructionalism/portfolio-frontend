import React, { Component } from 'react'
import Avatar from '../components/Avatar'

import { withTheme } from 'styled-components'
import topsplash from '../static/images/topsplash.jpg'
import styled from 'styled-components'

const Layout = styled.div`
  display: grid;
  grid-template-columns: [topsplash-start lowercontent-start] auto [avatar] auto auto [lowercontent-end topsplash-end];
  justify-content: space-between;
  grid-template-rows: [topsplash-start] ${props => props.theme.AboutMe.avatarGridTop} [avatar] ${props => props.theme.AboutMe.avatarGridBottom} [lowercontent-start] ;
  height: 1000px;
`
const TopSplash = styled.div`
  background-image: url(${topsplash});
  margin-top: ${props => props.marginTop};
  height: ${props => props.theme.AboutMe.topsplashHeight};
  width: 100%;
  position: fixed;
  padding-left: 20px;
  grid-area: topsplash;
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
class AboutMe extends Component {
  constructor(props) {
    super(props)
    this.state = {
      topSplashMarginTop: props.theme.AboutMe.marginTop
    }

    this.eventHandlers = {
      topSplashMarginTopHandler: () => {
        let topSplashMarginTop = `${document.documentElement.scrollTop * - 0.5 + 40}px`
        this.setState({topSplashMarginTop})
      }
    }
  }

  componentDidMount () {
    for(const[key, handler] of Object.entries(this.eventHandlers)) {
      window.addEventListener('scroll', handler, true)
    }
  }

  componentWillUnmount() {
    for(const[key, handler] of Object.entries(this.eventHandlers)) {
      window.removeEventListener('scroll', handler, true)
    }
  }

  render() {
    
    return (
      <Layout>
        <TopSplash marginTop={this.state.topSplashMarginTop}>
            <h1>Arjun Ray</h1>
            <h2>Web Developer // Data Scientist</h2>
        </TopSplash>
        <StyledAvatar />
        <LowerContent />
      </Layout>
    )
  }
}

export default withTheme(AboutMe)
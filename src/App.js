import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Blog from './pages/Blog'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
// import './static/styles/App.css'

const headerHeight = 40
const topsplashHeight = 200
const avatarSize = 200
const avatarBorder = 20

const theme = {
  Header: {
    height: `${headerHeight}px`,
    background: 'black',
    color: 'white',
    hoverBackground: 'grey',
    cSelectedColor: 'red',
    fontFamily: "'Titillium Web', sans-serif",
  },
  AboutMe: {
    topsplashHeight: `${topsplashHeight}px`,
    marginTop: `${headerHeight}px`,
    avatarGridTop: `${headerHeight + topsplashHeight - (avatarSize + 2 * avatarBorder) / 2}px`,
    avatarGridBottom: `${(avatarSize + 2 * avatarBorder)}px`
  },
  Experience: {
    marginTop: `${headerHeight}px`,
  },
  Contact: {
    marginTop: `${headerHeight}px`,
  },
  Blog: {
    marginTop: `${headerHeight}px`,
  },
  Avatar: {
    size: `${avatarSize}px`,
    borderWidth: `${avatarBorder}px`,
    borderColor: 'white',
    borderStyle: 'solid'
  }

}

const NotFound = () => (
  <div> 404 NOT FOUND! </div>
) 

const framed = (FramedComponent) => {
  return (
    <div>
      <Header />
      <FramedComponent />
      <Footer />
    </div>
  )
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={() => framed(AboutMe)} />
                <Route exact path="/aboutme" component={() => framed(AboutMe)} />
                <Route exact path="/experience" component={() => framed(Experience)} />
                <Route exact path="/contact" component={() => framed(Contact)} />
                <Route path="/blog" component={() => framed(Blog)} />
                <Route component={NotFound} />
              </Switch>
            </div>
        </Router>
      </ThemeProvider>
    )
  }
}

/*
Z indices
HEADER: 10
AVATAR: 3
LOWERCONTENT: 2
*/
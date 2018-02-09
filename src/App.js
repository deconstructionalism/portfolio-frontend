import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Code from './pages/Blog'
import Blog from './pages/Blog'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';
import './static/styles/App.css'

const headerHeight = 60
const topsplashHeight = 500
const avatarSize = 200
const avatarBorder = 20

const theme = {
  Header: {
    height: `${headerHeight}px`,
    fontSize: `${headerHeight * 0.5}px`,
    background: 'black',
    color: 'white',
    hoverBackground: 'grey',
    cSelectedColor: 'darkturquoise',
    fontFamily: "'Titillium Web', sans-serif",
  },
  About: {
    topsplashHeight: `${topsplashHeight}px`,
    marginTop: `${headerHeight}px`,
    avatarGridTop: `${headerHeight + topsplashHeight - (avatarSize + 2 * avatarBorder) / 2}px`,
    avatarGridHalf: `${(avatarSize + 2 * avatarBorder) / 2}px`
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
                <Route exact path="/" component={() => framed(About)} />
                <Route exact path="/About" component={() => framed(About)} />
                <Route exact path="/experience" component={() => framed(Experience)} />
                <Route exact path="/contact" component={() => framed(Contact)} />
                <Route exact path="/code" component={() => framed(Code)} />
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
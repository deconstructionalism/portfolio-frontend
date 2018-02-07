import React, { Component } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AboutMe from './pages/AboutMe'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import { ThemeProvider } from 'styled-components';

const theme = {
  header: {
    height: '40px',
    bgColor: 'black',
    color: 'white',
    hoverBgColor: 'grey',
    selectedColor: 'red'
  },

}

const NotFound = () => (
  <div> 404 NOT FOUND! </div>
) 

const Main = ({ match }) => (
  <div>
    <Header />
    <Route path={`${match.url}/aboutme`} component={AboutMe}/>
    <Footer />
  </div>
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

const Contact = () => <div>sdsdsd</div>
const Experience = () => <div>sdsdsd</div>

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Router>
            <div className="App">
              <Switch>
                <Route exact path="/" component={() => framed(AboutMe)} />
                <Route path="/aboutme" component={() => framed(AboutMe)} />
                <Route path="/experience" component={() => framed(Experience)} />
                <Route path="/contact" component={() => framed(Contact)} />
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
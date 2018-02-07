import React from 'react'
import styled from 'styled-components'

function Parallax(context) {
  // set up persistent scrollTop var and add scroll listener
  this.scrollTop = document.documentElement.scrollTop
  const onScrollHandler = () => {
    this.scrollTop = document.documentElement.scrollTop
  }
  window.addEventListener('scroll', onScrollHandler, true)

  // save 'this' from calling Component for React Component class methods
  this.context = context

  // method to add Component style trajectories as a function of ScrollTop
  this.addComponent = (Component, trajectory) => {
    const name = Component.name
    const styleDict = {}
    for (const [key, val] of Object.entries(trajectory)) {
      const value = val(this.scrollTop)
      const stateName = `${key}${name}`
      this.context.setState(
        {[stateName]: value},
        () => styleDict[key] = this.context.state[stateName]
      )
    }
    const ComponentWithProps = React.cloneElement(
      Component,
      {style: styleDict}
    )
    return ComponentWithProps
  
  }

  this.stopListening = () => {
    window.removeEventListener('scroll', onScrollHandler, true)
  }
}

export default Parallax
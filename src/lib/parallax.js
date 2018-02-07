import React from 'react'

function Parallax(context) {

  this.trajectories = []

  // set up persistent scrollTop var and add scroll listener
  const onScrollHandler = () => {
    const scrollTop = document.documentElement.scrollTop
    for(let t of this.trajectories) {
      const {start, end, style, stateName, transform, name} = t
      if(scrollTop > start && scrollTop <= end) {
        context.setState(prevState => {
          const styleState = {[name]: {[style]: transform(scrollTop) }}
          const nextState = Object.assign({}, prevState, styleState)
          return nextState
        })
      }
    }
  }
  window.addEventListener('scroll', onScrollHandler, true)

  // method to add Component style trajectories as a function of ScrollTop
  this.addComponent = (Component, trajectories) => {
    const stylesDict = {}
    for(let t of trajectories) {
      const {start, end, style, transform, name} = t
      const stateName = `${style}${name}`
      const traj = Object.assign(t, {stateName})
      this.trajectories.push(traj)

      const scrollTop = document.documentElement.scrollTop
      context.setState(prevState => {
        const styleState = {[name]: {[style]: transform(scrollTop) }}
        const nextState = Object.assign({}, prevState, styleState)
        return nextState
      }, () => {
        stylesDict[style] = context.state[stateName]
      })
    }
  }

  this.stopListening = () => {
    window.removeEventListener('scroll', onScrollHandler, true)
  }
}
export default Parallax


/*
    this.parallax = new Parallax(this)
    this.parallax.addComponent(LowerContent, [{
      name: 'LowerContent',
      start: 0,
      end: Infinity,
      style: "marginTop",
      transform: (scrolltop) => `${scrolltop * - 0.5 + 40}px`
    }])



            <TopSplash style={{...this.state.LowerContent}}>


  */
import React from 'react'
import { connect, dispatch } from 'react-redux'
import DumbComponent from '../components/DumbComponent.jsx'
import WelcomeScreen from '../components/WelcomeScreen'
import GMaps from '../components/GMaps'
import { test } from '../actions/example'
import { nextStep } from '../actions/steps'


let AppContainer = React.createClass({
  render() {
    const { dispatch, foo, step } = this.props
    let component
    console.log(step)
    if (step === 0)
      component =
        <WelcomeScreen
          next={() => dispatch(nextStep())}
        />
    else if (step === 1)
      component =
        <GMaps
          type="origin"
          next={() => dispatch(nextStep())}
        />
    else if (step === 2)
      component =
        <GMaps
          type="destination"
          next={() => dispatch(nextStep())}
        />
    return(
      <div className="app">
        {component}
      </div>
    )
  }
})

function select(state) {
  return state
}

export default connect(select)(AppContainer)

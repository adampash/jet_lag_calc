import React from 'react'
import { connect, dispatch } from 'react-redux'
import DumbComponent from '../components/DumbComponent.jsx'
import WelcomeScreen from '../components/WelcomeScreen'
import GMaps from '../components/GMaps'
import { test } from '../actions/example'
import { nextStep } from '../actions/steps'
import { addOrigin, addDestination } from '../actions/places'


let AppContainer = React.createClass({
  render() {
    const { dispatch, foo, step, places } = this.props
    let component
    if (step === 0)
      component =
        <WelcomeScreen
          next={() => dispatch(nextStep())}
        />
    else if (step === 1)
      component =
        <GMaps
          type="origin"
          handleSelect={(place) => {
            dispatch(addOrigin(place))
            dispatch(nextStep())
          }}
        />
    else if (step === 2)
      component =
        <GMaps
          type="destination"
          handleSelect={(place) => {
            dispatch(addDestination(place))
            dispatch(nextStep())
          }}
        />
    else if (step === 3)
      component =
        <WelcomeScreen
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

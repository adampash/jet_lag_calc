import React from 'react'
import { connect, dispatch } from 'react-redux'
import DumbComponent from '../components/DumbComponent.jsx'
import WelcomeScreen from '../components/WelcomeScreen'
import GMaps from '../components/GMaps'
import FinalStep from '../components/FinalStep'
import { test } from '../actions/example'
import { nextStep } from '../actions/steps'
import { addOrigin, addDestination } from '../actions/places'
import KinjaResizer from '../components/KinjaResizer'



let AppContainer = React.createClass({
  mixins: [KinjaResizer],

  render() {
    const {
      dispatch,
      foo,
      step,
      places
    } = this.props
    let component
    if (step === 0)
      component =
        <WelcomeScreen
          next={() => dispatch(nextStep())}
          resize={this.resize}
        />
    else if (step === 1)
      component =
        <GMaps
          resize={this.resize}
          type="origin"
          handleSelect={(place) => {
            dispatch(addOrigin(place))
            dispatch(nextStep())
          }}
        />
    else if (step === 2)
      component =
        <GMaps
          resize={this.resize}
          type="destination"
          handleSelect={(place) => {
            dispatch(addDestination(place))
            dispatch(nextStep())
          }}
        />
    else if (step === 3)
      component =
        <FinalStep
          resize={this.resize}
          startOver={() => dispatch(nextStep(1))}
          places={places}
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

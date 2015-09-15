import React from 'react'
import Header from './Header'
import BigButton from './BigButton'
import { Timezone } from '../lib/timezone'

const clouds = require('../assets/clouds.svg')
const plane = require('../assets/airplane.svg')

let styles = {
  button: {
    // marginTop: 100
  },
  container: {
  },
  results: {
    fontSize: 34,
    fontFamily: 'ElizabethSerif',
    padding: '10px 30px'
  },
  time: {
    color: 'black',
  },
  clouds: {
    backgroundImage: `url(${clouds})`,
    height: 100,
    display: 'block',
    marginTop: -15,
  },
  plane: {
    width: '70%',
    display: 'block',
    margin: '0 auto'
  }
}

export default class FinalStep extends React.Component {
  renderContent() {
    let { places } = this.props
    let { origin, destination } = places
    let {
      startEating,
      stopEating,
      breakfastTz
    } = Timezone.getTimes(origin, destination)

    return(
      <div>
        To avoid jet lag,<br />
        you should stop eating at
        <div className="time" style={styles.time}>
          {`${stopEating}`}
        </div>
        before your flight. <br />
        <br />
        You should eat your next meal at
        <div className="time" style={styles.time}>
          {`${startEating}`},
        </div>
        which is 8:30 am {breakfastTz},<br />
        breakfast at your destination.<br />
        Bon voyage!
      </div>
    )
  }
  render() {
    let { origin, destination } = this.props.places

    let content
    if (destination.tz) {
      content = this.renderContent()
    } else {
      content = <div className="loading">Loading...</div>
    }

    return(
      <div className="blue" style={styles.container}>
        <Header />
        <div className="results" style={styles.results}>
          {content}
        </div>
        <div className="clouds" style={styles.clouds}>
        </div>
        <div className="button_container">
          <BigButton handleClick={this.props.startOver} text="Start over"
            color="blue"
          />
        </div>
      </div>
    )
  }

}


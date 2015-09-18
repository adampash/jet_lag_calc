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
  button_container: {
    marginTop: -30
  },
  results: {
    fontSize: 30,
    lineHeight: '42px',
    fontFamily: 'ElizabethSerif',
    padding: '10px 30px',
    color: 'black'
  },
  time: {
    color: 'white',
  },
  clouds: {
    backgroundImage: `url(${clouds})`,
    height: 149,
    display: 'block',
    marginTop: 12,
  },
  plane: {
    width: '70%',
    display: 'block',
    margin: '0 auto'
  }
}

export default class FinalStep extends React.Component {
  componentDidMount() {
    this.props.resize()
  }

  componentDidUpdate() {
    this.props.resize()
  }

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
        The day before your arrival,<br />
        stop eating by&nbsp;
        <span className="time" style={styles.time}>
          {`${stopEating}`}.
        </span><br />
        <br />
        Eat your next meal at<br />
        <span className="time" style={styles.time}>
          {`${startEating}`} (8:30 a.m. {breakfastTz}),
        </span><br />
        breakfast at your destination.<br />
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
        <div style={{overflowX: 'hidden', width: '100%'}}>
          <div className="clouds final" style={styles.clouds} />
        </div>
        <div className="button_container" style={styles.button_container}>
          <BigButton handleClick={this.props.startOver} text="Start over"
            color="blue"
          />
        </div>
      </div>
    )
  }

}


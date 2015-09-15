import React from 'react'
import Header from './Header'
import BigButton from './BigButton'
// import moment from 'moment'
import moment from 'moment-timezone'

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
  getBreakfast() {
    let { places } = this.props
    let { origin, destination } = places
    let d = new Date()
    let dateString = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} 08:30 GMT+${destination.tz.gmtOffset/60/60*100}`
    let date = Date.parse(dateString)
    let thisDate = new Date(date)
    let startEating = moment(thisDate).tz(origin.tz.zoneName).format('h:mm a z')
    let stopEating = moment(thisDate.setHours(thisDate.getHours()-14)).tz(origin.tz.zoneName).format('h:mm a z')
    return { startEating, stopEating }
  }

  render() {
    let { places } = this.props
    let { origin, destination } = places

    if (!destination.tz)
      return(
        <div className="loading">Loading</div>
      )

    let { startEating, stopEating } = this.getBreakfast()
    return(
      <div className="blue" style={styles.container}>
        <Header />
        <div className="results" style={styles.results}>
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
          which is 8:30am (breakfast)<br />
          at your destination.<br />
          Bon voyage!
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

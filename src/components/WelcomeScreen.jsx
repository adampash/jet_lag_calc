import React from 'react'
import Header from './Header'
import BigButton from './BigButton'

const clouds = require('../assets/clouds.svg')
const plane = require('../assets/airplane.svg')

let styles = {
  button: {
    // marginTop: 100
  },
  container: {
  },
  clouds: {
    backgroundImage: `url(${clouds})`,
    height: 149,
    display: 'block',
    marginTop: -110,
  },
  plane: {
    width: '70%',
    display: 'block',
    margin: '0 auto'
  }
}

export default class WelcomeScreen extends React.Component {
  render() {
    return(
      <div className="blue" style={styles.container}>
        <Header />
        <img src={plane} style={styles.plane} />
        <div className="clouds" style={styles.clouds}>
        </div>
        <div className="button_container">
          <BigButton handleClick={this.props.next} text="Get started"
            color="blue"
          />
        </div>
      </div>
    )
  }

}

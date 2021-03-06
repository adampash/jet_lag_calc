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
  cloud_container: {
    overflowX: 'hidden',
    width: '100%',
    marginTop: -110
  },
  clouds: {
    backgroundImage: `url(${clouds})`,
    height: 149,
    display: 'block',
    // marginTop: -110,
  },
  plane: {
    width: '70%',
    display: 'block',
    margin: '0 auto'
  }
}

export default class WelcomeScreen extends React.Component {
  resize() {
    console.log('loaded')
    this.props.resize()
  }

  render() {
    return(
      <div className="blue" style={styles.container}>
        <Header />
        <img
          src={plane}
          className="plane"
          style={styles.plane}
          onLoad={this.resize.bind(this)}
        />
        <div style={styles.cloud_container}>
          <div className="clouds" style={styles.clouds} />
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

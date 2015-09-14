import React from 'react'
import Header from './Header'

let styles = {
  button: {
    marginTop: 200
  }
}

export default class GMaps extends React.Component {
  render() {
    let { type } = this.props
    let label
    if (type == 'origin')
      label = "Where are you flying out of?"
    else
      label = "Where are you flying to?"
    return(
      <div className="white">
        <Header />
        <h4>{label}</h4>
        <button style={styles.button} onClick={this.props.next}>
          Get started
        </button>
      </div>
    )
  }

}

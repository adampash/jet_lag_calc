import React from 'react'
import Header from './Header'

let styles = {
  button: {
    marginTop: 200
  },
  label: {
    fontFamily: 'ElizabethSerif',
    fontWeight: 'normal',
    fontSize: 20
  },
  input: {
    padding: 10,
    width: '100%',
    outline: 'none',
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
        <h4 style={styles.label}>{label}</h4>
        <input type="text" placeholder="Location"
          style={{...styles.label, ...styles.input}}
        />
      </div>
    )
  }

}

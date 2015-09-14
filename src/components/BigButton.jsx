import React from 'react'

let styles = {
  button: {
    fontFamily: "ProximaNovaCond",
    fontWeight: 'bold',
    fontSize: 18,
    padding: '8px 30px',
    background: 'none',
    border: '3px solid',
    display: 'block',
    margin: '0 auto',
    outline: 'none',
  },
  blue: '#30BBAD'
}

export default class BigButton extends React.Component {
  render() {
    if (this.props.color === 'blue') {
      styles.button.borderColor = styles.blue
      styles.button.color = styles.blue
    }
    return(
      <button style={styles.button} onClick={this.props.handleClick}>
        {this.props.text}
      </button>
    )
  }

}

import React from 'react'

let styles = {
  button: {
    fontFamily: "ProximaNovaCond",
    fontWeight: 'bold',
    fontSize: 18,
    padding: '8px 30px',
    width: 200,
    height: 50,
    background: 'none',
    border: '2px solid',
    display: 'block',
    margin: '0 auto',
    outline: 'none',
    cursor: 'pointer',
  },
  blue: '#30BBAD'
}

export default class BigButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hover: false
    }
  }
  handleHover() {
    this.setState({hover: true})
  }
  handleOut() {
    this.setState({hover: false})
  }

  render() {
    if (this.state.hover) {
      styles.button.borderColor = styles.blue
      styles.button.color = styles.blue
    } else {
      styles.button.borderColor = 'black'
      styles.button.color = 'black'
    }
    return(
      <button
        style={styles.button}
        onClick={this.props.handleClick}
        onMouseOver={this.handleHover.bind(this)}
        onMouseOut={this.handleOut.bind(this)}
      >
        {this.props.text}
      </button>
    )
  }

}

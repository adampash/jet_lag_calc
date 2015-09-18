import React from 'react'
import Geosuggest from 'react-geosuggest'
import Isvg from 'react-inlinesvg'

require('../stylesheets/LocationForm')

const arrow = require('../assets/arrow.svg')

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

export default class LocationForm extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentDidMount() {
    this.refs.suggest.getDOMNode().children[0].focus()
  }

  handleSelect(e) {
    this.setState({place: e})
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.state.place) return
    if (this.props.type === 'origin')
      this.refs.suggest.update('')
    this.props.handleSelect(this.state.place)
  }

  render() {
    let { type } = this.props
    return(
      <form className="location_form"
        onSubmit={this.handleSubmit.bind(this)}
      >
        <Geosuggest placeholder="Location" ref="suggest"
          style={{...styles.label, ...styles.input}}
          onSuggestSelect={this.handleSelect.bind(this)}
          places={["locality"]}
        />
        <button><Isvg src={arrow} /></button>
      </form>
    )
  }

}

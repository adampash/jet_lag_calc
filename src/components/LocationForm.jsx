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
  handleSelect(e) {
    this.props.handleSelect(e)
    this.refs.suggest.update('')
  }

  componentDidMount() {
    this.refs.suggest.getDOMNode().children[0].focus()
  }

  render() {
    let { type } = this.props
    let label
    if (type == 'origin')
      label = "Where are you flying out of?"
    else
      label = "Where are you flying to?"
    return(
      <div className="location_form">
        <Geosuggest placeholder="Location" ref="suggest"
          style={{...styles.label, ...styles.input}}
          onSuggestSelect={this.handleSelect.bind(this)}
        />
        <button><Isvg src={arrow} /></button>
      </div>
    )
  }

}

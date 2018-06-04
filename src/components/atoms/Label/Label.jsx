import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

function Label(props) {
  return (
    <span className="label">{props.value}</span>
  )
}

Label.propTypes = {
  value: PropTypes.string.isRequired
}

export default Label

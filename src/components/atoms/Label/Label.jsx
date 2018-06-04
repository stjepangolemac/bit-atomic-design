import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

function Label(props) {
  const { value, white } = props;
  let classes = ['label']

  white && classes.push('white-label')

  return (
    <span className={classes.join(' ')}>{value}</span>
  )
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  white: PropTypes.bool
}

export default Label

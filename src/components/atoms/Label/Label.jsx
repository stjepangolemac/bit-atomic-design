import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

function Label(props) {
  const { value, white, large, medium } = props;
  let classes = ['label']

  white && classes.push('white-label')
  large && classes.push('large-label')
  medium && classes.push('medium-label')

  return (
    <span className={classes.join(' ')}>{value}</span>
  )
}

Label.propTypes = {
  value: PropTypes.string.isRequired,
  white: PropTypes.bool,
  large: PropTypes.bool,
  medium: PropTypes.bool
}

export default Label

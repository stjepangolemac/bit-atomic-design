import React from 'react'
import PropTypes from 'prop-types'

import './Panel.css'

function Panel(props) {
  const { className } = props

  return (
    <div className={`panel ${className || ""}`}>
      <div className="inner">
        {props.children}
      </div>
    </div>
  )
}

Panel.propTypes = {
  className: PropTypes.string
}

export default Panel

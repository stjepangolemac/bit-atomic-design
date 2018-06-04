import React from 'react'
import PropTypes from 'prop-types'

import './ToolLink.css'
import Label from '../../atoms/Label'
import ToolImage from '../../atoms/ToolImage'

function ToolLink(props) {
  const { name } = props

  return (
    <div className="tool-link">
      <ToolImage name={name} />
      <Label value={name} />
    </div>
  )
}

ToolLink.propTypes = {
  name: PropTypes.oneOf(
    ['blog', 'dashboard', 'site', 'market', 'system', 'users']
  ).isRequired
}

export default ToolLink

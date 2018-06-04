import React from 'react'

import './ActionIcons.css'

import Icon from '../../atoms/Icon'

function ActionIcons() {
  return (
    <span className="action-icons">
      <a><Icon name="home" /></a>
      <a><Icon name="question" /></a>
      <a><Icon name="signout" /></a>
    </span>
  )
}

export default ActionIcons

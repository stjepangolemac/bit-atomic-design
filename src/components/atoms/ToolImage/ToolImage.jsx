import React from 'react'
import PropTypes from 'prop-types'

import './ToolImage.css'
import blog from './blog.png'
import dashboard from './dashboard.png'
import site from './files.png'
import market from './market.png'
import system from './system.png'
import users from './users.png'

function ToolImage(props) {
  const { name } = props
  let src

  switch (name) {
    case 'blog':
      src = blog
      break
    case 'dashboard':
      src = dashboard
      break
    case 'site':
      src = site
      break
    case 'market':
      src = market
      break
    case 'system':
      src = system
      break
    case 'users':
      src = users
      break
  }


  return (
    <img className="tool-image" src={src} />
  )
}

ToolImage.propTypes = {
  name: PropTypes.oneOf(
    ['blog', 'dashboard', 'site', 'market', 'system', 'users']
  ).isRequired
}

export default ToolImage

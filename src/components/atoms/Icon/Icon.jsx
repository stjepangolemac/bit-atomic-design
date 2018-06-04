import React from 'react'
import PropTypes from 'prop-types'

import './Icon.css'
import home from './home.svg'
import question from './question-circle.svg'
import signout from './sign-out-alt.svg'

function Icon(props) {
  const { name } = props;
  let src

  switch (name) {
    case 'home':
      src = home
      break
    case 'question':
      src = question
      break
    case 'signout':
      src = signout
      break
  }

  return (
    <img className="icon" src={src} />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(['home', 'question', 'signout']).isRequired
}

export default Icon

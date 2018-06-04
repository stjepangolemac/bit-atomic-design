import React from 'react'
import PropTypes from 'prop-types'

import './AvatarImage.css'
import defaultUrl from './avatar.jpg'

function AvatarImage(props) {
  const { url } = props;

  return (
    <img className="avatar" src={url || defaultUrl} />
  )
}

AvatarImage.propTypes = {
  url: PropTypes.string
}

export default AvatarImage

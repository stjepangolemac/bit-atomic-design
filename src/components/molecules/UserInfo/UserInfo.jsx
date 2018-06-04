import React from 'react'
import PropTypes from 'prop-types'

import './UserInfo.css'

import AvatarImage from '../../atoms/AvatarImage'
import Label from '../../atoms/Label'

function UserInfo(props) {
  const { avatarUrl, username } = props

  return (
    <span className="user-info">
      <AvatarImage url={avatarUrl} />
      <Label value={username} />
    </span>
  )
}

UserInfo.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

export default UserInfo

import React from 'react'

import './Header.css'

import HamburgerIcon from '../../atoms/HamburgerIcon'
import ActionIcons from '../../molecules/ActionIcons'
import UserInfo from '../../molecules/UserInfo'

function Header() {
  return (
    <div className="header">
      <div className="group">
        <HamburgerIcon />
        <h1>Dashboard</h1>
      </div>
      <div className="group">
        <ActionIcons />
        <UserInfo avatarUrl="" username="admin" />
      </div>
    </div>
  )
}

export default Header

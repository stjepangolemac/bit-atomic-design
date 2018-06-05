import React from 'react'

import './Workspace.css'
import Tools from '../../organisms/Tools'
import Temperature from '../../organisms/Temperature'

function Workspace() {
  return (
    <div className="workspace">
      <Tools />
      <Temperature />
    </div>
  )
}

export default Workspace

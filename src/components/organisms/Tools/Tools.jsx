import React from 'react'

import './Tools.css'
import Panel from '../../atoms/Panel'
import ToolLink from '../../molecules/ToolLink'

function Tools() {
  return (
    <Panel>
      <div className="tools-panel">
        <div className="row">
          <ToolLink name="dashboard" />
          <ToolLink name="site" />
          <ToolLink name="blog" />
        </div>
        <div className="row">
          <ToolLink name="users" />
          <ToolLink name="system" />
          <ToolLink name="market" />
        </div>
      </div>
    </Panel>
  )
}

export default Tools

import React from 'react'

import './Temperature.css'

import Panel from '../../atoms/Panel';
import Label from '../../atoms/Label';
import Icon from '../../atoms/Icon';

function Temperature() {
  return (
    <Panel>
      <div className="temperature-panel">
        <div className="overlay">
          <div className="main">
            <div><Label large white value="3:15 PM" /></div>
            <div><Label white value="August 20, 2015" /></div>
          </div>
          <div className="split">
            <Label white value="Hamburg" />
            <span className="flex">
              <Label white value="13 ℃" />
              <span className="margin"><Icon name="sun" /></span>
            </span>
          </div>
        </div>
      </div>
    </Panel>
  )
}

export default Temperature

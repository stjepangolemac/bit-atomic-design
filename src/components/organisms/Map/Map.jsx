import React from 'react'

import './Map.css'
import map from './map.png'

import Panel from '../../atoms/Panel'
import Label from '../../atoms/Label'

function Map() {
  return (
    <Panel>
      <div className="map-panel">
        <div>
          <div><Label medium value="0.74 min" /></div>
          <div><Label value="Session duration this week" /></div>
        </div>
        <div>
          <img src={map} />
        </div>
      </div>
    </Panel>
  )
}

export default Map

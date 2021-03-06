/// app.js
import React from 'react';
import DeckGL, {LineLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';

import RefinaryLayer from './Layers/RefinaryLayer';
import VesselLayer   from './Layers/VesselLayer';
import RefinaryLayer2 from './Layers/RefinaryLayer2';

import styles from './MapHolder.less';
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw';

// Initial viewport settings
const initialViewState = {
  longitude: -122.22708893,
  latitude: 38.06577078,
  zoom: 13,
  pitch: 45,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];

export default class MapHolder extends React.Component {
  render() {

    const {refinaries } = this.props;

    console.log(refinaries);

    return (
      <div className={styles.mapView}>
        <DeckGL
          controller={true}
          initialViewState={initialViewState}
        >
          {/*<RefinaryLayer data={refinaries}/>*/}
          <VesselLayer data={refinaries}/>

{/*          <RefinaryLayer2 data={refinaries}/>*/}

          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </div>
    );
  }
}



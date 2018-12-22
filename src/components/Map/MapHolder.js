/// app.js
import React from 'react';
import DeckGL, {LineLayer} from 'deck.gl';
import {StaticMap} from 'react-map-gl';
import RefinaryLayer from './Layers/RefinaryLayer';
import styles from './MapHolder.less';
// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibW9nbW9nIiwiYSI6ImNpZmI2eTZuZTAwNjJ0Y2x4a2g4cDIzZTcifQ.qlITXIamvfVj-NCTtAGylw';

// Initial viewport settings
const initialViewState = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
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
          <RefinaryLayer data={refinaries}/>

          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </div>
    );
  }
}



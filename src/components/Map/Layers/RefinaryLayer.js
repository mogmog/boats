import  {GeoJsonLayer} from 'deck.gl';
import Terraformer from "terraformer";

import LIGHTSETTINGS from '../LightSettings';




let defaultParams = {
  id: 'geojsonLayer-extruded',

  extruded: true,
  wireframe: false,

  getRadius: f => 200,
  getFillColor: f => {
    return [255,0,0,120];
  },
  getLineColor: f => {
    return [0,0,0, 40];
  },
  getLineDashArray: f => [20, 0],
  getLineWidth: f => f.properties['stroke-width'],
  lineWidthScale: 10,
  lineWidthMinPixels: 1,
  pickable: true,
  fp64: true,

  getElevation: f => f.properties.capacity === 0 ? 1000 : f.properties.capacity * 2.5,  // this.state.filter.refineries.size
  elevationScale: 100


};

export default class RefinaryLayer extends GeoJsonLayer {

  constructor(params) {

    params.data  = {
      "type": "FeatureCollection",
        "features": params.data
    },

    super(Object.assign(params, defaultParams));
  }

  // constructor(props) {
  //
  //   // Data to be used by the LineLayer
  //   const data = [{sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}];
  //
  //   return   <LineLayer id='line-layer' data={data} />
  //
  //   super(props);
  // }
}
//
// const GeoJsonLayerExtrudedExample = {
//   layer: GeoJsonLayer,
//   getData: () => dataSamples.choropleths,
//   props: {
//     id: 'geojsonLayer-extruded',
//     getElevation: f => ((f.properties.ZIP_CODE * 10) % 127) * 10,
//     getFillColor: f => [0, 100, (f.properties.ZIP_CODE * 55) % 255],
//     getLineColor: f => [200, 0, 80],
//     extruded: true,
//     wireframe: true,
//     pickable: true,
//     lightSettings: LIGHT_SETTINGS
//   }
// };

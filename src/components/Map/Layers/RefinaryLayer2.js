import { MeshLayer } from '@deck.gl/experimental-layers';
import {CylinderGeometry} from 'luma.gl';

const defaultParams = {
  id: 'mesh-layer',
  mesh: new CylinderGeometry({
    radius: 1,
    topRadius: 1,
    bottomRadius: 1,
    topCap: true,
    bottomCap: true,
    height: 5,
    nradial: 20,
    nvertical: 1
  }),
  sizeScale: 10,
  getColor: f => {
    return [255,0,0,120];
  },
  getPosition: d => {
    return [+d.point[0], +d.point[1]  ]},
  getRoll: d => 0.75 * 360,
};

export default class RefinaryLayer2 extends MeshLayer {

  constructor(params) {



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



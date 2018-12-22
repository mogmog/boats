import {MeshLayer} from '@deck.gl/experimental-layers';
import {CubeGeometry} from 'luma.gl';

const defaultParams = {
  id: 'vessel-layer',
  mesh: new CubeGeometry({
    colors: [1,1, 1, 1]
  }),

  sizeScale: 100,

  getColor: f => {
    return [255, 0, 0, 40];
  },
  getPosition: d => {
    return [+d.point[0], +d.point[1]]
  },
};

export default class VesselLayer extends MeshLayer {

  constructor(params) {


    try {
      super(Object.assign(params, defaultParams));


    } catch (e) {
      console.log(e);
    }
  }

}



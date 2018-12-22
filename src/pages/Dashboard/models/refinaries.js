import { queryTags } from '@/services/api';
import {refineryService} from "../../../services/refinaryservice";
import Terraformer from "terraformer/terraformer";

export default {
  namespace: 'refinaries',

  state: {
    list: [],
  },

  effects: {
    *fetch(_, { call, put }) {

      const response = yield call(refineryService.getRefineryList);

      yield put({
        type: 'saveRefinaries',
        payload: response,
      });
    },
  },

  reducers: {
    saveRefinaries(state, action) {

      action.payload = action.payload.map(d=> ({
        type: "Feature",
        id: "refineryInformation",
        heading: "Refinery Information",
        ...new Terraformer.Circle(
          [d.longitude, d.latitude],
          10 * d.capacity,
          24
        ),
        point: [d.longitude, d.latitude],
        geometry_name: "the_geom",
        properties: {
          id: d.refineryCode,
          name: d.name,
          city: d.city,
          country: d.country,
          capacity: d.capacity
        },
        closure: d.closure
      }))



      return {
        ...state,
        list: action.payload,
      };
    },
  },
};

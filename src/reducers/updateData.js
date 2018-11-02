import { DATA_STORE, FETCHING_DATA, COMPLETED_FETCH } from '../actions/Types.js';

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_STORE:
      return { ...state, data: action.payload }
    case FETCHING_DATA:
      return { ...state, loading: true }
    case COMPLETED_FETCH:
      return { ...state, loading: false }
    default:
      return state;
  }
}

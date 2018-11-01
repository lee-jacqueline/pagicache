import { DATA_STORE } from '../actions/Types.js';

const INITIAL_STATE = {
  data: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case DATA_STORE:
      return { ...state, data: action.payload }
    default:
      return state;
  }
}

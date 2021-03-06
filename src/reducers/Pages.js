import { PAGE_UPDATE, TOTAL_PAGES } from '../actions/Types.js';

const INITIAL_STATE = {
  totalCount: 1,
  currentPage: 1,
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case PAGE_UPDATE:
      return { ...state, currentPage: action.payload };
    case TOTAL_PAGES:
      return { ...state, totalCount: action.payload };
    default:
      return state;
  }
}

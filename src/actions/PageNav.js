import { PAGE_UPDATE } from './Types.js';

/*
  Dispatching current page action.
  @param {number} currentPage
*/
export const updateCurrent = currentPage => ({
  type: PAGE_UPDATE,
  payload: currentPage,
})

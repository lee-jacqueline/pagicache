import { PAGE_UPDATE } from './Types.js';

export const updateCurrent = currentPage => ({
  type: PAGE_UPDATE,
  payload: currentPage,
})

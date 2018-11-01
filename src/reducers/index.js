import { combineReducers } from 'redux';
import updateData from './UpdateData.js';
import pages from './Pages.js';

export default combineReducers({
  updateData,
  pages,
});

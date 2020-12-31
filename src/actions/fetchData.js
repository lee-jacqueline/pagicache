import axios from 'axios';
import { TOTAL_PAGES, DATA_STORE, FETCHING_DATA, COMPLETED_FETCH } from './Types.js';

const API_URL = 'API_URL_HERE';
const apiToken = 'API_TOKEN_HERE'
/*
  FetchData action using axios to run a GET request to target API,
  and updating total page count, card data, and fetching progress boolean.
  @param {number} currentPage
*/
export function fetchData(currentPage) {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios.get(`${API_URL}`, {
      'headers': {'apiToken': apiToken},
      'params': {
        'ticketType': 'incident',
        'sortDirection': 'DESC',
        'page': currentPage,
        'perPage': '12',
      }
    } )
    .then((response) => {
      var totalCount = Math.ceil(response.headers['x-total-count']/12);
      dispatch(updatePages(totalCount));
      dispatch(updateData(response.data));
      dispatch({ type: COMPLETED_FETCH });
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
      return { type: TOTAL_PAGES, payload: 0 };
    });
  }
};

/*
  Dispatching total pages action.
  @param {number} totalCount
*/
function updatePages(totalCount) {
  return {
    type: TOTAL_PAGES,
    payload: totalCount,
  };
}

/*
  Dispatching data storage action.
  @param {array} data
*/
function updateData(data) {
  return {
    type: DATA_STORE,
    payload: data,
  };
}

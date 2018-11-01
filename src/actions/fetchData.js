import axios from 'axios';
import { TOTAL_PAGES, DATA_STORE } from './Types.js';

const API_URL = 'https://singisthebest2.aiam-dh.com/atr-gateway/ticket-management/api/v1/tickets';
const apiToken = 'eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqUlFFrwjAUhf9Lnvuwjk6cb7GN8WKalCRFxhihahiFtZZW2UD877vOPe2hzV4P3z2c3JPkQobzjixIdWjqlkSkOh9q3-49Sp9-h8K-99XJH8gifkrihySZx8nT_DEine-behjqYzuQxeuFtFVzG6JZDtJZSDfM4nTXHxE81R6hy_Ua_eVYXghq2TRpGNXp2jHJQY7iqWZo6LZKb1ZCbaedQ0j0zH4P5YwqdcrMaAYqHcvAOlVaAxlz1HGtymI6TK4kWKVB8mlWl2I8xh1L19QuVUgZSokAv5wWRVC-FTCRBVVcGqZdIUrsdjSA1cA5ouHl_q8zg2jBdA7GgJIBu8BupQX7Mk1upNoKlnG2pCbgugcs4w5ymsMKUmox8OQNDt-bVHbE9i0i7_3x3N1ePqFWu58hgrL_6u4_xSx5nsUJCk1Vf6AtuX4DAAD__w.qFzLLgq4iMie46tbE6EdBKCs7-YArHHR-kE2O4tpNXE1b-mhwgHtwxO8cAaYtGS9e70nroKfMZ91Re75Yz2WRVqHnwFpyRlLzeYneiZYQ1EoFTo0Wtl1VUdMuN2db0X7qQ_tGNR72rMAH5ceiDPw4LbLYkcTzZc_NZ1h07hnn60';
const currentPage = 2;

export function fetchData(currentPage) {
  return dispatch => {
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
    })
    .catch((error) => {
      console.log('error');
      console.log(error);
      return { type: TOTAL_PAGES, payload: 0 };
    });
  }
};

function updatePages(totalCount) {
  return {
    type: TOTAL_PAGES,
    payload: totalCount,
  };
}

function updateData(data) {
  return {
    type: DATA_STORE,
    payload: data,
  };
}

import axios from 'axios';
import { TOTAL_PAGES, DATA_STORE, FETCHING_DATA, COMPLETED_FETCH } from './Types.js';

const API_URL = 'https://dh-atratadev.atrmywizard360.com/atr-gateway/ticket-management/api/v1/tickets';
const apiToken = 'eyJhbGciOiJSUzUxMiIsInppcCI6IkRFRiJ9.eNqcWGFvmzAQ_SsRnzNpzbZUzTcXXOoFMDNmrTRNFk2sCTWQLAntpKr_fYaStEm68cxX8B3v7t69O_zkbKo7Z-Jk8yIvnaGTVfNclzNtHj3qO_NgttbZVs-dydmX8dn44vzz-fhiPBo6K70u8s0mX5YbZ_LjySmzojZioSJxHDCXSMajRAlKPONltV4ag22uzeGn5-fh_rxLIkU9JhVPZcI8qojyBU_j_9nIUEnmTqlUkoZxQCTt_IwxIankYYNKiTSATFweXTFf3QgmqaV3xKYNgt5SN20sLYw8GlD07D5LmNHudGgKySIgfFNmNFPmKA0JC_DKnVp0RzG9xBGdEtZjgroSr_cuT12RhIlKqPjOXIyuASPd7VNHSoSpc1_KdX2AfDOOuZheBfym87DJZdO83VBqt1_5JZKIFnLjUqWxR7o914ADTjzEfRykPot69bhND77Adw0g1IL4inghizoSnhpOAUjqtLShdpa8_qpyr4m85D3aoBvLniZQAttP0JounQk5oGsSkTi55tKujbpBGZWIuGRXrWb0UT1Ilrw2TfikwnhQZ9JCTQ36kAqfKknA6rZoALk4kF4IChyp8R5TEbIkQXTuuKZWQwaWc6Tsb0BDMvoO3aG-Col7zSKqAkpEhMyv4xThtLSYjJ0hm7MhiYhPQxpJKKHoJvBGIi1GacJT4YLDlyRTK_CNtmNCfIgGH6tW818K5vtUoLoFbwH99lIEesAtuhOCwSKP3toN3B6qDG9aSHCvGmvxn9TM22A5yxYDUZVzPbuHaYLFuz-OtE69byXQSnSw_0FTYs9Xy1GI4E4iE2DTxli5avSChtxQAN_RG_8vXEssiptV22WRbc0f_Iffla40uiABHNq1KFKwg5wiwnWkokCrvBmpGDdr2bDZRgAMTZF6lR_eAhrK27ESyPeL4CFuTzYKaCgeyzqkwuCvzDt3INYXAshGstteLCaI3Y0VfBfzGnEaQ7_AJ6MHSVDDnX8c_Dl0fq2X1aq-FnSIFK0CmMfbfHavt_7-pdRZMfD0g14sV4UutwN3OdcDoR9y_ajXm9pE_1k1N4-jTx9Ho_OxeVBk-cKZlNVi8fwXAAD__w.O1INeyLqaDJRluxzvHhPz0e_MTYsgrnG50jPVnlIkxbSHr4v4ZFlG-kPHy35qMilKJRL6sWvBlsdpMtQmfFi00XOLfjq1g1WLX9ovo-2kcPelddrkshqs2qjJ441-BBGjSLmO2aCaNiKjgqyqQeg32hh9gPEvNFGlf9BzUQPF5Q';

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

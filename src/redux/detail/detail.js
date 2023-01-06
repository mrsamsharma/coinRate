import axios from 'axios';

const detailCoin = (payload) => ({ type: 'GET_DETAILS', payload });

const initialState = [];

export const url = 'https://api.coingecko.com/api/v3/coins';

export const fetchDetailCoin = (id) => async (dispatch) => {
  const res = await axios.get(`${url}/${id}?tickers=false&localization=false&community_data=false&developer_data=false&sparkline=false`);
  const coins = res.data;
  dispatch(detailCoin(coins));
};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;

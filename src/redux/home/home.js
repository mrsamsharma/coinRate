import axios from 'axios';

const getCoins = (payload) => ({ type: 'GET', payload });
export const filterCoins = (payload) => ({ type: 'FILTER', payload });

export const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const initialState = [];

export const fetchCoins = () => async (dispatch) => {
  const res = await axios.get(url);
  const coins = res.data;
  dispatch(getCoins(coins));
};

const coinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET':
      return action.payload;
    case 'FILTER':
      return state.filter((coin) => (
        coin.current_price <= action.payload.max && coin.current_price >= action.payload.min
      ));
    default:
      return state;
  }
};

export default coinsReducer;

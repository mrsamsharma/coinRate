import detailsReducer from '../redux/detail/detail';

describe('Details Reducer', () => {
  it('Should return the given state', () => {
    const State = [{
      id: 'bitcoin',
      symbol: 'btc',
      name: 'Bitcoin',
      image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 16796.97,
      market_cap: 323293251658,
      market_cap_rank: 1,
      fully_diluted_valuation: 352615442109,
      total_volume: 15384908622,
      high_24h: 16872.54,
      low_24h: 16781.94,
      price_change_24h: -35.28933254021467,
      price_change_percentage_24h: -0.20965,
      market_cap_change_24h: -555547279.6931152,
      market_cap_change_percentage_24h: -0.17155,
      circulating_supply: 19253718,
      total_supply: 21000000,
      max_supply: 21000000,
      ath: 69045,
      ath_change_percentage: -75.68009,
      ath_date: '2021-11-10T14:24:11.849Z',
      atl: 67.81,
      atl_change_percentage: 24663.12023,
      atl_date: '2013-07-06T00:00:00.000Z',
      roi: null,
      last_updated: '2023-01-06T08:08:08.866Z',
    },
    {
      id: 'ethereum',
      symbol: 'eth',
      name: 'Ethereum',
      image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880',
      current_price: 1248.22,
      market_cap: 150360692872,
      market_cap_rank: 2,
      fully_diluted_valuation: 150360692872,
      total_volume: 3880351782,
      high_24h: 1255.58,
      low_24h: 1245.12,
      price_change_24h: -3.084505456654597,
      price_change_percentage_24h: -0.2465,
      market_cap_change_24h: -343985215.6942444,
      market_cap_change_percentage_24h: -0.22825,
      circulating_supply: 120524858.967432,
      total_supply: 120524858.967432,
      max_supply: null,
      ath: 4878.26,
      ath_change_percentage: -74.42521,
      ath_date: '2021-11-10T14:24:19.604Z',
      atl: 0.432979,
      atl_change_percentage: 288044.55418,
      atl_date: '2015-10-20T00:00:00.000Z',
      roi: {
        times: 98.36382169224636,
        currency: 'btc',
        percentage: 9836.382169224637,
      },
      last_updated: '2023-01-06T08:08:07.196Z',
    },
    ];
    const testAction = { type: 'test' };
    const state = detailsReducer(State, testAction);
    expect(state).toEqual(State);
  });
});

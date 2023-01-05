export const detailCoin = (payload) => ({ type: 'GET_DETAILS', payload });

const initialState = {};

const detailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DETAILS':
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;

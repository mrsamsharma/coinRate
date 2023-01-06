export const updateCategory = (payload) => ({ type: 'FILTER', payload });

const initialState = { min: '0', max: '10' };

const activeCategories = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default activeCategories;

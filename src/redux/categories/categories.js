export const updateCategory = (payload) => ({ type: 'FILTER', payload });

const initialState = { min: '100', max: '1000' };

const activeCategories = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload;
    default:
      return state;
  }
};

export default activeCategories;

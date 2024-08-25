
import { ADD, DELETE } from './cart.actions';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE:
      return state.products.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};

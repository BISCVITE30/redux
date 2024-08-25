
import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const initialState = {
  products: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
      };

    case DELETE_PRODUCT:
      return state.products.filter(el => el.id !== action.payload);
    default:
      return state;
  }
};

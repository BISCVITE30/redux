import { createStore, combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';
import { languageReducer } from './language.reducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  language: languageReducer,
  user: userReducer,
});

const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: [],
  },
};

const store = createStore(rootReducer, initialState);

export default store;

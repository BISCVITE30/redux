import { USER_DELETE, USER_SET } from './user.actions';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return state ? [...state, action.payload] : [action.payload];

    case USER_DELETE:
      return state ? state.filter(user => user.id !== action.payload) : null;

    default:
      return state;
  }
};

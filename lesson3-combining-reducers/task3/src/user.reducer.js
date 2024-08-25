import { USER_DELETE, USER_SET } from './user.actions';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      if (!state) {
        return [action.payload];
      }

      return state.map(user =>
        user.id === action.payload.id ? { ...user, ...action.payload } : user,
      );

    case USER_DELETE:
      return state ? state.filter(user => user.id !== action.payload) : null;

    default:
      return state;
  }
};

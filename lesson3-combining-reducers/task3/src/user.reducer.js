import { USER_REMOVE, USER_SET } from './user.actions';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return action.payload;

    case USER_REMOVE:
      return null;

    default:
      return state;
  }
};

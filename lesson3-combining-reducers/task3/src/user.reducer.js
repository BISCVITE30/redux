import { USER_DELETE, USER_SET } from './user.actions';

const initialState = null;

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return action.payload;

    case USER_DELETE:
      return null;

    default:
      return state;
  }
};

import { USER_DELETE, USER_SET } from './user.actions';

const initialState = {
  user: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...state,
        user: state.user ? [...state.user, action.payload] : [action.payload],
      };
    case USER_DELETE:
      return {
        ...state,
        user: [...state.user.filter(user => user.id !== action.payload)],
      };
    default: 
    return state
  }
};


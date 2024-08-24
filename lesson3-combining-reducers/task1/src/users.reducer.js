import { ADD_USER, DELETE_USER, UPDATE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };

    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== action.payload),
      };

      case UPDATE_USER: {
        const newList = state.usersList.map(user => {
            if(user.if === action.payload.userId) {
                return {
                    ...user, 
                    ...action.payload.userData
                }
            }

            return user
        })
        return {
            ...state,
            usersList: newList
        }
      }

    default:
      return state;
  }
};

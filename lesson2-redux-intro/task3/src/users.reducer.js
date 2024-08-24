import { ADD, DELETE } from './users.action';

const initialState = {
  usersList: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      const { name, id } = action.payload;
      return {
        ...state,
        usersList: [
          ...state.usersList,
          {
            id,
            name,
          },
        ],
      };

    case DELETE:
      const idToDelete = action.payload;
      return {
        ...state,
        usersList: state.usersList.filter(user => user.id !== idToDelete),
      };
    default:
      return state;
  }
};

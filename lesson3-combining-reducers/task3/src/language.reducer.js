import { LANGUAGE_SET } from './language.actions';

const initialState = 'en';

export const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_SET:
      return action.payload;
    default:
      return state;
  }
};

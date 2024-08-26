const { ADD, REMOVE, RESET } = require('./counter.actions');

export const CounterReducer = (state = 0, actions) => {
  switch (actions.type) {
    case ADD:
      return state + 1;

    case REMOVE:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
};

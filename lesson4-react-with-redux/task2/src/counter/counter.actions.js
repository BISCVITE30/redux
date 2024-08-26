export const ADD = 'COUNTER/ADD';
export const REMOVE = 'COUNTER/REMOVE';
export const RESET = 'COUNTER/RESET';

export const increment = () => {
  return {
    type: ADD,
  };
};

export const decrement = () => {
  return {
    type: REMOVE,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

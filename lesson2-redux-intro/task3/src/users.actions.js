export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = (name, id) => {
  return {
    type: ADD,
    payload: { name, id }
  };
};

export const deleteUser = (idToDelete) => {
  return {
    type: DELETE,
    payload: idToDelete
  };
};

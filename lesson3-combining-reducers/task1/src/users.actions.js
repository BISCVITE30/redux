export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const UPDATE_USER = 'UPDATE_USER';

export const addUser = data => ({
  type: ADD_USER,
  payload: data,
});

export const deleteUser = userId => ({
  type: DELETE_USER,
  payload: userId,
});

export const updateUser = (userId, userData) => {
    return {
        type: UPDATE_USER,
        payload: {
            userId,
            userData
        }
    }
}

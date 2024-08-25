export const USER_SET = 'USER_SET';
export const USER_REMOVE = 'USER_REMOVE';

export const setUser = data => {
    return {
        type: USER_SET,
        payload: data,
    }
}

export const removeUser = () => {
    return {
        type: USER_REMOVE
    }
}
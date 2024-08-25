export const USER_SET = 'USER_SET';
export const USER_DELETE = 'USER_DELETE';

export const userSet = data => {
    return {
        type: USER_SET,
        payload: data,
    }
}

export const userDelete = idToDelete => {
    return {
        type: USER_DELETE,
        payload: idToDelete,
    }
}
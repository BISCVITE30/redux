export const ADD = 'CART/ADD';
export const DELETE = 'CART/DELETE';

export const addCart = data => {
    return {
        type: ADD,
        payload: data
    }
}

export const deleteCart = idToDelete => {
    return {
        type: DELETE,
        payload: idToDelete,
    }
}
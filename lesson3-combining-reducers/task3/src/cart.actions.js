export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART/DELETE_PRODUCT';

export const addCart = data => {
    return {
        type: ADD_PRODUCT,
        payload: data
    }
}

export const deleteCart = idToDelete => {
    return {
        type: DELETE_PRODUCT,
        payload: idToDelete,
    }
}
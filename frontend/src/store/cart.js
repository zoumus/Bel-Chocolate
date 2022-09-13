import csrfFetch from "./csrf"
import { addUser } from "./user"
export  const RECEIVE_CART_ITEMS = '/cart_items/RECEIVE_CART_ITEMS'
export  const RECEIVE_CART_ITEM = '/cart_items/RECEIVE_CART_ITEM'
export  const REMOVE_CART_ITEM = '/cart_items/REMOVE_CART_ITEM'

export const receiveCartItems = payload => ({ //index
    type: RECEIVE_CART_ITEMS,
    payload
})
export const receiveCartItem = payload => ({// create & update
    type: RECEIVE_CART_ITEMS,
    payload
})
export const removeCartItem = cartItemId => ({// delete
    type: RECEIVE_CART_ITEM,
    cartItemId
})

export const getcartItems = state => {
    return state?.cartItems ? Object.values(state.cartitems) : [];
}

export const fetchUserItems = (userId) => async(dispatch) => {
    const response = await csrfFetch(`/api/users/${userId}`)
    const data = await response.json();
    dispatch(receiveCartItems(user.cartItems));
}
export const createCartItem = (cartItem) => async dispatch => {
    const response = await csrfFetch('/api/cart_items',{
        method: 'POST',
        body: JSON.stringify(cartItem)
    })
    if(response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data))
    }
}

export const updateCartItem = (cartItem) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'Patch',
        body: 'JSON.stringIfy'(cartItem)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data));
        return data;
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeCartItem(reviewId))
    }
}

const cartItemsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return  action.payload;
        case RECEIVE_CART_ITEM:
            return{...state, [action.payload.id]: action.payload}
            
        case REMOVE_CART_ITEM:
            delete newState[action.cartItemId]
            return newState;
        default: 
            return state
    }
}

export default cartItemsReducer;


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
    type: RECEIVE_CART_ITEM,
    payload
})
export const removeCartItem = cartItemId => ({// delete
    type: REMOVE_CART_ITEM,
    cartItemId
})

export const getCartItems = state => {
    return state?.cartItems ? Object.values(state.cartItems) : [];
}
export const getCartItem = productId => state => {
    if (!state) {
        return null
    } else if (!state.cartItems) {
        return null
    } else {
        return Object.values(state.cartItems).find(item => item.productId == productId);
    }
}


export const fetchUserItems = () => async(dispatch) => {
    const response = await csrfFetch('/api/cart_items/');
    const data = await response.json();
    dispatch(receiveCartItems(data));
}
export const createCartItem = (item) => async dispatch => {
    const response = await csrfFetch('/api/cart_items',{
        method: 'POST',
        body: JSON.stringify({cartItem: item})
    })
    if(response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data))
    }
}

export const updateCartItem = (cartItem) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartItem)
    })
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveCartItem(data));
        return data;
    }
}

export const deleteCartItem = (cartItemId) => async dispatch => {
    const response = await csrfFetch(`/api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeCartItem(cartItemId))
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


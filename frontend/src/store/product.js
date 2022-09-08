import csrfFetch from "./csrf";

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

export const receiveProducts = (payload) => ({
    type: RECEIVE_PRODUCTS,
    payload
})

export const receiveProduct = (payload) => ({
    type: RECEIVE_PRODUCT,
    payload
})

export const getProduct = productId => state => {
    if (!state) {
        return null
    } else if (!state.products) {
        return null
    } else {
        return state.products[productId]
    }
}
export const getProducts = state => {
    if (!state || !state.products) return [];
    return Object.values(state.products)
}

export const fetchProducts = ()=> async(dispatch) => {
    const res = await csrfFetch('/api/products')
    const products = await res.json()
    dispatch(receiveProducts(products))
}

export const fetchProduct = (productId)=> async(dispatch) => {
    const res = await csrfFetch(`/api/products/${productId}`)
    const product = await res.json()
    dispatch(receiveProduct(product))
}

export const fetchProductsByCategory = (categoryId)=> async(dispatch) => {
    const res = await csrfFetch(`/api/categories/${categoryId}/products`)
    const products = await res.json()
    dispatch(receiveProducts(products))
}

const productsReducer = (state={},action) => {
    Object.freeze(state)
    const newState = {...state} 
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return action.payload.products
            // return {...newState, ...action.payload}
        case RECEIVE_PRODUCT:
            newState[action.payload.product.id] = action.payload.product;
            return newState;
        default:
            return state;
    }
}

export default productsReducer;





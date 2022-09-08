
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
    const response = await fetch('/api/products')
    if (response.ok){
        const products = await response.json()
        dispatch(receiveProducts(products))
    }
}

export const fetchProduct = (productId)=> async(dispatch) => {
    const response = await fetch(`/api/products/${productId}`)
    if (response.ok){
        const product = await response.json()
        dispatch(receiveProduct(product))
    }
}

const productsReducer = (state={},action) => {
    Object.freeze(state)
    const newState = {...state} 
    switch(action.type){
        case RECEIVE_PRODUCTS:
            return {...newState,...action.payload}
        case RECEIVE_PRODUCT:
            newState[action.product.id] = action.product
            return newState;
        default:
            return state;
    }
}

export default productsReducer;





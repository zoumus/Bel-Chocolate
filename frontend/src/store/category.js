import csrfFetch from "./csrf";
export const RECEIVE_CATEGORIES = 'categories/RECEIVE_CATEGORIES'

export const receiveCategories = (payload) => ({
    type: RECEIVE_CATEGORIES,
    payload
})


export const getCategories = state => {
    if (!state || !state.categories) return [];
    return Object.values(state.categories)
}

export const fetchCategories = ()=> async(dispatch) => {
    const res = await csrfFetch('/api/categories')
    

    const categories = await res.json()
    

    dispatch(receiveCategories(categories))
}

const categoriesReducer = (state={},action) => {
    Object.freeze(state)
    const newState = {...state} 
    switch(action.type){
        case RECEIVE_CATEGORIES:
            return action.payload.categories
            // return {...newState, ...action.payload}
        default:
            return state;
    }
}
export default categoriesReducer;
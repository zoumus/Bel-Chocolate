import csrfFetch from "./csrf"
import { RECEIVE_PRODUCT } from "./product"

export const RECEIVE_REVIEW = 'reviews/RECEIVE_REVIEW'
export const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW'

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
})

export const getReviews = state => {
    return state?.reviews ? Object.values(state.reviews) : [];
}

export const createReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews`, {
        method: 'POST',
        body: JSON.stringify(review)
    })

    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
        return data;
    }
}
export const updateReview = (review) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        body: JSON.stringify(review)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(receiveReview(data));
        return data;
    }
}

export const deleteReview = (reviewId) => async dispatch => {
    const response = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE'
    })

    if (response.ok) {
        dispatch(removeReview(reviewId))
    }
}

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state)
    const newState = { ...state }
    switch (action.type) {
        case RECEIVE_PRODUCT:
            if(action.payload.reviews){
                return action.payload.reviews
            } else {
                return newState;
            }
        case RECEIVE_REVIEW:
            return { ...state, [action.review.id] : action.review }
        case REMOVE_REVIEW://add it to the current state
            delete newState[action.reviewId];//action.payload.reviewid
            return newState;
        default:
            return state;
    }
}
export default reviewsReducer;
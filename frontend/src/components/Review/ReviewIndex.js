import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../store/review";
import { fetchProduct } from "../../store/product";

const ReviewIndex = () => {
    const reviews = useSelector(getReviews);

        return(
            <>
                <div className="review-div">
                    {reviews.map(review=>(
                        <>
                            <div className="review-title">{review.title}</div>
                            <div className="review-body">{review.body}</div>
                            <div className="review-rating">{review.rating}</div>

                        </>
                        
                    ))}
                </div>
            
            </>
            
        )
}

export default ReviewIndex;
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { getReviews } from "../../store/review";
import './Review.css'
import ReviewFormModal from './ReviewFormModal'
import { deleteReview } from "../../store/review";
import { FaStar } from 'react-icons/fa';
import { formatDateTime } from "../../util/dateUtil"; 
import Avatar from '@mui/joy/Avatar';

const ReviewIndex  = () => {

    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const currentUserId = useSelector(state=> state.session.user?.id)
    const [showModal, setShowModal] = useState(false);
    const [selectedReview,setSelectedReview] = useState();

    const showStar = (rating)=>{
        if (rating===1){
             return (
                <div>
                    <FaStar color="#ab5b0e"/>
                    <FaStar color="grey"/>
                    <FaStar color="grey"/>
                    <FaStar color="grey"/>
                    <FaStar color="grey"/>

                </div>
            )
             
         } 
        if (rating===2){
         return (
             <div>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===3){
                  return (
             <div>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===4){
                  return (
             <div>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===5){
                  return (
             <div>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
                 <FaStar color="#ab5b0e"/>
              </div>
        )}}

    return(                                                                                                                                              
        <div className="review-overall-container">
    
            <div className="review-container">
                <div className="whrite-reviews">
                    <button onClick={()=>{ 
                        setSelectedReview(null)
                        setShowModal(true)
                        }} className="write-a-review">Write a Review
                    </button>
                </div>
            
                {reviews.map(review=> (
                    <div className="reviews-info">
                        <div className="review-name-date">
                            <div className="review-firstname">{review.userName}</div>
                            <div className="review-date">{formatDateTime(review.updatedAt)}</div>

                            {currentUserId === review.userId && (
                            <>
                            <div className="edit-delete">
                                <button className="delete-button" onClick={() => dispatch(deleteReview(review.id))}>
                                Delete
                                </button>
                                <button className="update-button" onClick={()=>{
                                        setSelectedReview(review)
                                        setShowModal(true)
                                    }}>
                                    Edit
                                </button>

                            </div>
        
                            </>
                        )}
                        </div>
                        <br/>

                        <div className="review-rating">{showStar(review.rating)}</div>
                        <div className="review-title">{review.title}</div> 
                        <div className="review-body">{review.body}</div> 
                        
                    </div>
                ))}
            
            {showModal && <ReviewFormModal 
            setShowModal={setShowModal}
            selectedReview={selectedReview} />}
            </div>
        </div>
    )
}

export default ReviewIndex; 
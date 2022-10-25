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
    const currentUser = useSelector(state=> state.session.user)
    const [showModal, setShowModal] = useState(false);
    const [selectedReview,setSelectedReview] = useState();

    const showStar = (rating)=>{
        if (rating===1){
             return (
                <div>
                    <FaStar color="#c18653"/>
                    <FaStar color="#6c7668"/>
                    <FaStar color="#6c7668"/>
                    <FaStar color="#6c7668"/>
                    <FaStar color="#6c7668"/>

                </div>
            )
             
         } 
        if (rating===2){
         return (
             <div>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#6c7668"/>
                 <FaStar color="#6c7668"/>
                 <FaStar color="#6c7668"/>

              </div>
         )
         } 
         if (rating===3){
                  return (
             <div>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#6c7668"/>
                 <FaStar color="#6c7668"/>

              </div>
         )
         } 
         if (rating===4){
                  return (
             <div>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#6c7668"/>

              </div>
         )
         } 
         if (rating===5){
                  return (
             <div>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
                 <FaStar color="#c18653"/>
              </div>
        )}}
    const about_button = () => {
        // reviews.map(review => {
            let eachReview = Object.values(reviews)
            console.log(eachReview, 'eachReview')
            if (currentUser && eachReview.map(review => (review.userId === currentUserId)).some(val => val === true)){
                console.log('josiah')
                return (<div className="had-review-box">
                    <button className="had-review-button">Write a review</button> 
                    <div className="had-review-button-hover">You've already submitted a review of this item</div>
                </div>)
        }
        return (<button onClick={()=>{ 
            setSelectedReview(null)
            setShowModal(true)
        }} className="review-header-button">Write a Review </button>)           
    }

    return( 
        <div className="overall-box">                                                                                                                                             
        <div className="review-overall-container">
    
            <div className="review-container">
                <div className="whrite-reviews">
                    <div className="review-header">Review <span>({reviews.length})</span></div>
                    {about_button()}
                </div>
            
                {reviews.map(review=> (
                    <div className="reviews-info">
                        <div className="review-name-date-buttons">
                            <div className="review-name-date">
                                <div className="review-firstname">{review.userName}</div>
                                <div className="review-date">{formatDateTime(review.updatedAt)}</div>
                            </div>

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
        </div>
    )
}

export default ReviewIndex; 
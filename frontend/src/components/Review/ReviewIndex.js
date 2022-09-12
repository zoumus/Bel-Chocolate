import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { useState } from "react";
import { getReviews } from "../../store/review";
import './Review.css'
import ReviewFormModal from './ReviewFormModal'
import { deleteReview } from "../../store/review";
import { FaStar } from 'react-icons/fa';


const ReviewIndex  = () => {

    const dispatch = useDispatch();
    const reviews = useSelector(getReviews)
    const currentUserId = useSelector(state=> state.session.user?.id)
    const [showModal, setShowModal] = useState(false);
    const [selectedReview,setSelectedReview] = useState();
    //selectedReview = the review we select

    const showStar = (rating)=>{
        if (rating===1){
             return (
                <div>
                    <FaStar/>
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
                 <FaStar/>
                 <FaStar/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===3){
                  return (
             <div>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar color="grey"/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===4){
                  return (
             <div>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar color="grey"/>

              </div>
         )
         } 
         if (rating===5){
                  return (
             <div>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
                 <FaStar/>
              </div>
        )}}

    return(                                                                                                                                              
        <div>
        <button onClick={()=>setShowModal(true)}>Write a Review</button>

            {reviews.map(review=> (
                <div className="reviews-info">
                    <div className="review-name-date">
                        <div className="review-firstname">{review.userName}</div>
                        <div className="review-date">DATE</div>

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
        {/* <button onClick={()=>setShowModal(true)}>Write a Review</button> */}
        
        {showModal && <ReviewFormModal 
        setShowModal={setShowModal}
        selectedReview={selectedReview} />}
        </div>
    )
}

export default ReviewIndex; 
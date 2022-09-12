import './Review.css'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { createReview,updateReview } from '../../store/review';
// import StarRating from './StarRating';
import { FaStar } from 'react-icons/fa';

const ReviewFormModal = ({setShowModal,selectedReview}) => {

    const {productId} = useParams();
    let editReview = true;

    if (!selectedReview){
       selectedReview = {
        title: "",
        body: "",
        rating: 0 
        }
        editReview = false;
    }
    const dispatch = useDispatch();

    const [title,setTitle] = useState(selectedReview.title)
    const [body,setBody] = useState(selectedReview.body)
    const [rating,setRating] = useState(selectedReview.rating)

    const handleSubmit = (e) => {   
        e.preventDefault();
        if (editReview){
            dispatch(updateReview({title,body,rating,product_id:productId,id:selectedReview.id}))
        }else{
            dispatch(createReview({title,body,rating,product_id:productId}))
        }
        setShowModal(false)
    }

    return(
        <>
            <div onClick={()=>setShowModal(false)} className="bg-modal">
            </div>

                <div className='review-modal'>
                    <form onSubmit={handleSubmit} className="modal-form">
                    <label className="rating-form">Overall Rating
                    <div>
                    {[...Array(5)].map((star, i) => {
                    const ratingValue = i + 1;

                    return (
                        <label>
                            <input type="radio"
                                name="rating"
                                value = {ratingValue}
                                onClick={(e)=> setRating(e.target.value)} 
                                />

                            <FaStar  
                                className = "star" 
                                color={ratingValue <= (rating) ? "#ffc107" : "#e425e9"} 
                                size={40} />
                        
                             </label>
                            )
                            })}
                            
                            </div>
                        </label>
                        <label className="title-form">Review Title
                            <input 
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                                />
                        </label>
                        <label className="body-form">Review
                            <textarea
                                rows="5" 
                                cols="40"
                                type="text"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                required
                                />
                        </label>
                        
                        <button type="submit" >Submit Review</button>
                 </form>
            </div>
         </>
      
    )

}

export default ReviewFormModal; 
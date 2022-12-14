import './Review.css'
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { createReview,updateReview } from '../../store/review';
import { FaStar } from 'react-icons/fa';

const ReviewFormModal = ({setShowModal,selectedReview}) => {

    const user = useSelector(state => state.session.user)
    const {productId} = useParams();
    const history = useHistory();
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
    const [hover, setHover] = useState(null);

    const [validationErrors, setValidationErrors] = useState([])

    const validate = () => {
        let errors = [];
        if (!title) {
            errors.push("Title can't be blank")
        }
        if (!rating) {
            errors.push("Rating must be included")
        }
        if (!body) {
            errors.push("Body can't be blank")
        }
        return errors;
    }

    const handleSubmit = (e) => {   
        e.preventDefault();
        if(!user) history.push('/login');
        console.log(user)
        let errors = validate();

        if(errors.length > 0) {
            setValidationErrors(errors);
            return;
        }        
        console.log(rating);
        console.log(title);
        console.log(body);

        if (editReview){
            dispatch(updateReview({title,body,rating,product_id:productId,id:selectedReview.id}))
        }else{
            dispatch(createReview({title,body,rating,product_id:productId}))
        }
        if (errors.length === 0) {
            setTitle('')
            setBody('')
            setRating(0)
            setShowModal(false)
        }      
    }
    return(
        <>
            <div onClick={()=>setShowModal(false)} className="bg-modal">
            </div>


                

                <div className='review-modal'>
                    
                    <form onSubmit={handleSubmit} className="modal-form">
                    <div className='star-header'>
                    <div className="rating-form"><span className="modal-headers">Overall Rating:</span></div>
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
                                color={ratingValue <= (hover || rating) ? "#c18653" : "rgb(213, 209, 209)"} 
                                size={30}
                                onMouseEnter={(e)=> setHover(ratingValue)}
                                onMouseLeave={()=> setHover(null)} />
                             </label>
                            )
                            })}
                            </div>
                            </div>
                            <br/>
                        <label className='modal-headers'>Review Title:
                        <br/>
                            <input 
                                className="title-form"
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                // required
                                />
                        </label>
                        <br/>
                        <br/>
                        <label className='modal-headers'>Review:
                            <textarea 
                                className="body-form"
                                rows="5" 
                                cols="40"
                                type="text"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                // required
                                />
                        </label>
                        <br/>
                        <div className="errors">{validationErrors.map((error, i) => {
                        return <li key={i}>{error}</li>
                    })}</div>
                        <div id='submit-review-button'><button type="submit"  className="modal-button">Submit Review</button></div>
                 </form>
            </div>
         </>
      
    )

}

export default ReviewFormModal; 
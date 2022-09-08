import React from "react";
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct, getProduct } from "../../store/product";
import './ProductShow.css';

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    const [count, setCount] = useState(1);

    useEffect(()=>{
        dispatch(fetchProduct(productId))
    },[productId])

    if(!product) return null
        
    const {id, name, pictureUrl, price, description} = product;
    return(
        <div id="show-component">
            <div id="show-picture">
                <img src={product.photoUrl} alt="product-picture"/>
            </div>
            <div id="show-text-container">
                    <div id="show-name">{product.name}</div>
                    <div id="show-description">{product.description}</div>
                    <div id="show-price">${(Math.round(product.price * 100)/100).toFixed(2)}</div>
                    <div id="show-quantity-container">
                        <label for="show-quantity-container" id="show-label">Select Quantity</label>
                            <div className="show-quantity">
                                <button onClick={() => setCount(parseInt(count) + 1)}>+</button>
                                <button onClick={() => (setCount(parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                            </div>
                    </div>
                    <button id="show-add-button">Add to cart</button>
            </div>    
        </div>  
    )
}

{/* <>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
            <p>{product.description}</p>
            {/* <p>{product.category}</p> */}
            //<img src={product.pictureUrl}/>
       // </> */}

export default ProductShow; 
import { useSelector } from "react-redux";
import "./ProductShow.css";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct, getProduct } from "../../store/product";
import { useEffect, useState } from "react";
import ReviewIndex from "../Review/ReviewIndex";
import ReviewFormModal from "../Review/ReviewFormModal";

const ProductShow = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const [count, setCount] = useState(1);

    useEffect(() => {
        dispatch(fetchProduct(productId))
    }, [productId])

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        console.log(input + 1)
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
    if(!product) return null;

    const {id, name, pictureUrl, price, description} = product;
    
    return (
        <>
        <div id="show-component">
            <div id="show-picture">
                <img src={product.pictureUrl} alt="product-picture"/>
            </div>
            <div id="show-text-container">
                    <div id="show-name">{product.name}</div>
                    <div id="show-price">${(Math.round(product.price * 100)/100).toFixed(2)}</div>
                    <div id="show-quantity-container">
                        <label htmlFor="show-quantity-container" id="show-label"></label>
                            <div className="show-quantity">
                                <button id='plus-button' onClick={() => setCount(parseInt(count) + 1)}>+</button>
                                <input type="text" id="show-input" value={count} onChange={handleInput}></input>
                                <button id='minus-button' onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                            </div>
                    </div>
                    <button id="show-add-button">Add to cart</button>
                    <div id="show-description">{product.description}</div>
            </div>    
        </div>

        <ReviewIndex />
        <ReviewFormModal />
        </>
    )
}

export default ProductShow;
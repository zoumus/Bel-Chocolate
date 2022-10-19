import { useSelector } from "react-redux";
import "./ProductShow.css";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProduct, getProduct } from "../../store/product";
import { useEffect, useState } from "react";
import ReviewIndex from "../Review/ReviewIndex";
import ReviewFormModal from "../Review/ReviewFormModal";
import { createCartItem, getCartItem, updateCartItem } from "../../store/cart";
import { fetchUserItems } from "../../store/cart";
import CartItemIndex from "../CartItem/CartItemIndex";


const ProductShow = () => {
    const {productId} = useParams();
    const dispatch = useDispatch();
    const product = useSelector(getProduct(productId));
    const user = useSelector(state => state.session.user);

    const [count, setCount] = useState(1);
    const item = useSelector(getCartItem(productId));
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchProduct(productId))
        dispatch(fetchUserItems())
    }, [productId])

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
    const handleAddToCart = (e) => {
        e.preventDefault();
        if (!user) {
            history.push("/login");
        } else if(!item) {
            history.push("/cart");
            dispatch(createCartItem({productId: productId, quantity: count, userId: user.id}));
        } else {
            
            history.push("/cart");
            dispatch(updateCartItem({productId: productId, quantity: count+item.quantity, userId: user.id, id: item.id}));
        }
    }

    if(!product) return null;
        
    return (
        <>
        <div id="show-page">
            <div id="show-component">
                <div id="show-picture">
                    <img src={product.pictureUrl} alt="product-picture"/>
                </div>
                <div id="show-text-container">
                        <div id="show-name">{product.name}</div>
                        <div id="show-price">${(Math.round(product.price * 100)/100).toFixed(2)}</div>
                        {/* <div id="show-quantity-container"> */}
                            {/* <label htmlFor="show-quantity-container" id="show-label"></label> */}
                                <div className="show-quantity">
                                    <button className='plus-button' onClick={() => setCount(parseInt(count) + 1)}>+</button>
                                    <input type="text" className="show-input" value={count} onChange={handleInput}></input>
                                    <button className='minus-button' onClick={() => ((parseInt(count) - 1) > 0 ? setCount(parseInt(count) - 1) : setCount(1))}>-</button>
                                </div>

                        {/* </div> */}
                        <button id="show-add-button" onClick={handleAddToCart}>Add to cart</button>
                        <h1 className="desc-show">Description:</h1>
                        <div id="show-description">{product.description}</div>
                </div>    
            </div>
        </div>

        {/* <button onClick={()=>setShowModal(true)}>Write a Review</button> */}
        <ReviewIndex />
        </>
    )
}

export default ProductShow;
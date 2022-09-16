import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct, getProduct } from '../../store/product'
import { deleteCartItem, fetchCartItems, fetchUserItems, updateCartItem } from '../../store/cart'
import { useHistory } from 'react-router-dom'
import { useRef } from 'react'

const CartListings = ({cartItem}) => {
    const dispatch = useDispatch();
    const {quantity, productId, id} = cartItem;
    const product = useSelector(getProduct(cartItem.productId));
    const user = sessionStorage.getItem('currentUser');
    const [count, setCount] = useState(quantity);
    const [deleted, setDeleted] = useState(false);
    const history = useHistory();

    const firstUpdate = useRef(true);
    
    useEffect(() => {
        dispatch(fetchProduct(productId))
        dispatch(fetchUserItems())
    },[deleted])

    const handleUpdate = () => {
        const upCartItem = {
            ...cartItem,
            quantity: count
        };
        return dispatch(updateCartItem(upCartItem))
    }

    useEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }
        handleUpdate();
    },[count]);

    useEffect(()=> {
        setCount(cartItem.quantity)
    },[cartItem.quantity])

    if(!product) return null;

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deleteCartItem(id));
        setDeleted(true);
    }

    const handleInput = () => {
        let input = parseInt(document.getElementById("show-input").value);
        console.log(input + 1)
        if (input > 0) {
            setCount(input)
        } else {
            setCount("")
        }
    }
    return (
        <>
            <div id="cart-listing-wrapper">
                <div className="picture-text">
                <img id="cart-listing-img" src={product.pictureUrl} alt="product"/>
                <div id="listing-text">
                    <div className="listing-name" >{product.name}</div>
                    <div className="listing-price" >${(Math.round((product.price) * 100) / 100).toFixed(2)}</div>
                </div>
                </div>
                
                <div className="cart-counter-delete">
                    <div className="showshow-quantity">
                        <div className=" button-counter">
                            <button classname='plus-button-cart' onClick={e => setCount(count+1)}>+</button>
                            <input type="text" classname="show-input-cart" value={count} onChange={e => setCount(e.target.value)}></input>
                            <button className='minus-button-cart' onClick={() => ((count -1) > 0 ? setCount(count - 1) : setCount(1))}>-</button>
                        </div>
                    
                        <button className='cart-remove' onClick={handleDelete}>Remove</button>
                    </div>
                    <div className="cart_item_total">
                        <div id="listing-subtotal"> ${(Math.round((quantity * product.price) * 100) / 100).toFixed(2)}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CartListings;
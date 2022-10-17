import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserItems, deleteCartItem, getCartItems } from '../../store/cart';
import { fetchProducts } from '../../store/product';
import { useHistory } from 'react-router-dom';
import CartListings from './CartListings';
import './CartItem.css'

const CartItemIndex = () => {
    const cartItems = useSelector(getCartItems);
    const dispatch = useDispatch();
    const user = sessionStorage.getItem("currentUser");
    const history = useHistory();

    useEffect(() => {
        dispatch(fetchUserItems()) 
    }, [])

    const deleteCart = () => {
        return cartItems.map(cartItem => (
            dispatch(deleteCartItem(cartItem.id))
        ))
    }
    const handleCheckout = (e) => {
        e.preventDefault();
        deleteCart();
        // handleCheckoutModal();
        history.push("/account");
    }

    // const handleCheckoutModal = () => {
    //     let modal = document.getElementById("checkout-modal");
    //     modal.style.display = "block";
    //     let bg = document.getElementById("checkout-modal-background");
    //     bg.style.display = "block";
    // }

    const calcTotal = () => {
        return cartItems.reduce((acc, ele) => acc + ele.price*ele.quantity, 0);
    }

    if(!cartItems) return null;
    
    if (cartItems.length === 0) {
        return (
    
            <div className='empty-cart'>
               <div className="empty-cart-message">
                        <h1>Your cart is empty!</h1>
                </div>
                <div className="empty-cart-link">
                    <Link to="/products">Shop Our Products</Link>
                </div>
            </div>
        ) 

    } else {
        return (
            <div className='cart-holder'>
            
            <div classname="cart-first">
                 <h1 className="cart-first-h1">Cart</h1>
                </div>
            <div id="cart-page">
            <div className='cart-container'>
                 <div className="cart-second">
                    <div className="cart-product"><h1>Product</h1></div>
                    <div className="quantity-total">
                        <h1>Quantity</h1>
                        <h1>Total</h1>
                    </div>
                </div>
                <div className="show-listing">
                    {cartItems.map(cartItem => (
                        <CartListings key={cartItem.id} cartItem={cartItem}/>
                ))}
                </div>
                <div className="cart-last">
                <div className="gift">
                        <h1 className="gift-header">🎁 Add a Gift Note 🎁</h1>
                        <h1 className="gift-text">Tip: emoji and special characters aren't supported, remember to include who the order is from!</h1>
                </div>
                <div className="total-price">
                    <h1 className="total-total">total: ${calcTotal() + '.00'}</h1> 
                    <h1 className="checkout-checkout">Shipping calculated at checkout.</h1>
                    {(user && cartItems.length > 0) ? <button id="checkout-button" onClick={handleCheckout}>Checkout</button> : null}
                    {/* <button id="checkout-button" onClick={handleCheckout}>Checkout</button> */}
                </div>
                </div>
                
            </div>
            </div>
            </div>
        )
    }
}
export default CartItemIndex;
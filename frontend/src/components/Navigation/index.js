import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { fetchByCategory, fetchProducts } from '../../store/product';
import './Navigation.css';
import { useParams } from "react-router-dom";
import {useState, useEffect} from 'react'
import { fetchProduct, getProduct } from "../../store/product";
import ProductIndex from '../ProductPage/ProductIndex';
import SearchBar from '../SearchBar/SearchBar';
import {getCartItems, fetchUserItems} from '../../store/cart';

function Navigation() { 
  const {productId} = useParams();
  const product = useSelector(getProduct(productId));
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const location = useLocation();
  const [showSearchBar, setSearchBar] = useState(false);

  useEffect(() => {
    dispatch(fetchUserItems());
    dispatch(fetchProducts());

    }, [cartItems.length]
  )

  useEffect(() => {
    setSearchBar(false)
    }, [location.pathname]
  )

  const cartItemsNum = () => {
    let total = 0;
    if (!sessionUser) return total;
    
    cartItems.forEach(cartItem => (
        total = total + Number(cartItem.quantity)
    ))
    return total;
  }

  const navnav = () =>{
    if (location.pathname === "/"){
        return "brown"
    } else if (location.pathname === "/About") {
        return "pink"
    } else if (location.pathname === "/products" || location.pathname === "/acount" || location.pathname === "/login" || location.pathname === "/signup" || location.pathname === "/products/category/1" || location.pathname === "/products/category/2" || location.pathname === "/products/category/3"){
      return "yellow"
    } else {
      return 'yellow'
    }
  }

  
  return (
    <header id="links-icons" className={navnav()}>
      <div className='left'>
        {/* <div className='categories'> */}
        <div><Link to="/products" className="nav-link" onClick={()=>dispatch(fetchProducts())}>Shop All</Link></div>
        <div><Link to="/products/category/1" className="nav-link" onClick={()=> dispatch(fetchByCategory(1))}>Truffles</Link></div>
        <div><Link to ="/products/category/2" className="nav-link" onClick={()=> dispatch(fetchByCategory(2))}>Bars</Link></div>
        <div><Link to="/products/category/3" className="nav-link" onClick={()=> dispatch(fetchByCategory(3))}>Sets</Link></div>
        <div><Link exact to="/About" className="nav-link">About</Link></div>
        {/* </div> */}
      </div>

      <div className='middle'>
        <NavLink exact to="/">BelChocolate</NavLink>
      </div>
      
      <div className='right'>
        <div className="nav-link">
          {!sessionUser ? (<a href="/login"><i className="fa-solid fa-user" id="account-icon"></i>Account</a>) : (<a href="/account"><i className="fa-solid fa-user" id="account-icon"></i>Account</a>)} 
        </div>
        <div className="nav-link" onClick={()=> setSearchBar(!showSearchBar)}>
          <i class="fa-sharp fa-solid fa-magnifying-glass" id="search-icon"></i>Search
        </div>
        <div className="nav-link">
        {!sessionUser ? (<a href="/login"><i className="fa-solid fa-cart-shopping" id="cart-icon"></i>Cart {cartItemsNum()}</a>) : (<a href="/cart"><i className="fa-solid fa-cart-shopping" id="cart-icon"></i>Cart {cartItemsNum()}</a>)}                   
        </div>
        {/* <div className="cart-quantity">{cartItemsNum()}</div>          */}
      </div>
        {showSearchBar && <SearchBar setSearchBar={setSearchBar}/> }
        
    </header>  
  )
}
export default Navigation;

import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { fetchByCategory, fetchProducts } from '../../store/product';
import './Navigation.css';
import {useState, useEffect} from 'react'
import ProductIndex from '../ProductPage/ProductIndex';
import SearchBar from '../SearchBar/SearchBar';
import {getCartItems, fetchUserItems} from '../../store/cart';

function Navigation() { 
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const cartItems = useSelector(getCartItems);

  const location = useLocation();
  const [showSearchBar, setSearchBar] = useState(false);

  useEffect(() => {
    dispatch(fetchUserItems());
    dispatch(fetchProducts());

}, [cartItems.length])

useEffect(() => {
  setSearchBar(false)
}, [location.pathname])

  const cartItemsNum = () => {
    let total = 0;
    if (!sessionUser) return total;
    
    cartItems.forEach(cartItem => (
        total = total + Number(cartItem.quantity)
    ))
    return total;
}

  
  return (
    <div className="links-icons">
      <div className='left'>
        <div className='categories'>
            <div><Link to="/products"><div className="shop-all" onClick={()=>dispatch(fetchProducts())}>Shop All</div></Link></div>
            <div><Link to="/products/category/1"><div className="truffles" onClick={()=> dispatch(fetchByCategory(1))}>Truffles</div></Link></div>
            <div><Link to ="/products/category/2"><div className="bars" onClick={()=> dispatch(fetchByCategory(2))}>Bars</div></Link></div>
            <div><Link to="/products/category/3"><div className="sets" onClick={()=> dispatch(fetchByCategory(3))}>Sets</div></Link></div>
            <div><div><Link exact to="/About">Info</Link></div></div>
        </div>
      </div>

      <div className='middle'>
          <NavLink exact to="/">BelChocolate</NavLink>
      </div>
      
        <div className='right'>
                <div id="account-link">
                  {!sessionUser ? (<a href="/login"><i className="fa-solid fa-user" ></i></a>) : (<a href="/account"><i className="fa-solid fa-user" ></i></a>)} 
                </div>
                <div onClick={()=> setSearchBar(!showSearchBar)}id="search-link">
                  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="cart-link">
                {!sessionUser ? (<a href="/login"><i className="fa-solid fa-cart-shopping"></i></a>) : (<a href="/cart"><i className="fa-solid fa-cart-shopping"></i></a>)}                   
                </div>
                <div className="cart-quantity">{cartItemsNum()}</div>

                
        </div>
        {showSearchBar && <SearchBar setSearchBar={setSearchBar}/> }
        
    </div>  
  )
}
export default Navigation;

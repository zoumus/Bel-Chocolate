import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch} from "react-redux";
import { fetchByCategory, fetchProducts } from '../../store/product';
import './Navigation.css';
import ProductIndex from '../ProductPage/ProductIndex';

function Navigation() { 
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   if(e.target.className === "shop-all") {
  //     dispatch(fetchProducts())
  //   } else if(e.target.className === "truffles") {
  //     dispatch(fetchByCategory(1));
  //   } else if(e.target.className === "bars") {
  //     dispatch(fetchByCategory(2));
  //   } else if(e.target.className === "sets") {
  //     dispatch(fetchByCategory(3));
  //   }
  // }
  
  return (
    <div className="links-icons">
      <div className='left'>
        <div className='categories'>
            <div className="shop-all" onClick={()=>dispatch(fetchProducts())}>Shop All</div>
            <div className="truffles" onClick={()=> dispatch(fetchByCategory(1))}>Truffles</div>
            <div className="bars" onClick={()=> dispatch(fetchByCategory(2))}>Bars</div>
            <div className="sets" onClick={()=> dispatch(fetchByCategory(3))}>Sets</div>

            <div><NavLink exact to="/About">Info</NavLink></div>
        </div>
      </div>

      <div className='middle'>
          <NavLink exact to="/">Bel Chocolate</NavLink>
      </div>
      
        <div className='right'>
                <div id="account-link">
                  {!sessionUser ? (<a href="/login"><i className="fa-solid fa-user" ></i></a>) : (<a href="/account"><i className="fa-solid fa-user" ></i></a>)} 
                </div>
                <div id="search-link">
                  <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                </div>
                <div id="cart-link">
                  <i className="fa-solid fa-cart-shopping"></i>
                  
                </div>
                
        </div>
        
    </div>  
  )
}
export default Navigation;

{/* <div><NavLink exact to="/products">Shop All</NavLink></div> */}
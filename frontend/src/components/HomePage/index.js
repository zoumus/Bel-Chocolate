import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import splashPicture from '../../assets/SplashPicture/imageSplash.jpeg';
import Footer from "../Footer/Footer.js";
import { fetchUserItems } from "../../store/cart";
import { useDispatch, useSelector } from "react-redux";
import TextCarausel from "./TextCarausel";
import Products from "./Products";

function HomePage() {

    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    useEffect(() => {
        if (user) dispatch(fetchUserItems)
    },[])

    return(
        <>
            <div id="splash-section">
                <div id="splash-text">
                    <div className="first-text"><h3>Stunning Treats & Artful Gifts</h3></div>
                    <div className='second-text'><h4>Gourmet chocolate & sweet treats handmade in San Francisco that comfort, delight, and inspire.</h4></div>
                    <div className="splash-link"><Link to="/products">Order Chocolate Online</Link></div>
                </div>
                <div className="splash-image">
                    <img src={ splashPicture } alt="yummy chocolate" ></img>
                </div>
            </div>   
            <TextCarausel/>
            <Products/> 
        </>

    )
}
export default HomePage;
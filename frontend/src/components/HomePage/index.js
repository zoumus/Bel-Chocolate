import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import splashPicture from '../../assets/SplashPicture/imageSplash.jpeg';
import Footer from "../Footer/Footer.js";

function HomePage() {
    return(
        <>
            <div id="splash-section">
                <div id="splash-text">
                    <div className="first-text"><h3>Stunning Treats & Artful Gifts</h3></div>
                    <div className='second-text'><h4>Gourmet chocolate & sweet treats handmade in San Francisco that comfort, delight, and inspire.</h4></div>
                    <Link to="/products">Order Chocolate Online</Link>
                </div>
                <div className="splash-image">
                <img src={ splashPicture } alt="yummy chocolate" ></img>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default HomePage;
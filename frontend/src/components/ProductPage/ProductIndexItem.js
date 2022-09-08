import React from "react";
import { Link } from "react-router-dom";
import './ProductIndexItem.css';


const ProductIndexItem = ({product}) => {

    return(
        <div className="container" >
            {/* <div classname="top"> */}
                <Link id="img-container" to={`/products/${product.id}`}><img  src={product.pictureUrl} className="product-img"/></Link>
            {/* </div> */}
            <div className="bottom">
                <div className="product-name"><Link to={`/products/${product.id}`}>{product.name}</Link></div>
                <div className="product-price">${(Math.round(product.price * 100) / 100).toFixed(2)}</div>
            </div>
        </div>
    )
}

export default ProductIndexItem;
import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, getProducts } from "../../store/product";
import ProductIndexItem from "./ProductIndexItem"; 
import './ProductIndex.css';

const ProductIndex = () => {
    const prods = useSelector(getProducts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    return(
        <div id="product-page">
            <h1 id='product-header'>Products</h1>
            <div id="product-item">
                {prods.map(product=>(
                <div id='product-list'><ProductIndexItem key={product.id} product={product} /></div>
            ))}
            </div>  
        </div>
        
    )

}

export default ProductIndex;
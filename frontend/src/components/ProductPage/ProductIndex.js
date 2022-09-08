import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts, getProducts } from "../../store/product";
import ProductIndexItem from "./ProductIndexItem"; 

const ProductIndex = () => {
    const products = useSelector(getProducts)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts(products))
    },[dispatch])

    return(
        <ul>
            {products.map(product=>(
                <ProductIndexItem product={product} key={product.id}/>
            ))}
        </ul>
        
    )

}

export default ProductIndex;
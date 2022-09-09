import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, getCategories } from "../../store/category";
import CategoriesIndexItem from "./CategoryIndexItem"; 
import ProductIndexItem from "../ProductPage/ProductIndexItem";
import { getProducts, fetchProducts } from "../../store/product";


const CategoryIndex = () => {
    const categories = useSelector(getCategories)
    console.log(categories, 'categories')
    const products = useSelector(getProducts)

    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(fetchProducts())
    },[dispatch])

    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])

    return(
        <>
            <div className="product-item">
                <h1>Dark Chocolate Truffles</h1>
                {products.map(product=>(
                <ProductIndexItem key={product.id} product={product} />
            ))}
            </div>
        
        </>
        
    )

}

export default CategoryIndex;
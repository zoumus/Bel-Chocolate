import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories, getCategories } from "../../store/category";
import CategoriesIndexItem from "./CategoryIndexItem"; 
import ProductIndexItem from "../ProductPage/ProductIndexItem";
import { getProducts, fetchProducts, fetchProductsByCategory } from "../../store/product";


const CategoryIndex = () => {
    const categories = useSelector(getCategories)
    const { categoryId } = useParams()
    const products = useSelector(getProducts)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCategories())
    },[])
    useEffect(()=> {
        dispatch(fetchProductsByCategory(categoryId))
    }, [categoryId])

    if(!categories || categories.length === 0) return null;
    
    return(
        <>
            <div className="header-desc">
                <h1 id="product-header">{categories[categoryId].name}</h1>
                <h1 id="product-description">{categories[categoryId].description}</h1>
            </div>
        
            <div className="category-item">
                {products.map(product=>(
                <ProductIndexItem key={product.id} product={product} />
            ))}
            </div>
        
        </>
        
    )

}

export default CategoryIndex;
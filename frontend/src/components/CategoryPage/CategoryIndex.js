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
    // console.log(categories, 'categories')
    const { categoryId } = useParams()
    const products = useSelector(getProducts)

    const dispatch = useDispatch();
    
    // useEffect(()=>{
    //     dispatch(fetchProducts())
    // },[dispatch])

    useEffect(()=>{
        console.log('hello')
        dispatch(fetchCategories())
    },[])
    useEffect(()=> {
        dispatch(fetchProductsByCategory(categoryId))
    }, [categoryId])

    // if(!categories) return null;
    // const {id, name } = categories

    console.log(categories, "categories")

    return(
        <>
            <div className="product-item">
                {/* <h1>{categories.name}</h1> */}
                {products.map(product=>(
                <ProductIndexItem key={product.id} product={product} />
            ))}
            </div>
        
        </>
        
    )

}

export default CategoryIndex;
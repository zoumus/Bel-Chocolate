import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchCategories, getCategories } from "../../store/category";
import CategoriesIndexItem from "./CategoryIndexItem"; 

const CategoryIndex = () => {
    const categories = useSelector(getCategories)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchCategories())
    },[dispatch])

    return(
        <>
            <div className="product-item">
                <h1>don't know what to put</h1>
                {categories.map(category=>(
                <CategoriesIndexItem key={category.id} category={category} />
            ))}
            </div>
            
        </>
        
    )

}

export default CategoryIndex;
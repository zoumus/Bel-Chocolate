import React from "react";
import { Link } from "react-router-dom";


const CategoriesIndexItem = ({category}) => {

    return(
        <>
            <Link to={`/categories/${category.id}`}>{category.name}</Link>
            <img src={category.pictureUrl}/>
        </>
    )
}

export default CategoriesIndexItem;
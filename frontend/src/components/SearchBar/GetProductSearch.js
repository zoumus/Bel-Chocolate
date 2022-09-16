import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductPage/ProductIndexItem";
import './SearchBar.css';
const GetProductSearch = () => {
    let products = useSelector(state => Object.values(state.products));

    if(products.length === 0) {
        return (
            <div>
                <div className="no-products">No results could be found!</div>
                {/* <Redirect to="/> */}
            </div>
        ) 
    }

    if(!products.length) return null;

    return (
        <div className='search-items'>
            {products.map(product => <ProductIndexItem key={product.id} product={product}/>)}
        </div>
    )
}
export default GetProductSearch;
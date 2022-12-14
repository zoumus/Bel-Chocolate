import { useSelector } from "react-redux";
import ProductIndexItem from "../ProductPage/ProductIndexItem";
import { FaSadTear } from "react-icons/fa";
import './SearchBar.css';
const GetProductSearch = () => {
    let products = useSelector(state => Object.values(state.products));

    if(products.length === 0) {
        return (
            <div className="research-no-product">
                <div id="no-products-icon">
                    <div className="no-products">Sorry, no results could be found!</div>
                    <div className="fasadtear"><FaSadTear id="fa-cry"/></div>
                </div>
            </div>
        ) 
    }

    if(!products.length) return null;

    return (
        <div className="research-with-product">
            <div className="research-with">
                <div className='search-items'>
                    {products.map(product => <ProductIndexItem key={product.id} product={product}/>)}
                </div>
            </div>
        </div>
    )
}
export default GetProductSearch;
import React from 'react';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSearchedProducts } from '../../store/product';
import './SearchBar.css';

const SearchBar = ({setSearchBar}) => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();
    let path = '/result';

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getSearchedProducts(query))
        setSearchBar(false);
        document.querySelector('body').style.overflow = 'scroll';
        history.push(path);
    }
    const handleCloseSearch = () => {
        setSearchBar(false);
        document.querySelector('body').style.overflow = 'scroll';
    }

    const update = (field) => {
        return e => {
            switch (field) {
                case 'query':
                    setQuery(e.target.value)
                    break;
                default:
                    console.log('Name error.');
                    break;     
            }
        }
    }

    document.querySelector('body').style.overflow = 'hidden';

    return (
        <>
            
            <div className="overflow">
                <div className='bg-modal-sb'></div>
                <div className="search-bar-page">
                    <div className="search-bar-dropdown">
                        <form onSubmit={handleSubmit}>
                            <div className="search-text">
                            <span
                                type="submit"
                                className="search-wait">
                                <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </span>

                            <input
                                autoFocus='autofocus'
                                value={query}
                                placeholder="Search..."
                                onChange={update('query')}
                            />
                            </div>

                        </form>
                        <div className='search-bar-button' onClick={handleCloseSearch}><p className="close-bar">x</p></div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default SearchBar;
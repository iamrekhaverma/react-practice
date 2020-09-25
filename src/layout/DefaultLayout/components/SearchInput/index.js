// Dependencies
import React from 'react';
import { NavLink } from 'react-router-dom';

const SearchInput = () => (
    <div class="desktop-query">
        <input placeholder="Search for products" class="desktop-searchBar" value=""/>
            <NavLink to="/search" class="desktop-submit">
                <span class="myntraweb-sprite desktop-iconSearch sprites-search">
                    <i class="fa fa-search" aria-hidden="true"></i>
                </span>
            </NavLink>
    </div>
);

export default SearchInput;

import React, { useEffect, useState } from 'react';
import services from 'services';
import {addBrandToFilter, removeBrandFromFilter} from "../../pages/products/actions";
import { connect } from 'react-redux';

const BrandsFilter = (props) => {
    const {dispatch } = props;
    const [brands, setBrands] = useState([]);
    useEffect(() => {
        services.getRequest('/brands')
            .then(
            (res) => { console.log("response of brands",res);setBrands(res.data);}
        );
    },[])
    const handleSelectBox = (e) => {
        const name = e.target.name;
        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };
    return (
        <div className="vertical-filters-filters brand-container">
            <span class="vertical-filters-header">Brand</span>
            <ul className="brand-list">
                    {brands.map(brand => (
                        <li key={brand}>
                            <label class="container">
                                <input type="checkbox"
                                       name={brand}
                                       className="" onInput={handleSelectBox}/>
                                    {brand}
                                    <span class="checkmark"></span>
                            </label>
                        </li>
                    ))}
                </ul>
        </div>
    );
}

export default connect(null,null)(BrandsFilter);
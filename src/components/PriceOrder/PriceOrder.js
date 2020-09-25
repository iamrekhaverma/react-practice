import React from 'react';
const priceOrder = ["Low to High","High to low"]

export const PriceOrder = (props) => {
    return (
        <div className="vertical-filters-filters">
            <span className="header-title header-container">Price</span>
            <ul className="price-list">
                {
                    priceOrder && priceOrder.map((item,index) => (
                        <li key={item}>
                            <div class="custom-control custom-checkbox mb-3">
                            <input type="radio" class="custom-control-input" id={`radio-${index}`} name="example1"/>
                            <label class="custom-control-label" htmlFor="customCheck">{item}</label>
                            </div>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}
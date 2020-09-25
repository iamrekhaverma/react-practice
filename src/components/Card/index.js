import React from 'react';

export const ProductCard = (props) => {
    const { data, showProductDetails } = props;
    return (
			<ul className="results-base">
				{
					data && data.map((item) => (
							<li key={item.id} className="product-base">
									<a href="#" className="product-base__img--link">
									<div className="product-base__img">
											<img src={item.img} alt="" onClick={() => showProductDetails(item)} style={{width:"100%",height:"100%",objectFit: 'contain'}}/>
									</div>
									<div className="product-productMetaInfo">
											<div className="product-product">{item.description}</div>
											<div className="product-price">MRP: ${item.price}</div>
									</div>
									</a>
									<div className="product-bag">
									<a><i class="fa fa-plus" aria-hidden="true"></i></a>
									</div>
							</li>
					))
				}
			</ul>
    );
}
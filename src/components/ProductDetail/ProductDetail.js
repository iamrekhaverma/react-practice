import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import services from 'services';

const ProductDetail = (props) => {
    console.log("8888888888888888",props);
    const [productData, setProductData] = useState({});
    const url = props.location.pathname;
    useEffect(() => {
        services.getRequest(url)
            .then(
            (res) => {setProductData(res.data)}
        );
    },[url]);
    const onCart = () => {};
    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
			<h3 className="title mb-3">{productData.name}</h3>
			<p className="price-detail-wrap">
			<span className="price h3 text-warning">
			<span className="currency">$</span><span className="num">{productData.price}</span>
			</span>
				</p>
				<dl className="item-property">
					<dt>Description</dt>
					<dd><p className="text-capitalize">{productData.description}</p></dd>
				</dl>
				<dl className="param param-feature">
					<dt>Brand</dt>
					<dd className="text-capitalize">{productData.brand}</dd>
				</dl>
				<img src={productData.img} alt=""/>
				<hr/>
				<button
						onClick={onCart}
						className="btn btn-lg btn-outline-primary text-uppercase"><i
						className="fa fa-shopping-cart"/> Add to cart
				</button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);

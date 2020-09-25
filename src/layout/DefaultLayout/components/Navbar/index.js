import React, { useState, useEffect} from 'react';
import services from 'services';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [productCategoryData, setProductCategoryData] = useState([]);

  useEffect(() => {
    services.getRequest('/product-categories')
      .then(
        (res) =>
         {setProductCategoryData(res.data); console.log(res.data,"data")}
    );
  },[]);

  return (
    <nav className="desktop-navbar">
      <div className="desktop-navLinks">
        <div className="desktop-navContent">
          <div className="desktop-navLink">
            {
              productCategoryData && productCategoryData.map((item) => (
                <NavLink key={item.id} activeClassName="selected" className="nav-link desktop-main" exact to={`/products?${item.name}`}>{item.name}</NavLink>
              ))
            }
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import {NavLink} from 'react-router-dom';
import SearchInput from '../SearchInput';
import Resources from "assets/Resources";

const Header = () => {
  return (
    <header className="desktop-container">
      <div 
        class="desktop-logoContainer" 
        data-reactid="15"
      >
        <NavLink to="/" class="desktop-logo" style={{background:   `url(${Resources.images.logo})`}}></NavLink>
      </div>
      {/* <Navbar/> */}
      <div className="desktop-actions">
      <div class="desktop-user" data-reactid="629">
      <NavLink to="/cart" className="desktop-cart"><i class="fa fa-shopping-cart"></i> 
        <span class="badge">16</span>
      </NavLink>
      </div>
      </div>
      <SearchInput/>
    </header>
    );
}

export default Header;

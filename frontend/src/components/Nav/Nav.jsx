import React from "react";
import { Link } from 'react-router-dom';


import './Nav.css'



const Nav = ({click}) => {
  return (

    <div className="Nav">
      <div className="Nav_logo" >
      
        <h3>FULLSHOP</h3>
      
      </div>
      <ul className="Nav_links">
        <li>
          <Link to="/CartList">
          <i className="fas fa-shopping-cart"></i>
          <span className="cart_icon">
          Cart
            <span className="cart_num" >0</span>
             
          
            </span>
          </Link>
        </li>
        <li>
        <Link to="/">
          Shop

        </Link>

      </li>
      </ul>

      <div className="Nav_menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>


  );
};

export default Nav;

import React from "react";
import { Link } from 'react-router-dom';


import './Cart.css'



const Cart = () => {
  return (<div className="Cart">
    <div className="Cart_img">
      <img src="https://images.unsplash.com/photo-1605787020600-b9ebd5df1d07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1463&q=80" alt="Product" />
    </div>

    <Link to={`/product/${111}`} className="Cart_name">
      <p>emotion1</p>
    </Link>
    <p className="Cart_price">299.99 EUR</p>

    <select className="Cart_select">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>

    <button className="Cart_button">
      <i className="fas-fa-trash">Delete</i>
    </button>




  </div>);
};

export default Cart;

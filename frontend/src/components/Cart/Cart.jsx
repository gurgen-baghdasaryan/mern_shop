import React from "react";
import { Link } from 'react-router-dom';


import './Cart.css'



const Cart = ({imageUrl,  price, name, productId}) => {
  return (<div className="Cart">
    <div className="Cart_img">
      <img src={imageUrl} alt={name} />
    </div>

    <Link to={`/product/${productId}`} className="Cart_name">
      <p>emotion1</p>
    </Link>
    <p className="Cart_price">{price} EUR</p>

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

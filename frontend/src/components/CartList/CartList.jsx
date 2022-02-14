import React from "react";

import './CartList.css'
import Cart from '../Cart'


const CartList = ({imageUrl,  price, name, productId}) => {


  return (<div className="CardList">
    <div className="first_container">
      <h3>Shoping Cart</h3>
      <Cart/>
      <Cart/>
    </div> 

    <div className="second_container">
    <img src={imageUrl} alt={name} /><img src={imageUrl} alt={name} />
      <div className="Cart_info">
      <p>total(0)items</p>
      <p>{price}</p>
      </div>
      <div>
        <button>Check</button>
      </div>
    </div>

    
  
  </div>);
};

export default CartList;

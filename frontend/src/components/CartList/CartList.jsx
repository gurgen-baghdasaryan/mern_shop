import React from "react";
import { useEffect, } from "react";

import './CartList.css'
import Cart from '../Cart'


const CartList = () => {



  useEffect(() => {}, []);



  return (<div className="CardList">
    <div className="first_container">
      <h3>Shoping Cart</h3>
      <Cart/>
      <Cart/>
     
     
    </div> 

    <div className="second_container">
      <div className="Cart_info">
      <p>total(0)items</p>
      <p>300 EUR</p>
      </div>
      <div>
        <button>Check </button>
      </div>
    </div>

    
  
  </div>);
};

export default CartList;

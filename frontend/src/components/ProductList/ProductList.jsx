import React from "react";
import { Link } from 'react-router-dom';

import './ProductList.css'


const ProductList = ({imageUrl, description, price, name, productId}) => {
  return <div className="ProductList">
  
  <img src={imageUrl} alt={name} />
  <div className="ProductList_info">
    <p className="ProductList_name">{name}</p>
    <p className="ProductList_desc">{description}</p>
    <p className="ProductList_price">{price} €</p>
    <Link to={`/product/${productId}`} className="ProductList_button">Shop now</Link>
  </div>
  
  </div>;
};

export default ProductList;

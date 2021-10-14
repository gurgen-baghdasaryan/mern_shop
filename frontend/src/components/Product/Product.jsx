import React from "react";
import { useEffect ,useState } from "react";
import axios from "axios";

import './Product.css'


const Product = ({match}) => {

   const [product, setproduct] = useState({})

   useEffect(() => {

    axios.get(`http://localhost:5000/api/products/${match.params.id}`)
        .then(res => {
          setproduct(res.data)
          console.log(res.data);

        })
        .catch(error => console.log(error))

  //   if (product && match.params.id !== product._id) {
  //     dispatch(getProductDetails(match.params.id));
  //   }
     
   }, []);


  return (<div className="Product">

    <div className="first_container">
      <img src={product.imageUrl} alt={product.name} />
    </div>
    <div className="first_info">
      <p className="first_name">{product.name}</p>
      <p className="first_desc">Description: {product.description}</p>
      <p className="first_price">Price: {product.price} €</p>
    </div>

    <div className="second_container">
      <div className="second_info">
        <p>
          Price:<span>{product.price}</span>
        </p>
        <p>
          Status: <span>In Stock</span>
        </p>
        
          Quantity
        <select >
          
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <p>
        <button type="button">Add to Cart</button>
        </p>
      </div>
    </div>

  </div>);
};

export default Product;

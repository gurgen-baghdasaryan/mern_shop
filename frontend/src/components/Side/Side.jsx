import React from "react";
import { Link } from 'react-router-dom';

import './Side.css'

const Side = ({show, click }) => {
  const sideDrawerClass = ["Side"] 

  if (show) {
    sideDrawerClass.push("show");
  }
  return (
    <div className={sideDrawerClass.join(" ")}>
    <ul className="side_links" onClick={click}>
        <li>
        <Link to="/Cart">
          <i className="fas fa-shopping-cart"></i>
          <span>
          Cart <span className="Side_cartNum">0</span>
          </span>
        </Link>
        </li>
        <li>
        <Link to="/">Shop</Link>
       </li>
    </ul>
  
  </div>
  );
};

export default Side;

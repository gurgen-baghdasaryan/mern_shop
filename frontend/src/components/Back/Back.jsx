import React from "react";
import './Back.css'

const Back = ({show, click}) => {
  return show && <div className="Back" onClick={click }>Back</div>;
};

export default Back;

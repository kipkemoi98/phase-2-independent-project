

import React from "react";
import "./Items.css";

const items = ({ fashion }) => {
  return (
    <div className="items">
      <h3>{fashion.name}</h3>
      <img src={fashion.image} alt={fashion.name}/>
      <div className="description">
        <p>{fashion.products}</p>
        <p>{fashion.directions}</p>
      </div>
    </div>
  );
};

export default items;
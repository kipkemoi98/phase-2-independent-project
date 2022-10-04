import React from "react";
import "./Recipes.css";

const Recipes = ({ recipe }) => {
  return (
    <div className="recipe">
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} />
      <div className="description">
        <p>{recipe.ingredients}</p>
        <p>{recipe.directions}</p>
      </div>
    </div>
  );
};

export default Recipes;

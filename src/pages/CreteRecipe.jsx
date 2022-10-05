// import { useNavigate } from "react-router-dom";
import "./CreateRecipe.css";
export default function CreteRecipe() {
  //post request to create a new recipe
//   let nav = useNavigate();
//   const routeChange = () => {
//     nav("/recipes");
//   };
  const postRecipe = async (e) => {
    e.preventDefault();
    const recipe = {
      name: e.target.name.value,
      ingredients: e.target.ingredients.value,
      directions: e.target.directions.value,
      image: e.target.image.value,
      
    };
    const response = await fetch(
      "https://developer.edamam.com/edamam-docs-recipe-api",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(recipe),
      }
    );
    const data = await response.json();
    console.log(data);
  };
    const clearForm = (e) => {
        e.target.name.value = "";
        e.target.ingredients.value = "";
        e.target.directions.value = "";
        e.target.image.value = "";
        window.render() 
    }
  return (
    <div className="container">
      <h1>Create Recipe Form</h1>
      <form onSubmit={postRecipe } className="form-center">
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Ingredients:</label>
        <input type="text" name="ingredients" />
        <label>Directions:</label>
        <input type="text" name="directions" />
        <label>Image:</label>
        <input type="text" name="image" />
        <button type="submit" onClick={clearForm} >
          Submit
        </button>
      </form>
    </div>
  );
}

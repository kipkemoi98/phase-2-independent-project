import "./src/src/pages/AddNewFashionn.csspages/AddNewFashionn.css";
export default function AddNewFashions() {
  const postFashion= async (e) => {
    e.preventDefault();
    const fashion = {
      name: e.target.name.value,
      products: e.target.products.value,
      directions: e.target.directions.value,
      image: e.target.image.value,
      
    };
    const response = await fetch(
      "https://recipe-app-98.herokuapp.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fashion),
      }
    );
    const data = await response.json();
    console.log(data);
  };
    const clearForm = (e) => {
        e.target.name.value = "";
        e.target.Items.value = "";
        e.target.directions.value = "";
        e.target.image.value = "";
        window.render() 
    }
  return (
    <div className="container">
      <h1>Create Items</h1>
      <form onSubmit={postFashion } className="form-center">
        <label>Name:</label>
        <input type="text" name="name" />
        <label>Items:</label>
        <input type="text" name="Items" />
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
import { useNavigate } from "react-router-dom";
import "./Home.css";
export default function LandingPage() {
  let nav = useNavigate();
  const routeChange = () => {
    nav("/add");
  };
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1>Welcome to Recipe App</h1>
        <p>
          This is a recipe app that allows you to create, and Read recipes
          from others
        </p>
        <p>Create Recipes by clicking the button.</p>
        <button className="btn" onClick={routeChange}>
          Create Recipe
        </button>
      </div>
      <div className="landing-page-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/public/assets/images/istockphoto-1320857678-170667a.jpg"}
          alt=""
        />
      </div>
    </div>
  );
}
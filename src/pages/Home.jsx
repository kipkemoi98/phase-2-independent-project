//create landing page
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
        <h1>Welcome to Recipe Book</h1>
        <p>
          This is a recipe book app that allows you to create, and Read recipes
          from others
        </p>
        <p>To create a recipe, click the button below.</p>
        <button className="btn" onClick={routeChange}>
          Create Recipe
        </button>
      </div>
      <div className="landing-page-image">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/landing.svg"}
          alt="recipe"
        />
      </div>
    </div>
  );
}

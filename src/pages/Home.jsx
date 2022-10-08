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
        <h1>Welcome to Menwear App</h1>
        <p>
        At Eukos we have curated the latest and the coolest menswear for you to update your go-to wardrobe with better-fitting outfits.
        </p>
        <p>Add more items by clicking the button.</p>
        <button className="btn" onClick={routeChange}>
          VIEW MORE </button>
      </div>
      <div className="landing-page-image">
      
                </div>
    </div>
  );
}

import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import "./index.css"
import RecipeItems from './pages/RecipeItems';
import CreteRecipe from './pages/CreteRecipe';
import ContactForm from './pages/ContactForm';
import LandingPage from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/Add' element={<Recipe />} ></Route>
        <Route exact path='/recipes' element={<RecipeItems />} ></Route>
        <Route exact path='/contact' element={<ContactForm/>}></Route>
      </Routes>
    </div >

  );
}

export default App;

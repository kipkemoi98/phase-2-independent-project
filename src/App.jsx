import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import "./index.css"
import FashionItems from './pages/FashionItems';
import AddNewFashions from "./pages/FashionItems"
import ContactForm from './pages/ContactForm';
import LandingPage from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/add' element={<AddNewFashions />} ></Route>
        <Route exact path='/fashions' element={<FashionItems />} ></Route>
        <Route exact path='/contact' element={<ContactForm/>}></Route>
      </Routes>
    </div >

  );
}

export default App;
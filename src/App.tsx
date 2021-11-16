import { FC, useState } from "react";
import {Routes, Route} from "react-router-dom";

import RandomRecipe from "./pages/RandomRecipe";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header/Header"
import AddRecipeForm from "./components/AddRecipeForm/AddRecipeForm";
import Modal from './components/Modal/Modal'
import './index.css';

const App: FC = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <Modal 
        isOpen={isOpen} 
        setIsOpen={setIsOpen}
      >
        <AddRecipeForm />
      </Modal>
      <Routes>
        <Route path='/' element={<RandomRecipe/>}/>
        <Route path='/favorite' element={<Wishlist/>}/>
      </Routes>
    </div>
  );
}

export default App;

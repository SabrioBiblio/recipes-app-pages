import { FC, useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom";

import RandomRecipe from "./pages/RandomRecipe";
import Wishlist from "./pages/Wishlist";
import Header from "./components/Header/Header"
import AddRecipeForm from "./components/AddRecipeForm/AddRecipeForm";
import Modal from './components/Modal/Modal'
import './index.css';
import { useDispatch } from "react-redux";
import { getRecipe } from "./store/actionsRecipe";

const App: FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getRecipe());
  }, []);

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

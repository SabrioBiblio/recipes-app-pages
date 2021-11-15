import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import {store} from './store/store'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RandomRecipe from './pages/RandomRecipe';
import Wishlist from './pages/Wishlist';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <Router>
        <Routes>
          <Route path='/' element={<RandomRecipe/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
      </Router>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);
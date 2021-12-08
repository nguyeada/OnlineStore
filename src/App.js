import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import stores from './data/stores';
import items from './data/items.js';
import React from 'react';

import HomePage from './Components/HomePage';
import Navigation from './Components/Nav';
import StorePage from './Components/Stores/StorePage';
import ShoppingPage from './Components/Shopping/ShoppingPage';


function App() {  

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navigation/>
          <br></br>
        <article className="App-article">
            <Route path="/"exact><HomePage/></Route>
            <Route path="/shoppinglist"><ShoppingPage items={items}/></Route>
            <Route path="/storelist"><StorePage stores={stores}/></Route>
          </article>
        </header>
        
      </Router>
    </div>
    
  );
}

export default App;

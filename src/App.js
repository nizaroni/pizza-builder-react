import React, { Component } from 'react';

import IngredientControls from './components/IngredientControls';
import PizzaPrice from './components/PizzaPrice';
import Pizza from './components/pizza/Pizza';
import './App.css';

class App extends Component {
  render() {
    return (
      <main className="App">
        <header>
          <h1>Pizza Builder</h1>
          <p>Build your own HTML and CSS pizza.</p>
        </header>

        <IngredientControls />
        <PizzaPrice />
        <Pizza />

        <footer>
          <p>
            This pizza educational experience<br />
            brought to you by
            <a href="http://ironhack.com" target="_blank" rel="noopener noreferrer">Ironhack</a>.
          </p>
        </footer>
      </main>
    );
  }
}

export default App;

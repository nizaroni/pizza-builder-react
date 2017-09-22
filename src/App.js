import React, { Component } from 'react';

import IngredientControls from './components/IngredientControls';
import PizzaPrice from './components/PizzaPrice';
import Pizza from './components/pizza/Pizza';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    var ingredients = {
      pepperoni: true,
      mushrooms: true,
      greenPeppers: true,
      whiteSauce: false,
      glutenFreeCrust: false
    };

    this.state = { ingredients };
  }

  render() {
    var { ingredients } = this.state;

    return (
      <main className="App">
        <header>
          <h1>Pizza Builder</h1>
          <p>Build your own HTML and CSS pizza.</p>
        </header>

        <IngredientControls ingredients={ingredients} />
        <PizzaPrice ingredients={ingredients} />
        <Pizza ingredients={ingredients} />

        <footer>
          <p>
            This pizza educational experience<br />
            brought to you by
            <a href="http://ironhack.com"
                target="_blank" rel="noopener noreferrer">
              Ironhack
            </a>.
          </p>
        </footer>
      </main>
    );
  }
}

export default App;

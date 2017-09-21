import React, { Component } from 'react';

import './IngredientControls.css';
import './Panel.css';

class IngredientControls extends Component {
  render() {
    return (
      <section className="IngredientControls panel">
        <ul>
          <li>
            <button className="btn btn-pepperoni turned-on">
              Pepperoni
            </button>
          </li>
          <li>
            <button className="btn btn-mushrooms turned-on">
              Mushrooms
            </button>
          </li>
          <li>
            <button className="btn btn-green-peppers turned-on">
              Green Peppers
            </button>
          </li>
          <li>
            <button className="btn btn-sauce turned-on">
              White Sauce
            </button>
          </li>
          <li>
            <button className="btn btn-crust turned-on">
              Gluten-free Crust
            </button>
          </li>
        </ul>
      </section>
    );
  }
}

export default IngredientControls;

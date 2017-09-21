import React, { Component } from 'react';

import './PizzaPrice.css';
import './Panel.css';

class PizzaPrice extends Component {
  render() {
    return (
      <aside className="PizzaPrice panel">
        <h2>Your pizza's price</h2>

        <b>$10 cheese pizza</b>
        <ul>
          <li>$1 pepperonni</li>
          <li>$1 mushrooms</li>
          <li>$1 green peppers</li>
          <li>$3 white sauce</li>
          <li>$5 gluten-free crust</li>
        </ul>
        <strong>$21</strong>
      </aside>
    );
  }
}

export default PizzaPrice;

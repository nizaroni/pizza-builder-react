import React, { Component } from 'react';

import './PizzaPrice.css';
import './Panel.css';

class PizzaPrice extends Component {
  constructor(props) {
    super(props);
    this.ingredientInfo = {
      pepperoni:       { price: 1, name: 'pepperoni' },
      mushrooms:       { price: 1, name: 'mushrooms' },
      greenPeppers:    { price: 1, name: 'green peppers' },
      whiteSauce:      { price: 3, name: 'white sauce' },
      glutenFreeCrust: { price: 5, name: 'gluten-free crust' }
    };
  }

  render() {
    return (
      <aside className="PizzaPrice panel">
        <h2>Your pizza's price</h2>

        <b>$10 cheese pizza</b>
        <ul>
          {this.renderPriceItems()}
        </ul>
        <strong>${this.getTotal()}</strong>
      </aside>
    );
  }

  renderPriceItems() {
    var priceItems =
      this.getActiveIngredients()
        .map(function priceItem (ingredient) {
          return (
            <li key={ingredient.name}>
              ${ingredient.price} {ingredient.name}
            </li>
          );
        });

    return priceItems;
  }

  getTotal() {
    const total =
      this.getActiveIngredients()
        .reduce(
          function add (sum, ingredient) {
            return sum + ingredient.price;
          },
          10
        );

    return total;
  }

  getActiveIngredients() {
    var { ingredients } = this.props;

    var activeIngredients =
      Object.keys(this.ingredientInfo)
        .filter(
          function isActive (ingredientKey) {
            return ingredients[ingredientKey];
          }
        )
        .map(
          ingredientKey => this.ingredientInfo[ingredientKey]
        );

    return activeIngredients;
  }
}

export default PizzaPrice;

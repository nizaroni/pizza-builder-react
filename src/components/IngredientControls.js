import React, { Component } from 'react';

import './IngredientControls.css';
import './Panel.css';

class IngredientControls extends Component {
  render() {
    return (
      <section className="IngredientControls panel">
        <ul>
          <li>
            <button className={'btn btn-pepperoni ' + this.isTurnedOn('pepperoni')}>
              Pepperoni
            </button>
          </li>
          <li>
            <button className={'btn btn-mushrooms ' + this.isTurnedOn('mushrooms')}>
              Mushrooms
            </button>
          </li>
          <li>
            <button className={'btn btn-green-peppers ' + this.isTurnedOn('greenPeppers')}>
              Green Peppers
            </button>
          </li>
          <li>
            <button className={'btn btn-sauce ' + this.isTurnedOn('whiteSauce')}>
              White Sauce
            </button>
          </li>
          <li>
            <button className={'btn btn-crust ' + this.isTurnedOn('glutenFreeCrust')}>
              Gluten-free Crust
            </button>
          </li>
        </ul>
      </section>
    );
  }

  isTurnedOn(ingredient) {
    var { ingredients } = this.props;
    return ingredients[ingredient]
      ? 'turned-on'
      : '';
  }
}

export default IngredientControls;

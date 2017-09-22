import React, { Component } from 'react';

import './IngredientControls.css';
import './Panel.css';

class IngredientControls extends Component {
  render() {
    var { updateIngredient } = this.props;

    return (
      <section className="IngredientControls panel">
        <ul>
          <li>
            <button
                className={'btn btn-pepperoni ' + this.isTurnedOn('pepperoni')}
                onClick={() => updateIngredient('pepperoni')}>
              Pepperoni
            </button>
          </li>
          <li>
            <button
                className={'btn btn-mushrooms ' + this.isTurnedOn('mushrooms')}
                onClick={() => updateIngredient('mushrooms')}>
              Mushrooms
            </button>
          </li>
          <li>
            <button
                className={'btn btn-green-peppers ' + this.isTurnedOn('greenPeppers')}
                onClick={() => updateIngredient('greenPeppers')}>
              Green Peppers
            </button>
          </li>
          <li>
            <button
                className={'btn btn-sauce ' + this.isTurnedOn('whiteSauce')}
                onClick={() => updateIngredient('whiteSauce')}>
              White Sauce
            </button>
          </li>
          <li>
            <button
                className={'btn btn-crust ' + this.isTurnedOn('glutenFreeCrust')}
                onClick={() => updateIngredient('glutenFreeCrust')}>
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

import React, { Component } from 'react';

import GreenPepperPile from './GreenPepperPile';
import PepperoniPile from './PepperoniPile';
import MushroomPile from './MushroomPile';
import './Pizza.css';

class Pizza extends Component {
  render() {
    var { ingredients } = this.props;
    return (
      <section className="Pizza">
        {ingredients.greenPeppers ?
          <GreenPepperPile amount="21" /> : null}
        {ingredients.mushrooms ?
          <MushroomPile amount="32" /> : null}
        {ingredients.pepperoni ?
          <PepperoniPile amount="32" /> : null}

        <section className={'crust ' + this.isGlutenFree()}>
          <section className="cheese"></section>
          <section className={'sauce ' + this.isWhiteSauce()}></section>
        </section>
      </section>
    );
  }

  isGlutenFree() {
    var { ingredients } = this.props;
    return ingredients.glutenFreeCrust
      ? 'crust-gluten-free'
      : '';
  }

  isWhiteSauce() {
    var { ingredients } = this.props;
    return ingredients.whiteSauce
      ? 'sauce-white'
      : '';
  }
}

export default Pizza;

import React, { Component } from 'react';

import GreenPepperPile from './GreenPepperPile';
import PepperoniPile from './PepperoniPile';
import MushroomPile from './MushroomPile';
import './Pizza.css';

class Pizza extends Component {
  render() {
    return (
      <section className="Pizza">
        <GreenPepperPile />
        <MushroomPile />
        <PepperoniPile />

        <section className="crust crust-gluten-free">
          <section className="cheese"></section>
          <section className="sauce sauce-white"></section>
        </section>
      </section>
    );
  }
}

export default Pizza;

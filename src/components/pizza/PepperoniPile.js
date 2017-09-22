import React, { Component } from 'react';

import repeat from '../../lib/repeat';
import './PepperoniPile.css';

class PepperoniPile extends Component {
  render() {
    return (
      <section className="PepperoniPile">
        {this.renderPepperoniItems()}
      </section>
    );
  }

  renderPepperoniItems() {
    const { amount } = this.props;
    
    var pepperoniItems =
      repeat(amount, function pepperoniItem (count) {
        return (
          <div className={"pepperoni number-" + count}>
            Pepperoni #{count}
          </div>
        );
      });

    return pepperoniItems;
  }
}

export default PepperoniPile;

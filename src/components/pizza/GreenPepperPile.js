import React, { Component } from 'react';

import repeat from 'lib/repeat';
import './GreenPepperPile.css';

class GreenPepperPile extends Component {
  render() {
    return (
      <section className="GreenPepperPile">
        {this.renderGreenPepperItems()}
      </section>
    );
  }

  renderGreenPepperItems() {
    const { amount } = this.props;

    var greenPepperItems =
      repeat(amount, function greenPepperItem (count) {
        return (
          <div className={'green-pepper number-' + count} key={count}>
            Green Pepper #{count}
          </div>
        );
      });

    return greenPepperItems;
  }
}

export default GreenPepperPile;

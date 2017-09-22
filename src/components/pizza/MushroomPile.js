import React, { Component } from 'react';

import repeat from 'lib/repeat';
import './MushroomPile.css';

class MushroomPile extends Component {
  render() {
    return (
      <section className="MushroomPile">
        {this.renderMushroomItems()}
      </section>
    );
  }

  renderMushroomItems() {
    const { amount } = this.props;
    
    var mushroomItems =
      repeat(amount, function mushroomItem (count) {
        return (
          <div className={'mushroom number-' + count}>
            <div className="cap"> Mushroom #{count} </div>
            <div className="stem"></div>
          </div>
        );
      });

    return mushroomItems;
  }
}

export default MushroomPile;

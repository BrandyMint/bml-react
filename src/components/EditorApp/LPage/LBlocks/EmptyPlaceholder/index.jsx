import React, { Component } from 'react';
import LBlockAddButton from '../LBlockAddButton';

import './index.css';

class EmptyPlaceholder extends Component {
  render() {
    return (
        <div>
          <div className="LBlocksEmptyPlaceholder">
            <h2 className="LBlocksEmptyPlaceholder-header">
              Лендинг не содержит никаких элеметов.
            </h2>
            <span>Добавьте что-нибудь.</span>
          </div>
          <LBlockAddButton />
        </div>
    );
  }
}

export default EmptyPlaceholder;

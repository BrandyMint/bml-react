import React, { PropTypes, Component } from 'react';
import LBlockAddButton from 'components/LBlockAddButton';

import './index.css';

class EmptyPlaceholder extends Component {
  render() {
    const { onAddBlock } = this.props;
    return (
        <div>
          <div className="LBlocksEmptyPlaceholder">
            <h2 className="LBlocksEmptyPlaceholder-header">
              Лендинг не содержит никаких элеметов.
            </h2>
            <span>Добавьте что-нибудь.</span>
          </div>
          <LBlockAddButton onClick={onAddBlock} />
        </div>
    );
  }
}

EmptyPlaceholder.propTypes = {
  onAddBlock: PropTypes.func.isRequired,
};

export default EmptyPlaceholder;

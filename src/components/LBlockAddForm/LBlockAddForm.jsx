import React, { Component, PropTypes } from 'react';

import map from 'lodash/map';
import partial from 'lodash/partial';

import LBlockAddFormItem from './LBlockAddFormItem';

class LBlockAddForm extends Component {
  render() {
    const { items, selectedIndex, onSelect, onAdd } = this.props;

    const select = (index) => {
      onSelect(index);
      onAdd();
    }

    return (
      <div className="LBlockAddForm">
        {map(items, (item, index) =>
          <LBlockAddFormItem
            {...item}
            isSelected={selectedIndex === index}
            key={item.type}
            onSelect={partial(select, index)}
          />
        )}
      </div>
    );
  }
}

LBlockAddForm.propTypes = {
  items: PropTypes.array.isRequired,
  selectedIndex: PropTypes.number,
  onSelect: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default LBlockAddForm;

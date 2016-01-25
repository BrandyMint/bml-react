import React, { Component, PropTypes } from 'react';

import map from 'lodash/map';
import partial from 'lodash/partial';

import LBlockAddFormItem from './LBlockAddFormItem';

class LBlockAddForm extends Component {
  render() {
    const { items, selectedIndex, onSelect } = this.props;

    return (
      <div className="LBlockAddForm">
        {map(items, (item, index) =>
          <LBlockAddFormItem
            {...item}
            isSelected={selectedIndex === index}
            key={item.type}
            onSelect={partial(onSelect, index)}
          />
        )}
      </div>
    );
  }
}

export default LBlockAddForm;
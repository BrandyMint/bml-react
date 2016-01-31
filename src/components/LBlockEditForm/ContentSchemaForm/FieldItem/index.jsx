import Icon from 'components/ui-elements/Icon';
import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';
import partial from 'lodash/partial';

import FieldSubitem from '../FieldSubitem';

class FieldItem extends Component {
  render() {
    const { item, itemSchemaFields, onChange } = this.props;

    return (
      <li>
      {
        map(itemSchemaFields, (field, index) =>
          (
            <FieldSubitem
              key={index}
              field={field}
              value={item[field.key]}
              onChange={partial(onChange, field.key)}
            />
          )
       )}
       <a href="#" className="text-danger">
       <Icon glyph="remove" />
       </a>
      </li>
    );
  }
}

FieldItem.propTypes = {
  itemSchemaFields: PropTypes.array.isRequired,
  item: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldItem;

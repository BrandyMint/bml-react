import React, { Component, PropTypes } from 'react';
import map from 'lodash/map';

import FieldSubitem from 'components/ContentSchemaForm/FieldSubitem';

class FieldItem extends Component {
  render() {
    const { item, itemSchemaFields, onChange } = this.props;

    return (
      <li>
      { map(itemSchemaFields, (field, index) =>
        <FieldSubitem
          key={index}
          field={field}
          value={item[field.key]}
          onChange={onChange}
        />
       )}
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

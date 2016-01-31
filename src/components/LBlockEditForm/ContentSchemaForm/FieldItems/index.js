import React, { Component, PropTypes } from 'react';
import { FIELD_BASIC_TYPES } from 'constants/schemaFieldTypes';
import map from 'lodash/map';

import FieldItem from '../FieldItem';

class FieldItems extends Component {
  render() {
    const {
      title,
      fieldKey,
      items,
      itemSchema,
      onChange,
    } = this.props;

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
          </label>
          <ol className="FieldItems">
            {map(items, (item, index) =>
              <FieldItem
                item={item}
                key={index}
                itemSchemaFields={itemSchema.fields}
                onChange={onChange}
              />
             )
            }
          </ol>
      </fieldset>
    );
  }
}

FieldItems.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemSchema: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        type: PropTypes.oneOf(FIELD_BASIC_TYPES).isRequired,
        isRequired: PropTypes.bool.isRequired,
      })
    ).isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldItems;

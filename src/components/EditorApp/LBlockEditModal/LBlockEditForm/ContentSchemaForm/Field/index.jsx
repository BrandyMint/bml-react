import React, { Component, PropTypes } from 'react';
import partial from 'lodash/partial';

import { FIELD_BASIC_TYPES } from 'constants/fieldTypes';
import { FIELD_COMPONENTS } from '../schemaFieldTypes';
import { FIELD_TYPES } from 'constants/fieldTypes';

class Field extends Component {
  shouldComponentUpdate(nextProps) {
    // TODO починить изменение FieldItems
    //
    const should = true || this.props.field !== nextProps.field ||
      this.props.value !== nextProps.value;

    return should;
  }
  render() {
    const { field, value, onChange } = this.props;
    const FieldComponent = FIELD_COMPONENTS[field.type];
    return (
      <FieldComponent
        field={field}
        onChange={partial(onChange, field.key)}
        value={value}
      />
    );
  }
}

const ItemSchemaPropType = {
  limit: PropTypes.number.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      type: PropTypes.oneOf(FIELD_BASIC_TYPES).isRequired,
      isRequired: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

Field.propTypes = {
  value: PropTypes.any,
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(FIELD_TYPES).isRequired,
    isRequired: PropTypes.bool.isRequired,
    limit: PropTypes.number,
    itemSchema: PropTypes.shape(ItemSchemaPropType),
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;

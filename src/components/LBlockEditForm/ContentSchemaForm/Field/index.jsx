import React, { Component, PropTypes } from 'react';
import { FIELD_TYPES } from 'constants/fieldTypes';
import { FIELD_COMPONENTS } from 'constants/schemaFieldTypes';

class Field extends Component {
  render() {
    const { field, value, onChange } = this.props;
    const FieldComponent = FIELD_COMPONENTS[field.type];
    return (
      <FieldComponent
        field={field}
        onChange={onChange}
        value={value}
      />
    );
  }
}

Field.propTypes = {
  value: PropTypes.any,
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(FIELD_TYPES).isRequired,
    isRequired: PropTypes.bool.isRequired,
    limit: PropTypes.number,
    itemSchema: PropTypes.object,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Field;

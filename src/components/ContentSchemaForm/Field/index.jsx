import React, { Component, PropTypes } from 'react';
import { FIELD_TYPES, FIELD_COMPONENTS } from 'constants/schemaFieldTypes';

class Field extends Component {
  render() {
    const { field, block } = this.props;
    const value = block.content[field.key];
    const handleChange = () => {}

    const FieldComponent = FIELD_COMPONENTS[field.type];
    return (
      <FieldComponent
        fieldKey={field.key}
        title={field.title}
        isRequired={field.isRequired}
        onChange={handleChange}
        value={value}
        />
    );
  };
}

Field.propTypes = {
  block: PropTypes.object.isRequired,
  field: PropTypes.object,
  field: PropTypes.shape({
    title: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    type: PropTypes.oneOf(FIELD_TYPES).isRequired,
    isRequired: PropTypes.bool.isRequired,
  }).isRequired,
  // onChange: PropTypes.func.isRequired,
};

export default Field;

import { FIELD_COMPONENTS } from 'constants/schemaFieldTypes';
import React, { Component, PropTypes } from 'react';

class FieldSubitem extends Component {
  render() {
    const { field, value, onChange } = this.props;
    const FieldComponent = FIELD_COMPONENTS[field.type];
    return (
      <FieldComponent
        fieldKey={field.key}
        title={field.title}
        isRequired={field.isRequired}
        onChange={onChange}
        value={value}
      />
    );
  }
}

FieldSubitem.propTypes = {
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default FieldSubitem;

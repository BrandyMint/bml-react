import { FIELD_COMPONENTS } from 'constants/schemaFieldTypes';
import CustomPropTypes from 'constants/customPropTypes';
import React, { Component, PropTypes } from 'react';

class FieldSubitem extends Component {
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

FieldSubitem.propTypes = {
  field: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  value: CustomPropTypes.fieldValue.isRequired,
};

export default FieldSubitem;

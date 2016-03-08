import React, { PropTypes } from 'react';
import { FIELD_COMPONENTS } from '../../schemaFieldTypes';
import CustomPropTypes from 'constants/customPropTypes';

const FieldSubitem = ({ field, value, onChange }) => {
  const FieldComponent = FIELD_COMPONENTS[field.type];
  return (
    <FieldComponent
      field={field}
      onChange={onChange}
      value={value}
    />
  );
};

const FieldValue = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  CustomPropTypes.location,
]);

FieldSubitem.propTypes = {
  field: PropTypes.object.isRequired, // TODO какой?
  onChange: PropTypes.func.isRequired,
  value: FieldValue,
};

export default FieldSubitem;

import React, { PropTypes } from 'react';
import { FIELD_COMPONENTS } from '../../schemaFieldTypes';
import { MapLocationType } from 'views/types/mapType';

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
  MapLocationType,
]);

FieldSubitem.propTypes = {
  field: PropTypes.object.isRequired, // TODO какой?
  onChange: PropTypes.func.isRequired,
  value: FieldValue,
};

export default FieldSubitem;

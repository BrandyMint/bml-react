import React, { PropTypes } from 'react';
import { FIELD_COMPONENTS } from '../../schemaFieldTypes';
import { FIELD_TYPES } from 'constants/fieldTypes';
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


// Все типы принимаемые Fields-ами
//
const FieldValue = PropTypes.oneOfType([
  PropTypes.bool,
  PropTypes.string,
  PropTypes.number,
  PropTypes.array,
  PropTypes.object,
  MapLocationType,
]);

export const FieldSubitemPropTypes = {
  type: PropTypes.oneOf(FIELD_TYPES).isRequired,
};

FieldSubitem.propTypes = {
  field: PropTypes.shape(FieldSubitemPropTypes).isRequired, // TODO какой?
  onChange: PropTypes.func.isRequired,
  value: FieldValue,
};

export default FieldSubitem;

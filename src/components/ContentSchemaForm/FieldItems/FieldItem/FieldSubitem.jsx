import React, { Component, PropTypes } from 'react';
import { FIELD_COMPONENTS } from '../../schemaFieldTypes';
import { FIELD_TYPES } from 'constants/fieldTypes';
import { MapLocationType } from 'views/types/mapType';

class FieldSubitem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(value) {
    const { field, onChange } = this.props;
    onChange(field.key, value);
  }
  render() {
    const { field, value } = this.props;

    const FieldComponent = FIELD_COMPONENTS[field.type];
    return (
      <FieldComponent
        field={field}
        onChange={this.onChange}
        value={value}
      />
    );
  }
}


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

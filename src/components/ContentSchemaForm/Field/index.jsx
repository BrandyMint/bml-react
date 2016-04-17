import React, { Component, PropTypes } from 'react';
import { FIELD_BASIC_TYPES } from 'constants/fieldTypes';
import { FIELD_COMPONENTS } from '../schemaFieldTypes';
import { FIELD_TYPES } from 'constants/fieldTypes';

class Field extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    // TODO починить изменение FieldItems
    //
    const should = this.props.field !== nextProps.field ||
      this.props.value !== nextProps.value;

    return should;
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
        value={value}
        onChange={this.onChange}
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

import React, { Component, PropTypes } from 'react';
import FieldItems from '../FieldItems';
import { FIELD_TYPES, FIELD_COMPONENTS } from 'constants/schemaFieldTypes';

class Field extends Component {
  render() {
    const { field, content, onChange } = this.props;
    const value = content[field.key];
    if (field.type === 'items') {
      return (
        <FieldItems
          fieldKey={field.key}
          title={field.title}
          itemSchema={field.itemSchema}
          onChange={onChange}
          items={value}
        />
      );
    }
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

Field.propTypes = {
  content: PropTypes.object.isRequired,
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

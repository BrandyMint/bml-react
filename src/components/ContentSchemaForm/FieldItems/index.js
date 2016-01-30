import React, { Component, PropTypes } from 'react';
import { FIELD_BASIC_TYPES, FIELD_COMPONENTS } from 'constants/schemaFieldTypes';
import map from 'lodash/map';

class FieldItemSubfield extends Component {
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
class FieldItem extends Component {
  render() {
    const { item, itemSchemaFields, onChange } = this.props;

    return (
      <li>
      { map(itemSchemaFields, (field, index) =>
        <FieldItemSubfield
          key={index}
          field={field}
          value={item[field.key]}
          onChange={onChange}
          />
          )}
      </li>
    );
  }
}

class FieldItems extends Component {
  render() {
    const { title, fieldKey, items, itemSchema, isRequired, onChange } = this.props;

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          {title}
          </label>
          <ul className="FieldItems">
            {map(items, (item, index) =>
              <FieldItem
                item={item}
                key={index}
                itemSchemaFields={itemSchema.fields}
                onChange={onChange} />
             )
            }
          </ul>
      </fieldset>
    );
  };
}

FieldItems.propTypes = {
  title: PropTypes.string.isRequired,
  fieldKey: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemSchema: PropTypes.shape({
    fields: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        key: PropTypes.string.isRequired,
        type: PropTypes.oneOf(FIELD_BASIC_TYPES).isRequired,
        isRequired: PropTypes.bool.isRequired,
      })
    ).isRequired,
    limit: PropTypes.number.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldItems;


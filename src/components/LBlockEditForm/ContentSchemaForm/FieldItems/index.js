import React, { Component, PropTypes } from 'react';

import Icon from 'components/ui-elements/Icon';
import { FIELD_BASIC_TYPES } from 'constants/schemaFieldTypes';
import map from 'lodash/map';
import partial from 'lodash/partial';
import each from 'lodash/each';
import clone from 'lodash/clone';

import FieldItem from '../FieldItem';

class FieldItems extends Component {
  render() {
    const {
      title,
      fieldKey,
      items,
      itemSchema,
      onChange,
    } = this.props;

    const blankItem = {};
    each(itemSchema.fields, (field) => blankItem[field.key] = field.defaultValue || '');

    const onClickAdd = () => {
      items.push(clone(blankItem));
      onChange(items);
    };

    return (
      <fieldset className="form-group">
        <label htmlFor={fieldKey}>
          <h3>
            {title}
          </h3>
        </label>
        <ol className="FieldItems">
          {map(items, (item, index) => {
            const onChangeItem = (index, key, value) => {
              items[index][key] = value;
              onChange(items);
            };
            return (
              <FieldItem
                item={item}
                key={index}
                itemSchemaFields={itemSchema.fields}
                onChange={partial(onChangeItem, index)}
              />
            );
          }
          )}
        </ol>
        <div className="pull-right">
          <button name="add" onClick={onClickAdd} className="btn btn-success-outline btn-sm">
            <Icon glyph="plus" />
          </button>
        </div>
      </fieldset>
    );
  }
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

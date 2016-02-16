import React, { Component, PropTypes } from 'react';

import FormPropType from 'constants/formPropType';
import map from 'lodash/map';
import partial from 'lodash/partial';
import each from 'lodash/each';
import clone from 'lodash/clone';

import FieldItem from '../FieldItem';

class FieldItems extends Component {
  render() {
    const { field, value, onChange } = this.props;

    const items = value;

    const {
      title,
      key,
      itemSchema,
    } = field;

    const blankItem = {};
    each(itemSchema.fields, (f) => blankItem[f.key] = f.defaultValue || '');

    const onClickAdd = () => {
      items.push(clone(blankItem));
      onChange(items);
    };

    return (
      <fieldset className="form-group">
        <label htmlFor={key}>
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
            const onRemoveItem = (index) => {
              items.splice(index, 1);
              onChange(items);
            };
            return (
              <FieldItem
                item={item}
                key={index}
                itemSchemaFields={itemSchema.fields}
                onChange={partial(onChangeItem, index)}
                onRemove={partial(onRemoveItem, index)}
              />
            );
          }
          )}
        </ol>
        <div className="pull-xs-right">
          <button name="add" onClick={onClickAdd} className="btn btn-success-outline btn-sm">
            Добавить
          </button>
        </div>
      </fieldset>
    );
  }
}

FieldItems.propTypes = {
  field: FormPropType.fieldItemsField.isRequired,
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FieldItems;

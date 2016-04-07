import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import FlatButton from 'material-ui/lib/flat-button';

import map from 'lodash/map';
import partial from 'lodash/partial';
import each from 'lodash/each';
import clone from 'lodash/clone';

import FieldItem from './FieldItem';

const BLANK_ITEM = {
  inputType: 'text',
  isRequired: false,
  entities: [],
  title: 'FIELD', // TODO i18n
};

class FieldItems extends Component {
  render() {
    const { t, field, value, onChange } = this.props;

    const items = value || [];

    const {
      title,
      key,
      itemSchema,
    } = field;

    const blankItem = clone(BLANK_ITEM);
    each(itemSchema.fields, (f) => (blankItem[f.key] = f.defaultValue || ''));

    const onClickAdd = () => {
      items.push(blankItem);
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
            const onChangeItem = (fieldKey, fieldValue) => {
              items[index][fieldKey] = fieldValue;
              onChange(items);
            };
            const onRemoveItem = () => {
              items.splice(index, 1);
              onChange(items);
            };
            return (
              <FieldItem
                item={item}
                key={index}
                itemSchemaFields={itemSchema.fields}
                onChange={partial(onChangeItem)}
                onRemove={partial(onRemoveItem)}
              />
            );
          }
          )}
        </ol>
        <div className="pull-xs-right">
          <FlatButton primary onClick={onClickAdd} label={t('add')} />
        </div>
      </fieldset>
    );
  }
}


const FieldPropType = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.string.isRequired,
};

FieldItems.propTypes = {
  t: PropTypes.func.isRequired,
  field: PropTypes.shape(FieldPropType).isRequired,
  value: PropTypes.array.isRequired, // items
  onChange: PropTypes.func.isRequired,
};

export default translate('field_items')(FieldItems);

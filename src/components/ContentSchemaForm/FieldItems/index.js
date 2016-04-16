import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';

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
  constructor(props) {
    super(props);

    this.blankItem = this.buildBlankItem();
    this.onClickAdd   = this.onClickAdd.bind(this);
    this.onChangeItem = this.onChangeItem.bind(this);
    this.onRemoveItem = this.onRemoveItem.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    const should = nextProps.field !== this.props.field ||
      nextProps.value !== this.props.value;

    return should;
  }
  onClickAdd() {
    const items = this.props.value;
    const newItems = [
      ...items,
      this.blankItem,
    ]
    this.props.onChange(newItems);
  }

  onChangeItem(index, fieldKey, fieldValue) {
    const items = this.props.value;
    const newItems = [ ...items ];
    const item = newItems[index];
    newItems[index] = {...item, [fieldKey]: fieldValue};
    this.props.onChange(newItems);
  }

  onRemoveItem(index) {
    const items = this.props.value;
    const newItems = [
      ...items.slice(0, index),
      ...items.slice(index + 1),
    ];
    this.props.onChange(newItems);
  }

  buildBlankItem() {
    const blankItem = clone(BLANK_ITEM);
    each(this.props.field.itemSchema.fields, (f) => (blankItem[f.key] = f.defaultValue || ''));
    return blankItem;
  }

  render() {
    const { t, field, value } = this.props;

    const items = value || [];

    const {
      title,
      key,
      itemSchema,
    } = field;

    return (
      <fieldset className="form-group">
        <label htmlFor={key}>
          <h3>
            {title}
          </h3>
        </label>
        <ol className="FieldItems">
          {map(items, (item, index) => {
            return (
              <FieldItem
                item={item}
                key={index}
                index={index}
                itemSchemaFields={itemSchema.fields}
                onChange={this.onChangeItem}
                onRemove={this.onRemoveItem}
              />
            );
          }
          )}
        </ol>
        <div className="pull-xs-right">
          <RaisedButton primary onClick={this.onClickAdd} label={t('add')} />
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

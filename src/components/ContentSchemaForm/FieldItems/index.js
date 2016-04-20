import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import RaisedButton from 'material-ui/RaisedButton';
import map from 'lodash/map';
import each from 'lodash/each';
import clone from 'lodash/clone';
import FieldItem from './FieldItem';

const BLANK_ITEM = {
  title: 'FIELD', // TODO i18n
  href: '',
  target: '_parent',
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
      this.blankItem,
      ...items,
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
    const { title, key, itemSchema } = field;
    const { titleKey, subtitleKey } = itemSchema;
    const items = value || [];
    return (
      <div className="FieldItems" style={{marginTop: 20}}>
        <fieldset className="form-group">
          <label htmlFor={key}>
            <h3 style={{display: 'inline-block', marginLeft: 20, marginRight: 20}}>
              {title}
            </h3>
            <RaisedButton primary onClick={this.onClickAdd} label={t('add')} />
          </label>
          <div>
            {map(items, (item, index) => (
                <FieldItem
                  item={item}
                  key={index}
                  index={index}
                  titleKey={titleKey}
                  subtitleKey={subtitleKey}
                  itemSchemaFields={itemSchema.fields}
                  horizontal
                  onChange={this.onChangeItem}
                  onRemove={this.onRemoveItem}
                />
              )
            )}
          </div>
        </fieldset>
    </div>
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

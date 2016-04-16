import React, { Component, PropTypes } from 'react';
import { translate } from 'react-i18next';
import map from 'lodash/map';
import partial from 'lodash/partial';

import RaisedButton from 'material-ui/RaisedButton';

import FieldSubitem, { FieldSubitemPropTypes } from './FieldSubitem';

import './index.scss';

class FieldItem extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onRemove = this.onRemove.bind(this);
  }

  onChange(fieldKey, value) {
    const { index, onChange } = this.props;
    onChange(index, fieldKey, value);
  }

  onRemove() {
    const { index, onRemove } = this.props;
    onRemove(index);
  }

  render () {
    const { t, item, itemSchemaFields } = this.props;

    return (
      <li className="Editor-FieldItem">
        {
          map(itemSchemaFields, (field, index) => (
            <FieldSubitem
              key={index}
              field={field}
              value={item[field.key]}
              onChange={this.onChange}
            />
          )
         )}
       <RaisedButton label={t('remove')} onClick={this.onRemove} />
       </li>
    );
  }
}

FieldItem.propTypes = {
  t: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  itemSchemaFields: PropTypes.arrayOf(
    PropTypes.shape(FieldSubitemPropTypes)
  ).isRequired,
  item: PropTypes.object.isRequired, // Собственно значение поля согласно схеме
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default translate('field_item')(FieldItem);

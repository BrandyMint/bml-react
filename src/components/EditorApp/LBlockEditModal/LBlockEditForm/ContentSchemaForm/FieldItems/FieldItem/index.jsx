import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';
import map from 'lodash/map';
import partial from 'lodash/partial';

import FlatButton from 'material-ui/lib/flat-button';

import FieldSubitem, { FieldSubitemPropTypes } from './FieldSubitem';

import './index.scss';

const FieldItem = ({ t, item, itemSchemaFields, onChange, onRemove }) => (
  <li className="Editor-FieldItem">
    {
      map(itemSchemaFields, (field, index) => (
          <FieldSubitem
            key={index}
            field={field}
            value={item[field.key]}
            onChange={partial(onChange, field.key)}
          />
        )
      )}
    <FlatButton label={t('remove')} onClick={onRemove} />
  </li>
);

FieldItem.propTypes = {
  t: PropTypes.func.isRequired,
  itemSchemaFields: PropTypes.arrayOf(
    PropTypes.shape(FieldSubitemPropTypes)
  ).isRequired,
  item: PropTypes.object.isRequired, // Собственно значение поля согласно схеме
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default translate('field_item')(FieldItem);

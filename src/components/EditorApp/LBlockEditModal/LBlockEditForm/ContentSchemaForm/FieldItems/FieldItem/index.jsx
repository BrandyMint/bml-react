import React, { PropTypes } from 'react';
import { translate } from 'react-i18next';
import { FIELD_BASIC_TYPES } from 'constants/fieldTypes';
import map from 'lodash/map';
import partial from 'lodash/partial';

import FieldSubitem from './FieldSubitem';

import './index.scss';

const FieldItem = ({ t, item, itemSchemaFields, onChange, onRemove }) =>
(
  <li className="Editor-FieldItem">
    {
      map(itemSchemaFields, (field, index) =>
        (
          <FieldSubitem
            key={index}
            field={field}
            value={item[field.key]}
            onChange={partial(onChange, field.key)}
          />
        )
     )}
     <button className="btn btn-sm btn-danger" onClick={onRemove}>
       {t('remove')}
     </button>
  </li>
);

const itemSchemaFieldPropType = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  type: PropTypes.oneOf(FIELD_BASIC_TYPES).isRequired,
  isRequired: PropTypes.bool.isRequired,
};

FieldItem.propTypes = {
  t: PropTypes.func.isRequired,
  itemSchemaFields: PropTypes.arrayOf(
    PropTypes.shape(itemSchemaFieldPropType)
  ).isRequired, // TODO какой у них тип?
  item: PropTypes.object.isRequired, // Собственно значение поля согласно схеме
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default translate('field_item')(FieldItem);

import React, { PropTypes } from 'react';
import { FIELD_BASIC_TYPES } from 'constants/fieldTypes';
import map from 'lodash/map';
import partial from 'lodash/partial';

import FieldSubitem from './FieldSubitem';

import MdRemoveCircleOutline from 'react-icons/lib/md/remove-circle_outline';

const FieldItem = ({ item, itemSchemaFields, onChange, onRemove }) =>
(
  <li>
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
     <MdRemoveCircleOutline />
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
  itemSchemaFields: PropTypes.arrayOf(
    PropTypes.shape(itemSchemaFieldPropType)
  ).isRequired, // TODO какой у них тип?
  item: PropTypes.object.isRequired, // Собственно значение поля согласно схеме
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default FieldItem;

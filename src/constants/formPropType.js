import { PropTypes } from 'react';
import { FIELD_BASIC_TYPES } from 'constants/schemaFieldTypes';
import CustomPropTypes from 'constants/customPropTypes';

const FieldType = PropTypes.shape({
  title: PropTypes.string,
  key: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: CustomPropTypes.inputType.isRequired,
});

const FieldItemsField = PropTypes.shape({
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  type: PropTypes.string.isRequired,
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
});

export default {
  submitTitle: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(FieldType).isRequired,
  fieldItemsField: FieldItemsField,
};

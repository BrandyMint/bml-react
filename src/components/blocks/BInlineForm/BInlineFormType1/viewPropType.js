import { PropTypes } from 'react';
import CustomPropTypes from 'constants/customPropTypes';

const FieldType = PropTypes.shape({
  title: PropTypes.string,
  key: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  inputType: CustomPropTypes.inputType.isRequired,
});

export default {
  submitTitle: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(FieldType).isRequired,
};
